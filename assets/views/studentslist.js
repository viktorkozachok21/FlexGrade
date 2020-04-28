const StudentsList = {
  template: `
  <div>
    <v-row>
      <v-text-field
      class="col-xs-12 col-md-8 px-5"
      v-model="search"
      append-icon="mdi-magnify"
      label="Пошук..."
      color="teal darken-4"
      @keydown.native.space.prevent
      @input="store.state.selectedStudents = []"
      single-line
      hide-details
      ></v-text-field>
      <v-layout class="col-xs-1 d-flex align-center justify-center">
        <v-span
        class="d-none d-sm-flex mdi mdi-24px mdi-printer home-link"
        @click="print"
        v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && $route.meta.showNewStudent"
        title="Друк списку"
        ></v-span>
      </v-layout>
      <v-layout class="col-xs-3 d-flex align-center justify-center">
        <v-switch
        id="switch"
        v-model="options.studyStatus"
        flat
        dense
        color="teal darken-4"
        ></v-switch>
        <v-label v-if="options.studyStatus">Чи навчаються: Так</v-label>
        <v-label v-else>Чи навчаються: Ні</v-label>
      </v-layout>
    </v-row>
    <v-data-table
    v-if="students"
    id="students"
    :headers="headers"
    :items="students"
    :item-key="itemKey"
    :sort-by="sortBy"
    :search="search"
    transition="fade-transition"
    no-results-text="Не знайдено відповідних записів"
    no-data-text=""
    v-model="store.state.selectedStudents"
    :single-select="singleSelect"
    :show-select="options.studyStatus ? store.state.showSelectedStudents : false"
    :options.sync="options"
    :items-per-page="itemsPerPage"
    @page-count="pageCount = $event"
    @click:row="moreInfo"
    color="teal darken-4"
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
    v-if="pageCount > 0"
    v-model="options.page"
    :total-visible="7"
    :length="pageCount"
    @click.native="$root.scrollToTop"
    dark color="teal darken-4"
    ></v-pagination>
    <v-text-field
    v-model="totalItems"
    v-if="totalItems"
    color="teal darken-4"
    prepend-inner-icon="mdi-human-male-female"
    solo
    readonly
    ></v-text-field>
  </div>
  `,
  data: () => ({
    totalItems: '',
    search: '',
    students: [],
    itemKey: 'code',
    loading: false,
    pageCount: 0,
    options: {
      page: 1,
      studyStatus: true,
    },
    sortBy: 'fullname',
    itemsPerPage: 35,
    selected: [],
    singleSelect: false,
    headers: [{
        text: 'П.І.П.',
        align: 'left',
        value: 'fullname',
      },
      {
        text: 'Група',
        align: 'center',
        width: '11%',
        value: 'group_number',
      },
      {
        text: 'Залікова книжка №',
        align: 'center',
        value: 'book_number',
      },
      {
        text: 'Ступінь освіти',
        align: 'center',
        value: 'degree',
      }
    ],
  }),
  computed: {
    watcher() {
      let options = this.options
      let students = store.state.students
      return { options, students }
    }
  },
  watch: {
    watcher: {
      handler() {
        this.getData()
          .then(data => {
            this.students = data.result
            this.totalItems = " Загальна кількість студентів: " + data.total
            this.loading = false
            store.state.selectedStudents = []
          })
      },
      deep: true,
    }
  },
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      })
    } else {
      this.getData()
        .then(data => {
          this.students = data.result
          this.totalItems = " Загальна кількість студентів: " + data.total
          this.loading = false
        })
    }
  },
  beforeRouteLeave(to, from, next) {
    store.state.selectedStudents = []
    next()
  },
  methods: {
    getData() {
      this.loading = true
      this.search = ''
      return new Promise((resolve, reject) => {
        let { studyStatus, page } = this.options
        store.dispatch('checkStatus', studyStatus)
        let result = store.getters.getStudents(studyStatus)
        let total = result.length
        setTimeout(function() {
          resolve({
            result,
            total
          })
        }, 2000);
      })
    },
    moreInfo(student) {
      if (store.state.status == 'Admin' || store.state.status == 'Teacher') {
        sessionStorage.removeItem("student")
        sessionStorage.setItem("student", JSON.stringify(student))
        store.state.person = []
        store.state.person.push(student)
        store.state.changePassword.code = student.code
        router.push({
          name: 'student',
          params: {
            'code': student.code,
            'profile': student
          }
        })
      }
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
      this.$htmlToPaper('students',settings)
    }
  }
}
