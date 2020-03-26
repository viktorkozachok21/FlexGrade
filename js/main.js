// Home Page Vue
const Home = {
  template: document.getElementById('main-data-home')
}
// ---> Home Page Vue
// Students Table Vue
const MainDataStudents = {
  template: document.getElementById('main-data-students'),
  data() {
    return {
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
      sortBy: 'name',
      itemsPerPage: 30,
      selected: [],
      singleSelect: false,
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
          text: 'Спеціальність',
          align: 'left',
          width: '45%',
          value: 'specialty'
        },
        {
          text: 'Група',
          alidn: 'center',
          width: '8%',
          value: 'group'
        },
        {
          text: 'Рівень',
          align: 'center',
          width: '8%',
          value: 'degree'
        },
        {
          text: 'Форма',
          align: 'center',
          width: '8%',
          value: 'trainingForm'
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
        fetch('../data/base.json')
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
              }, 0)
            })
            .catch(error => console.error(error))
      })
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    moreInfo(student) {
      router.push({
        name: 'student',
        params: {
          'id': student.code,
        }
      })
      store.state.student = student
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1 ?
        this.iconIndex = 0 :
        this.iconIndex++
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
      itemKey: 'number',
      examinatins: [],
      gotData: true,
      subjects: [],
      headers: [
        {
          text: '№',
          align: 'center',
          width: '1%',
          divider: true,
          sortable: false,
          value: 'number'
        },
        {
          text: 'Навчальна дисципліна',
          align: 'left',
          divider: true,
          sortable: false,
          value: 'subject'
        },
        {
          text: 'Форма',
          align: 'center',
          divider: true,
          sortable: false,
          value: 'form'
        },
        {
          text: 'Годин',
          align: 'center',
          width: '1%',
          divider: true,
          sortable: false,
          value: 'hours'
        },
        {
          text: 'Кредитів',
          align: 'center',
          width: '1%',
          divider: true,
          sortable: false,
          value: 'credits'
        },
        {
          text: 'Балів',
          align: 'center',
          width: '1%',
          divider: true,
          sortable: false,
          value: 'score'
        },
        {
          text: 'Оцінка',
          align: 'center',
          width: '1%',
          divider: true,
          sortable: false,
          value: 'grade'
        },
        {
          text: 'Дата',
          align: 'center',
          width: '1%',
          divider: true,
          sortable: false,
          value: 'date'
        },
        {
          text: 'Викладач',
          align: 'left',
          divider: true,
          sortable: false,
          value: 'teacher'
        }
      ],
    }
  },
  mounted() {
    this.person = store.state.student
    this.getDataFromApi()
      .then(data => {
        this.examinatins = data.mine
        console.log(this.examinatins)
        if(data.mine.length > 0){
          this.gotData = true
        } else {
          this.gotData = false
        }
      })
  },
  methods: {
  getDataFromApi() {
    return new Promise((resolve, reject) => {
      fetch('../data/base.json')
        .then(stream => stream.json())
        .then(data => {
          const loaded = data.app.examinations
          let mine = []
          loaded.forEach(item => {
            if (item.code === store.state.student.code) {
              mine.push(item);
            }
          })
          resolve({
            mine,
          })
        })
        .catch(error => console.error(error))
    })
  },
  teacherInfo(examination) {
    console.log(store.state.teacherName)
    router.push({
      name: 'teachers',
      params: {
        'teacherName': examination.teacher,
      }
    });
  },
}
};
// ---> More Student Detail Vue
// Teachers Data Vue
const MainDataTeachers = {
  template: document.getElementById('main-data-teachers'),
  data() {
    return {
      totalItems: '',
      search: '',
      teachers: [],
      itemKey: 'code',
      loading: false,
      pageCount: 0,
      page: 1,
      sortBy: 'name',
      selected: [],
      singleSelect: false,
      itemsPerPage: 30,
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
          width: '40%',
          value: 'name',
        },
        {
          text: 'Email',
          align: 'left',
          sortable: false,
          value: 'email'
        },
        {
          text: 'Телефон',
          align: 'center',
          sortable: false,
          value: 'phone'
        }
      ],
    }
  },
  created() {
    this.getDataFromApi()
      .then(data => {
        this.teachers = data.loaded
        this.totalItems = " Загальна кількість викладачів: " + data.total;
      })
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi()
          .then(data => {
            this.teachers = data.loaded
            this.totalItems = " Загальна кількість викладачів: " + data.total;
          })
      },
      deep: true,
    },
    '$route': 'getDataFromApi'
  },
  mounted() {
    if(this.$route.params.teacherName != null)
    {
      this.search = this.$route.params.teacherName
    } else {
      this.search = ''
    }
    this.getDataFromApi()
      .then(data => {
        this.teachers = data.loaded
        this.totalItems = " Загальна кількість викладачів: " + data.total;
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
        fetch('../data/base.json')
            .then(stream => stream.json())
            .then(data => {
              const loaded = data.app.teachers
              let total = loaded.length
              setTimeout(() => {
                this.loading = false
                resolve({
                  loaded,
                  total,
                })
              }, 0)
            })
            .catch(error => console.error(error))
      })
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    moreInfo(teacher) {
      router.push({
        name: 'teacher',
        params: {
          'id': teacher.code,
        }
      })
      store.state.teacher = teacher
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1 ?
        this.iconIndex = 0 :
        this.iconIndex++
    }
  }
}
// ---> Teachers Data Vue
// More Teacher Detail Vue
const MainDataTeachersPerson = {
  template: document.getElementById('main-data-teachers-person'),
  data() {
    return {
      person: {},
      itemKey: 'id',
      gotData: true,
      subjects: [],
      headers: [
        {
          text: 'Навчальна дисципліна',
          sortable: false,
          value: 'name'
        }
      ]
    }
  },
  mounted() {
    this.person = store.state.teacher
    this.getDataFromApi()
      .then(data => {
        this.subjects = data.mine
        if(data.mine.length > 0){
          this.gotData = true
        } else {
          this.gotData = false
        }
      })
  },
  methods: {
  getDataFromApi() {
    return new Promise((resolve, reject) => {
      fetch('../data/base.json')
        .then(stream => stream.json())
        .then(data => {
          const loaded = data.app.teachers
          let mine = []
          loaded.forEach(item => {
            if (item.code === store.state.teacher.code) {
              mine = item.subjects;
            }
          })
          resolve({
            mine,
          })
        })
        .catch(error => console.error(error))
    })
  }
}
}
// ---> More Teacher Detail Vue

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
      meta: { showBack: false }
    },
    {
      path: '/students',
      name: 'students',
      component: MainDataStudents,
      meta: { showBack: true }
    },
    {
      path: '/students/person/:id',
      name: 'student',
      component: MainDataStudentsPerson,
      meta: { showBack: true }
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: MainDataTeachers,
      meta: { showBack: true }
    },
    {
      path: '/teachers/person/:id',
      name: 'teacher',
      component: MainDataTeachersPerson,
      meta: { showBack: true }
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

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: 'Viktor',
    status: 'student',
    student: {},
    teacher: {}
  }
})

router.replace({ path: '/', redirect: '/' })

const app = new Vue({
  router,
  vuetify: new Vuetify()
}).$mount('#app')
