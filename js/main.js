// dataTable Vue
const Main = Vue.component('main', {
  template: document.getElementById('dev-main'),
  data: () => ({
    totalItems: '',
    search: '',
    alert: false,
    showToolbar: false,
    students: [],
    itemKey: 'code',
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
      }
    ],
  }),
  watch: {
    options: {
      handler() {
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
    icon() {
      return this.icons[this.iconIndex]
    },
  },
  methods: {
    getDataFromApi() {
      this.loading = true
      return new Promise((resolve, reject) => {
        const {
          studyStatus,
          page
        } = this.options
        let sorted = []
        let loaded = this.$root.$data.dataBase
        loaded.forEach(item => {
                if (item.isActive === studyStatus) {
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
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    moreInfo(student) {
      router.push({
        name: 'person',
        params: {
          'id': student.code,
          'profile': student
        }
      });
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1 ?
        this.iconIndex = 0 :
        this.iconIndex++
    },
    doCopy() {
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
// ---> dataTable Vue
// More detail Vue
const Person = Vue.component('person',{
  template: document.getElementById('dev-person'),
  data: ()=>({
    person: {},
  }),
  mounted() {
    this.person = this.$route.params.profile
  },
});
// ---> More detail Vue

const Login = {
  template: '<p>Login</p>'
}
const Home = {
  template: '<p>Home</p>'
}
const Profile = {
  template: '<p>Profile</p>'
}
const Contact = {
  template: '<p>Contact</p>'
}


const NotFound = {
  template: '<p>Страница не найдена</p>'
}

const router = new VueRouter({
  // mode: 'history',
  routes: [{
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'main',
      path: '/main',
      component: Main
    },
    {
      name: 'person',
      path: '/person/:id',
      component: Person
    },
    {
      name: 'user',
      path: '/user',
      component: Profile
    },
    {
      name: 'contact',
      path: '/contact',
      component: Contact
    }
  ]
})

const app = new Vue({
  vuetify: new Vuetify(),
  data: ()=>({
    dataBase: [],
  }),
  mounted() {
    fetch('data/list.json')
        .then(stream => stream.json())
        .then(data => {
          this.dataBase = data;
        })
        .catch(error => console.error(error))
  },
  router,
}).$mount('#app')
