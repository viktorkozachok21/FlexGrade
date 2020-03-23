const List = Vue.component('students-list', {
  template: `
  <div>
  <v-card-title class="row">
    <v-text-field class="col-xs-12 col-md-9" v-model="search" append-icon="mdi-magnify" label="Пошук" single-line hide-details></v-text-field>
    <v-switch
    v-if="options.studyStatus === true"
    v-model="options.studyStatus" flat
    label="Чи навчаються: Так" dense
    class="col-xs-3 mx-auto"
    color="teal darken-4"
    ></v-switch>
    <v-switch
    v-else
    v-model="options.studyStatus" flat
    label="Чи навчаються: Ні" dense
    class="col-xs-3 mx-auto"
    color="teal darken-4"
    ></v-switch>
    <v-alert
    type="success"
    v-model="alert"
    icon="mdi-check-circle"
    outlined text light tile
    transition="scale-transition"
    >Текст успішно скопійовано.
    </v-alert>
  </v-card-title>
  <v-data-table
  :headers="headers"
  :items="students"
  :item-key="itemKey"
  :sort-by="sortBy"
  multi-sort
  :search="search"
  :single-expand="singleExpand"
  no-results-text="Не знайдено відповідних записів"
  show-expand
  expand-icon="mdi-chart-timeline"
  :options.sync="options"
  :items-per-page="itemsPerPage"
  @page-count="pageCount = $event"
  @click:row="say"
  class="elevation-1"
  hide-default-footer
  :loading="loading"
  loading-text="Завантаження... Будь ласка, зачекайте"
  >
    <template v-slot:items="props">
      <router-link to="/detail" tag="td">$props.item.name</router-link>
      <td>$props.item.group</td>
      <td>$props.item.specialty</td>
      <td>$props.item.phone</td>
      <td>$props.item.birth</td>
      <td>$props.item.age</td>
    </template>
    <template v-slot:item.gender="{ item }">
      <td v-if="item.gender === 'female'"><v-icon>mdi-gender-female</v-icon></td>
      <td v-else><v-icon>mdi-gender-male</v-icon></td>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" class="pt-3">
        <p @click="doCopy" :title="item.address" class="btn-copy">Адреса: {{ item.address }}</p>
        <p @click="doCopy" :title="item.email" class="btn-copy">Email: {{ item.email }}</p>
        <p @click="doCopy" :title="item.about" class="btn-copy">Про студента: {{ item.about }}</p>
      </td>
    </template>
  </v-data-table>
  <v-pagination
  class="font-weight-black"
  v-model="options.page"
  :total-visible="7"
  :length="pageCount"
  @click.native="scrollToTop"
  dark color="teal darken-4"
  ></v-pagination>
  <v-text-field
  v-model="totalItems"
  @click:prepend-inner="changeIcon"
  :prepend-inner-icon="icon"
  solo readonly
  ></v-text-field>
  </div>
  `,
  data: () => ({
      totalItems: '',
      search: '',
      alert: false,
      showToolbar: false,
      students: [],
      itemKey: 'guid',
      loading: false,
      pageCount: 0,
      options: {
        page: 1,
        studyStatus: true,
      },
      sortBy: 'name',
      itemsPerPage: 30,
      singleExpand: true,
      iconIndex: 4,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-devil',
        'mdi-emoticon-happy',
        'mdi-emoticon-excited',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',

      ],
      headers: [{
          text: 'П.І.П.',
          align: 'left',
          value: 'name',
        },
        {
          text: 'Група',
          alidn: 'center',
          width: '10%',
          value: 'group'
        },
        {
          text: 'Спеціальність',
          align: 'left',
          value: 'specialty'
        },
        {
          text: 'Телефон',
          sortable: false,
          alidn: 'center',
          width: '11%',
          value: 'phone'
        },
        {
          text: 'Дата народження',
          alidn: 'center',
          width: '11%',
          value: 'birth'
        },
        {
          text: 'Вік',
          alidn: 'center',
          width: '6%',
          value: 'age'
        },
        {
          text: 'Стать',
          alidn: 'center',
          width: '1%',
          value: 'gender'
        }
      ],
  }),
  watch: {
      options: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.students = data.sorted
              this.totalItems = " Загальна кількість студентів: " + data.total;
            })
        },
        deep: true,
      },
    },
  mounted() {
      this.getDataFromApi()
      .then(data => {
        this.students = data.sorted
        this.totalItems = " Загальна кількість студентів: " + data.total;
      })
    },
  computed: {
    icon () {
        return this.icons[this.iconIndex]
      },
  },
  methods: {
    getDataFromApi () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { studyStatus, page } = this.options
          let sorted = []
          fetch('data/list.json')
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              data.forEach(item => {
                if(item.isActive === studyStatus){
                  sorted.push(item);
                }
              })
              let total = sorted.length
              setTimeout(() => {
                this.loading = false
                resolve({
                  sorted,
                  total,
                })
              }, 1000)
            })
            })

        },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    say(item) {
      router.push({ path: `/user/${item.code}` });
    },
    changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    doCopy () {
      new ClipboardJS('.btn-copy', {
          text: (trigger => {
              return trigger.getAttribute('title');
          })
      });
      this.alert = true;
      setTimeout(() => {
        this.alert = false
      }, 1500)
    },
  },
});

const Login = { template: '<p>Login</p>' }
const Home = { template: '<p>Home</p>' }
const Profile = { template: '<p>Profile</p>' }
const Contact = { template: '<p>Contact</p>' }
const UserProfile = { template: '<p>User {{ $route.params.id }}</p>' }
const NotFound = { template: '<p>Страница не найдена</p>' }

const routes = [
  {
    path: '/',
    component: List
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: Home
  },
  {
    path: '/user/:id',
    component: UserProfile
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  vuetify: new Vuetify(),
  router
}).$mount('#app')
