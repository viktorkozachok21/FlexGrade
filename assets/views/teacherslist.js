const TeachersList = {
  template: `
  <div>
    <v-row>
      <v-text-field
      class="col-xs-12 col-sm-10 px-5"
      v-model="search"
      append-icon="mdi-magnify"
      label="Пошук..."
      color="teal darken-4"
      @keydown.native.space.prevent
      @input="store.state.selectedTeachers = []"
      single-line
      hide-details
      ></v-text-field>
      <v-layout class="col-2 d-flex align-center justify-center">
        <v-span
        class="d-none d-sm-flex mdi mdi-24px mdi-printer home-link"
        @click="print"
        v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && $route.meta.showNewTeacher"
        title="Друк списку"
        ></v-span>
      </v-layout>
    </v-row>
    <v-data-table
    :headers="headers"
    :items="teachers"
    :item-key="itemKey"
    :sort-by="sortBy"
    id="teachers"
    :search="search"
    transition="fade-transition"
    v-model="store.state.selectedTeachers"
    :single-select="singleSelect"
    :show-select="store.state.showSelectedTeachers"
    no-results-text="Не знайдено відповідних записів"
    no-data-text=""
    :page="page"
    :items-per-page="itemsPerPage"
    @page-count="pageCount = $event"
    @click:row="moreInfo"
    class="elevation-1 people"
    hide-default-footer
    :loading="loading"
    loading-text="Завантаження... Будь ласка, зачекайте"
    ><v-progress-linear
    v-show="loading"
    slot="progress"
    color="teal darken-4"
    indeterminate
    height="2"
    ></v-progress-linear>
    </v-data-table>
    <v-pagination
    class="font-weight-black"
    v-model="page"
    :total-visible="7"
    v-if="pageCount > 0"
    :length="pageCount"
    @click.native="$root.scrollToTop"
    dark color="teal darken-4"
    ></v-pagination>
    <v-text-field
    v-model="totalItems"
    v-if="totalItems"
    prepend-inner-icon="mdi-human-male-female"
    color="teal darken-4"
    solo readonly
    ></v-text-field>
  </div>
  `,
  data: () => ({
    totalItems: '',
    search: '',
    teachers: [],
    itemKey: 'code',
    loading: false,
    pageCount: 0,
    page: 1,
    sortBy: 'fullname',
    selected: [],
    singleSelect: false,
    itemsPerPage: 35,
    headers: [{
        text: 'П.І.П.',
        align: 'left',
        value: 'fullname',
      },
      {
        text: 'Email',
        align: 'left',
        sortable: false,
        value: 'email'
      }
    ],
  }),
  computed: {
    watcher() {
      return store.state.teachers
    }
  },
  watch: {
    watcher: {
      handler() {
        this.getData()
          .then(data => {
            this.teachers = data.loaded
            this.totalItems = " Загальна кількість викладачів: " + data.total
            this.loading = false
          })
      },
      deep: true,
    },
  },
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      })
    } else {
      this.getData()
        .then(data => {
          this.teachers = data.loaded
          this.totalItems = " Загальна кількість викладачів: " + data.total
          this.loading = false
        })
    }
  },
  beforeRouteLeave(to, from, next) {
    store.state.selectedTeachers = []
    next()
  },
  methods: {
    getData() {
      this.loading = true
      this.search = ''
      return new Promise((resolve, reject) => {
        let loaded = store.state.teachers
        let total = loaded.length
        setTimeout(() => {
          resolve({
            loaded,
            total,
          })
        }, 2000)
      })
    },
    moreInfo(teacher) {
      sessionStorage.removeItem("teacher")
      sessionStorage.setItem("teacher", JSON.stringify(teacher))
      store.state.person = []
      store.state.person.push(teacher)
      store.state.changePassword.code = teacher.code
      router.push({
        name: 'teacher',
        params: {
          'code': teacher.code,
          'profile': teacher
        }
      })
    },
    print () {
      const settings = {
        name: '_blank',
        specs: [
          'fullscreen=yes',
          'titlebar=yes',
          'scrollbars=yes'
        ],
        'styles': [
          '/static/print.css',
          '/static/print-main.css'
        ]
      }
      this.$htmlToPaper('teachers',settings)
    }
  }
}
