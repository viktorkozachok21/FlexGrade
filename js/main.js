// Students Table Vue
const MainDataStudents = {
  template: document.getElementById('main-data-students'),
  data() {
    return {
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
      selected: [],
      singleSelect: false,
      iconIndex: 4,
      watched: {},
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
        'lnr-mustache',

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
    }
  },
  created() {
    this.getDataFromApi()
      .then(data => {
        this.students = data.sorted
        this.totalItems = " Загальна кількість студентів: " + data.total;
      })
  },
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
    '$route': 'getDataFromApi'
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
    }
  },
  methods: {
    getDataFromApi() {
      this.loading = true
      return new Promise((resolve, reject) => {
        let {
          studyStatus,
          page
        } = this.options
        let sorted = []
        fetch('../data/list.json')
            .then(stream => stream.json())
            .then(data => {
              const loaded = data.app.students
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
            .catch(error => console.error(error))
      })
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    moreInfo(student) {
      store.state.watched = student
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
          return trigger.getAttribute('alt');
        })
      });
      this.alert = true;
      setTimeout(() => {
        this.alert = false
      }, 1500)
    }
  }
};
// ---> Students Table Vue
// More Student Detail Vue
const MainDataStudentsPerson = {
  template: document.getElementById('main-data-students-person'),
  data() {
    return {
      person: {},
    }
  },
  mounted() {
    this.person = this.$route.params.profile
  }
};
// ---> More Student Detail Vue

const Home = {
  template: `
  <div class="user ml-10">
    <h2>User {{ store.state.user}}</h2>
    <router-link to="/students">Show Students</router-link>
    <router-view></router-view>
  </div>
  `
}

const Login = {
  template: '<p>Login</p>'
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
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home,
    },
    {
      path: '/students',
      name: 'students',
      component: MainDataStudents,
    },
    {
      path: '/students/person/:id',
      name: 'person',
      component: MainDataStudentsPerson
    },
    {
      name: 'login',
      path: '/login',
      component: Login
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

const store = new Vuex.Store({
  state: {
    user: 'Viktor',
  },
  mutations: {

  }
})

router.push({name:'students'})

const app = new Vue({
  router,
  vuetify: new Vuetify()
}).$mount('#app')
