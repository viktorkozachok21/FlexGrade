const Login = {
  template: `
  <div class="text-center mx-3" v-if="form === true">
    <h2 class="text--secondary mt-3">Авторизація</h2>
    <v-container id="login-form" fluid>
      <v-text-field
        color="teal darken-4"
        maxlength="30"
        hint="Ім'я користувача"
        placeholder="Введіть ім'я користувача"
        single-line
        :rules="[store.state.rules.spaces(username)]"
        @keydown.native.space.prevent
        prepend-inner-icon="mdi-face"
        v-model="username"
        @keypress.enter="userLogin"
        class="my-5"
      ></v-text-field>
      <v-text-field
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        color="teal darken-4"
        maxlength="30"
        hint="Пароль"
        placeholder="Введіть пароль"
        :rules="[store.state.rules.spaces(password)]"
        @keydown.native.space.prevent
        single-line
        prepend-inner-icon="mdi-key"
        v-model="password"
        class="my-5"
        @keypress.enter="userLogin"
        @click:append="show = !show"
      ></v-text-field>
      <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="teal darken-4"
      height="3"
      ></v-progress-linear>
    </v-container>
    <v-btn @click.native="userLogin" class="home-link my-5" width="150" height="55">
      <v-icon icon title="Login" class="m-auto display-2">mdi-check</v-icon>
    </v-btn>
  </div>
  `,
  data: () => ({
    username: "",
    password: "",
    show: false,
    loading: false,
    form: false,
    attemps: 5
  }),
  mounted() {
    store.dispatch('checkAuth')
      .then(() => {
        if (store.state.authenticated) {
          router.replace({
            name: "home"
          })
          store.dispatch('loadStudents')
          store.dispatch('loadTeachers')
          store.dispatch('loadGroups')
          store.dispatch('loadSubjects')
        } else {
          this.form = true
          if (sessionStorage.getItem("attemps") === null) {
            sessionStorage.setItem('attemps', 5)
          } else {
            this.attemps = sessionStorage.getItem("attemps")
          }
        }
      })
  },
  methods: {
    userLogin() {
      if (this.username != "") {
        if (this.password != "") {
          const data = {
            username: this.username,
            password: this.password
          }
          this.loading = true
          if (this.attemps >= 1) {
            store.dispatch('loginUser', data)
              .then(result => {
                if (!result.key) {
                  this.attemps--
                  sessionStorage.setItem('attemps', this.attemps)
                  if (this.attemps === 0) {
                    Notiflix.Notify.Failure('Ви вичерпали ліміт авторизацій.')
                  } else {
                    Notiflix.Notify.Failure(`Не вдається авторизуватися за допомогою наданих облікових даних. Залишилося спроб - ${this.attemps}`)
                  }
                } else if (typeof result.key != 'undefined') {
                  sessionStorage.setItem('username', this.username)
                  sessionStorage.setItem("auth_token", result.key)
                  router.replace({
                    name: "home"
                  })
                  Notiflix.Notify.Success('Авторизація пройшла успішно.')
                  sessionStorage.setItem('attemps', 5)
                }
                this.loading = false
              })
          } else {
            Notiflix.Notify.Failure('Ви вичерпали ліміт авторизацій.')
            this.loading = false
          }
        } else {
          this.loading = false
          Notiflix.Notify.Warning('Поле "пароль" не може бути порожнім.')
        }
      } else {
        this.loading = false
        Notiflix.Notify.Warning('Введіть ім\'я користувача та пароль.')
      }
    }
  }
}
