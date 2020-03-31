const Navbar = Vue.component('navbar-x', {
  template: `
  <nav class="navbar-x" v-if="$root.authenticated" replace>
    <ul class="navbar-nav-x">
      <li class="logo">
        <div title="Flex Grade" class="nav-link-x">
          <span class="link-text logo-text">Grade</span>
          <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
            <g class="fa-group">
              <path fill="currentColor" d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                class="fa-secondary-x"></path>
              <path fill="currentColor" d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                class="fa-primary-x"></path>
            </g>
          </svg>
        </div>
      </li>
      <li class="nav-item-x">
        <router-link to="/home" title="На головну" class="nav-link-x">
          <svg id="lnr-home" viewBox="0 0 1024 1024" class="lnr lnr-home">
            <g class="fa-group">
              <use xlink:href="#lnr-home"></use>
              <path fill="currentColor" class="fa-secondary-x"
                d="M1017.382 622.826l-452.050-499.634c-14.051-15.533-32.992-24.086-53.333-24.086-0.002 0 0 0 0 0-20.339 0-39.282 8.555-53.334 24.086l-452.050 499.634c-9.485 10.485-8.675 26.674 1.808 36.158 4.899 4.432 11.043 6.616 17.168 6.616 6.982 0 13.938-2.838 18.992-8.426l109.016-120.491v410.517c0 42.347 34.453 76.8 76.8 76.8h563.2c42.347 0 76.8-34.453 76.8-76.8v-410.517l109.018 120.493c9.485 10.483 25.674 11.296 36.158 1.808 10.483-9.485 11.293-25.675 1.806-36.158zM614.4 972.8h-204.8v-230.4c0-14.115 11.485-25.6 25.6-25.6h153.6c14.115 0 25.6 11.485 25.6 25.6v230.4zM819.2 947.2c0 14.115-11.485 25.6-25.6 25.6h-128v-230.4c0-42.349-34.451-76.8-76.8-76.8h-153.6c-42.347 0-76.8 34.451-76.8 76.8v230.4h-128c-14.115 0-25.6-11.485-25.6-25.6v-467.106l291.832-322.552c4.222-4.667 9.68-7.237 15.368-7.237s11.146 2.57 15.366 7.235l291.834 322.552v467.107z">
              </path>
            </g>
          </svg>
          <span class="link-text">Головна</span>
        </router-link>
      </li>
      <li class="nav-item-x">
        <router-link to="/profile" title="Ваш профіль" class="nav-link-x">
          <svg id="lnr-user" viewBox="0 0 1024 1024" class="lnr lnr-user">
            <g class="fa-group">
              <use xlink:href="#lnr-user"></use>
              <path fill="currentColor" class="fa-secondary-x"
                d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z">
              </path>
              <path fill="currentColor" class="fa-secondary-x"
                d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z">
              </path>
            </g>
          </svg>
          <span class="link-text">Профіль</span>
        </router-link>
      </li>
      <li class="nav-item-x">
        <router-link to="/contact" title="Довідкова інформація" class="nav-link-x">
          <svg id="lnr-phone-handset" viewBox="0 0 1024 1024" class="lnr lnr-phone-handset">
            <g class="fa-group">
              <use xlink:href="#lnr-phone-handset"></use>
              <path fill="currentColor" class="fa-secondary-x"
                d="M819.2 1024c-90.691 0-187.154-25.699-286.706-76.386-91.794-46.736-182.48-113.654-262.258-193.522-79.763-79.853-146.595-170.624-193.272-262.498-50.608-99.61-76.269-196.102-76.269-286.795 0-58.774 54.765-115.55 78.31-137.232 33.85-31.17 87.104-67.568 125.794-67.568 19.245 0 41.803 12.589 70.994 39.616 21.782 20.17 46.27 47.51 70.814 79.067 14.794 19.021 88.592 116.267 88.592 162.917 0 38.27-43.25 64.853-89.037 92.998-17.694 10.875-35.992 22.122-49.226 32.73-14.114 11.315-16.645 17.288-17.061 18.629 48.602 121.128 197.141 269.651 318.203 318.184 1.085-0.341 7.067-2.699 18.592-17.075 10.608-13.234 21.854-31.531 32.73-49.227 28.144-45.789 54.726-89.038 92.998-89.038 46.648 0 143.896 73.798 162.917 88.592 31.557 24.546 58.898 49.032 79.067 70.816 27.029 29.189 39.616 51.747 39.616 70.992 0 38.701-36.378 92.115-67.528 126.099-21.693 23.662-78.491 78.701-137.272 78.701z">
              </path>
              <path fill="currentColor" class="fa-color-x"
                d="M204.477 51.203c-13.731 0.262-50.634 17.054-90.789 54.029-38.115 35.099-61.792 73.25-61.792 99.568 0 344.523 423.093 768 767.304 768 26.28 0 64.418-23.795 99.528-62.099 37.003-40.366 53.806-77.413 54.069-91.178-1.662-9.728-28.57-47.563-102.232-104.283-63.322-48.762-114.699-74.886-127.901-75.237-0.925 0.274-6.656 2.467-18.277 17.222-10.104 12.832-20.912 30.418-31.366 47.424-28.683 46.666-55.774 90.744-95.122 90.744-6.336 0-12.597-1.219-18.608-3.624-134.376-53.75-293.31-212.685-347.061-347.061-6.456-16.138-7.485-41.414 24.272-70.184 16.882-15.293 40.25-29.656 62.848-43.546 17.006-10.453 34.59-21.261 47.422-31.366 14.755-11.619 16.95-17.352 17.222-18.277-0.352-13.203-26.475-64.579-75.237-127.902-56.72-73.659-94.554-100.568-104.282-102.23z">
              </path>
            </g>
          </svg>
          <span class="link-text">Контакти</span>
        </router-link>
      </li>
    </ul>
  </nav>
  `
})
const Toolbar = Vue.component('toolbar-x', {
  template: `
  <v-card class="main mb-3" height="70px">
    <v-toolbar class="text-center pl-3" flat>
      <v-span v-if="$route.meta.showBack" @click="$router.go(-1)" replace title="Go back" class="mdi mdi-keyboard-return home-link"></v-span>
      <v-divider v-if="$route.meta.showBack" class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-divider class="mx-4" v-if="$route.meta.showNewExamination && (store.state.status == 'teacher' || store.state.status == 'admin')" inset vertical replace></v-divider>
      <v-span v-if="$route.meta.showNewExamination && (store.state.status == 'teacher' || store.state.status == 'admin')" class="mdi mdi-plus-box-outline home-link"></v-span>
      <v-divider v-if="$root.authenticated" class="mx-4" inset vertical replace></v-divider>
      <v-span class="home-link mdi mdi-exit-to-app" v-if="$root.authenticated" @click="$root.logout" title="Logout" replace></v-span>
      <v-divider class="mx-4" inset vertical></v-divider>
      <div id="full-toggle" title="Toggle fullscreen" class="home-link"><span class="mdi mdi-fullscreen"></span></div>
    </v-toolbar>
  </v-card>
  `
})
const Footer = Vue.component('footer-x', {
  template: `
  <v-footer height="35">
    <p class="caption mb-0">&copy; 2020 <span class="caption font-weight-black">Flex Grade</span></p>
    <a class="subtitle-2 mb-0 mr-3 home-link" href="https://www.linkedin.com/in/viktorkozachok" target="_blank" title="Developer">
      <span class="mdi mdi-linkedin"></span>
    </a>
  </v-footer>
  `
})

// The Login Form
const Login = {
  template: document.getElementById('grade-login'),
  data() {
    return {
      username: "Viktor",
      password: "admin-access",
      errorMessage: '',
      show: false,
      loading: false
    }
  },
  mounted() {
    if (this.$root.authenticated) {
      router.replace({
        name: "home"
      });
    }
  },
  methods: {
    login() {
      this.loading = true
      if (this.username != "") {
        if (this.password != "") {
          const data = {
            username: this.username,
            password: this.password
          }
          fetch('../api/auth/login/', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => {
              this.loading = false
              if (typeof response.key != 'undefined'){
                sessionStorage.setItem("auth_token", response.key)
                this.$router.push({name: "home"})
              } else if (!response.key) {
                this.errorMessage = 'Не вдається увійти за допомогою наданих облікових даних.'
              }
            })
            .catch(error => console.log(error))

        } else {
          this.loading = false
          this.errorMessage = "Поле 'пароль' не може бути порожнім.";
        }
      } else {
        this.loading = false
        this.errorMessage = "Введіть ім'я користувача.";
      }
    }
  }
}
// <!--- The Login Form

// The Home Page
const Home = {
  template: document.getElementById('grade-home'),
  mounted() {
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    }
  }
}
// <!--- Home Page

// The Contact Info Page
const Contact = {
  template: document.getElementById('grade-contact'),
  mounted() {
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    }
  },
  methods: {
    moreInfo() {
      router.push({
        name: 'students',
        params: {
          'search': store.state.developer
        }
      })
    }
  }
}
// <!--- The Contact Info Page

// The List Of Students
const StudentsList = {
  template: document.getElementById('grade-students'),
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
        'mdi-ninja',
        'mdi-emoticon-tongue',
      ],
      headers: [{
          text: 'П.І.П.',
          align: 'left',
          value: 'fullname',
        }
      ],
    }
  },
  created() {
    this.$root.$refs.StudentsList = this
    this.getDataFromApi()
      .then(data => {
        this.students = data.data
        this.totalItems = " Загальна кількість студентів: " + data.total;
      })
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi()
          .then(data => {
            this.students = data.data
            this.totalItems = " Загальна кількість студентів: " + data.total;
          })
      },
      deep: true,
    },
    '$route': 'getDataFromApi'
  },
  mounted() {
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
    if (this.$route.params.search != null) {
      this.search = this.$route.params.search
    } else {
      this.search = ''
    }
    this.getDataFromApi()
      .then(data => {
        this.students = data.data
        this.totalItems = " Загальна кількість студентів: " + data.total;
      })
    }
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
        fetch('../api/app/students/')
          .then(stream => stream.json())
          .then(data => {
            let total = data.length
            setTimeout(() => {
              this.loading = false
              resolve({
                data,
                total,
              })
            }, 1000)
          })
          .catch(error => console.error(error))
      })
    },
    newExamination(){
      console.log(this.selected)
      if(this.selected.length > 0) {
        router.push({
          name: 'new-semester',
          params: {
            'students': this.selected
          }
        })
      }
    },
    moreInfo(student) {
      sessionStorage.removeItem("student")
      sessionStorage.setItem("student", student.code)
      router.push({
        name: 'student',
        params: {
          'code': student.code,
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
}
// <!--- The List Of Students

// The More Details About A Student
const StudentsPerson = {
  template: document.getElementById('grade-students-person'),
  data() {
    return {
      person: {},
      itemKey: 'number',
      examinatins: [],
      gotData: true,
      subjects: [],
      headers: [{
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
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
    this.getDataFromApi()
      .then(data => {
        this.person = data.mine
        // this.examinatins = data.mine
        // if (data.mine.length > 0) {
        //   this.gotData = true
        // } else {
        //   this.gotData = false
        // }
      })
    }
  },
  methods: {
    getDataFromApi() {
      return new Promise((resolve, reject) => {
        const code = sessionStorage.getItem("student")
        fetch('http://localhost:3000/api/app/students/')
          .then(stream => stream.json())
          .then(data => {
            let mine = {}
            data.forEach(item => {
              if (item.code === code) {
                mine = item;
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
}
// <!--- The More Details About A Student

// The List Of Teachers
const TeachersList = {
  template: document.getElementById('grade-teachers'),
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
        'mdi-ninja',
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
  mounted() {
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
    if (this.$route.params.teacherName != null) {
      this.search = this.$route.params.teacherName
    } else {
      this.search = ''
    }
    this.getDataFromApi()
      .then(data => {
        this.teachers = data.loaded
        this.totalItems = " Загальна кількість викладачів: " + data.total;
      })
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
            }, 1000)
          })
          .catch(error => console.error(error))
      })
    },
    moreInfo(teacher) {
      router.push({
        name: 'teacher',
        params: {
          'code': teacher.code,
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
// <!--- The List Of Teachers

// The More Details About A Teacher
const TeachersPerson = {
  template: document.getElementById('grade-teachers-person'),
  data() {
    return {
      person: {},
      itemKey: 'id',
      gotData: true,
      subjects: [],
      headers: [{
        text: 'Навчальні дисципліни:',
        sortable: false,
        value: 'name'
      }]
    }
  },
  mounted() {
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
    this.person = store.state.teacher
    this.getDataFromApi()
      .then(data => {
        this.subjects = data.mine
        if (data.mine.length > 0) {
          this.gotData = true
        } else {
          this.gotData = false
        }
      })
    }
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
// <!--- The More Details About A Teacher

// The Profile Of A User
const Profile = {
  mounted() {
    if (!this.$root.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
      if (store.state.status === 'admin') {
        router.replace({
          name: 'student',
          params: {
            'id': store.state.student.code
          }
        })
      } else if (store.state.status === 'teacher') {
        router.replace({
          name: 'teacher',
          params: {
            'id': store.state.teacher.code
          }
        })
      }
    }
  }
}
// <!--- The Profile Of A User

const NewSemester = {
  template: document.getElementById('grane-new-semester')
}

const NotFound = {
  template: '<p>Страница не найдена</p>'
}

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        showNewExamination: false
      }
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsList,
      meta: {
        showBack: true,
        showNewExamination: true
      }
    },
    {
      path: '/students/person/:code',
      name: 'student',
      component: StudentsPerson,
      meta: {
        showBack: true
      }
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: TeachersList,
      meta: {
        showBack: true
      }
    },
    {
      path: '/teachers/person/:id',
      name: 'teacher',
      component: TeachersPerson,
      meta: {
        showBack: true
      }
    },
    {
      name: 'new-semester',
      path: '/new-semester',
      component: NewSemester,
      meta: {
        showBack: true
      }
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile,
      meta: {
        showBack: true
      }
    },
    {
      name: 'contact',
      path: '/contact',
      component: Contact,
      meta: {
        showBack: true
      }
    }
  ]
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: 'Viktor',
    status: 'admin',
    student: {},
    teacher: {},
    developer: 'Козачок Віктор',
    login: ''
  },
  mutations: {
    showProfile(login) {
      router.push({
        name: 'student',
        params: {
          'id': login
        }
      })
    }
  }
})

const app = new Vue({
  router,
  vuetify: new Vuetify(),
  data() {
    return {
      authenticated: false,
      user: {},
      admins: []
    }
  },
  created() {
    this.auth()
  },
  watch: {
    options: {
      handler() {
        this.auth()
      },
      deep: true,
    },
    '$route': 'auth'
  },
  mounted() {
    this.auth()
  },
  methods: {
    auth() {
      if (sessionStorage.getItem("auth_token")) {
        this.authenticated = true
      } else {
        this.authenticated = false
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    logout() {
      fetch('../api/auth/logout/')
      .then(response => response.json())
      .then(response => {
        this.$router.push({name: "login"})
        sessionStorage.removeItem("auth_token")
        this.authenticated = false
      })
      .catch(error => console.error(error))
    }
  }
}).$mount('#app')
