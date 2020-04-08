Notiflix.Confirm.Init({
  backOverlayColor: 'rgba(24, 24, 28, 0.8)',
  titleColor: '#1a745c',
  titleFontSize: '20px',
  messageFontSize: '20px',
  okButtonColor: '#23232e',
  okButtonBackground: '#6ec775',
  cancelButtonColor: '#23232e',
  cancelButtonBackground: '#cbe9c9',
  buttonsFontSize: '20px'
})
Notiflix.Block.Init({
  backgroundColor: 'rgba(24, 24, 28, 0.8)',
  svgColor: '#92a7a1',
  messageColor: '#92a7a1',
  messageFontSize: '20px'
});
const Navbar = Vue.component('navbar-x', {
  template: `
  <nav class="navbar-x" v-if="store.state.authenticated" replace>
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
      <li class="nav-item-x" v-if="store.state.status === 'Teacher' || store.state.status === 'Student'">
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
      <li class="nav-item-x" v-else-if="store.state.status === 'Admin'">
        <router-link to="/directory" title="Довідник" class="nav-link-x">
          <svg id="lnr-book" viewBox="0 0 1024 1024" class="lnr lnr-book">
            <g class="fa-group">
              <use xlink:href="#lnr-book"></use>
              <path fill="currentColor" class="fa-secondary-x" d="M742.4 921.6h-512c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h512c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z">
              </path>
              <path fill="currentColor" class="fa-secondary-x"
                d="M844.8 153.6c-14.139 0-25.6 11.462-25.6 25.6v768c0 14.115-11.485 25.6-25.6 25.6h-563.2c-42.347 0-76.8-34.453-76.8-76.8s34.453-76.8 76.8-76.8h460.8c42.349 0 76.8-34.451 76.8-76.8v-614.4c0-42.347-34.451-76.8-76.8-76.8h-512c-42.347 0-76.8 34.453-76.8 76.8v768c0 70.579 57.421 128 128 128h563.2c42.349 0 76.8-34.451 76.8-76.8v-768c0-14.138-11.461-25.6-25.6-25.6zM179.2 102.4h512c14.115 0 25.6 11.485 25.6 25.6v614.4c0 14.115-11.485 25.6-25.6 25.6h-460.8c-28.794 0-55.392 9.563-76.8 25.67v-665.67c0-14.115 11.485-25.6 25.6-25.6z">
              </path>
            </g>
          </svg>
          <span class="link-text">Довідник</span>
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
    <v-toolbar class="text-center grey lighten-5" height="50px" flat>
      <v-span v-if="$route.meta.showBack" @click="$router.go(-1)" replace title="Натисніть, щоб повернутися назад" class="mdi mdi-keyboard-return home-link"></v-span>
      <v-divider v-if="$route.meta.showBack" class="mx-2" inset vertical></v-divider>

      <v-spacer></v-spacer>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-plus-box-outline home-link"
      @click="store.state.newStudent.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewStudent && store.state.studyStatus == true"
      title="Зареєструвати студента"
      ></v-span>
      <new-student-x ref="newStudentForm"></new-student-x>
      <v-span
      class="mdi mdi-plus-box-outline home-link"
      @click="store.state.newTeacher.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewTeacher"
      title="Зареєструвати викладача"
      ></v-span>
      <new-teacher-x ref="newTeacherForm"></new-teacher-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusStudent')"
      v-if="store.state.status == 'Admin' && store.state.selectedStudents.length === 1 && store.state.studyStatus == true"
      title="Вилучити студента зі списку"
      ></v-span>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusStudent')"
      v-else-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 1 && store.state.studyStatus == true"
      title="Вилучити студентів зі списку"
      ></v-span>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusTeacher')"
      v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length === 1"
      title="Вилучити викладача зі списку"
      ></v-span>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusTeacher')"
      v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 1"
      title="Вилучити викладачів зі списку"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length == 1 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length == 1 && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editStudent;store.state.editStudent.dialog = true"
      v-if="store.state.status == 'Admin' && store.state.selectedStudents.length == 1 && store.state.studyStatus == true"
      title="Редагувати профіль студента"
      ></v-span>
      <edit-student-x ref="editStudentForm"></edit-student-x>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editTeacher;store.state.editTeacher.dialog = true"
      v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length == 1 && store.state.studyStatus == true"
      title="Редагувати профіль викладача"
      ></v-span>
      <edit-teacher-x ref="editTeacherForm"></edit-teacher-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length == 1 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length == 1 && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-chart-line home-link"
      @click="store.dispatch('loadSemesters', store.state.selectedStudents)"
      v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"
      title="Додати оцінки"
      ></v-span>
      <new-grade-x ref="newGradeForm"></new-grade-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-book-plus home-link"
      @click="store.getters.getListOfSubjects;store.state.newSemester.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewStudent && store.state.studyStatus == true"
      title="Додати навчальний семестр"
      ></v-span>
      <new-semester-x ref="newSemesterForm"></new-semester-x>
      <v-span
      class="mdi mdi-note-plus-outline home-link"
      @click="store.state.newSubject.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewTeacher"
      title="Додати навчальну дисципліну"
      ></v-span>
      <new-subject-x ref="newSubjectForm"></new-subject-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>

      <v-spacer></v-spacer>

      <v-divider v-if="store.state.authenticated" class="mx-2" inset vertical replace></v-divider>
      <v-span class="home-link mdi mdi-exit-to-app" v-if="store.state.authenticated" @click="store.dispatch('logoutUser')" title="Вихід" replace></v-span>
      <v-divider class="mx-2" inset vertical></v-divider>
      <div id="full-toggle" class="home-link"><span class="mdi mdi-fullscreen" title="Увімкнути повноекранний режим"></span></div>
    </v-toolbar>
  `
})
const Footer = Vue.component('footer-x', {
  data() {
    return {
      created: 2020,
      today: new Date().getFullYear(),
      copyRight: null
    }
  },
  mounted() {
    if (this.created === this.today) {
      this.copyRight = `${this.created}`
    } else {
      this.copyRight = `${this.created}-${this.today}`
    }
  },
  template: `
  <v-footer height="35">
    <p class="caption mb-0">&copy; {{ copyRight }} <span class="caption font-weight-black">Flex Grade</span></p>
    <a class="subtitle-2 mb-0 mr-3 home-link" href="https://www.linkedin.com/in/viktorkozachok" target="_blank" title="Developer">
      <span class="mdi mdi-linkedin"></span>
    </a>
  </v-footer>
  `
})
const AddStudentForm = Vue.component('new-student-x',{
  computed: {
    showDialog() {
      return store.state.newStudent.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newStudentForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newStudentForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.newStudent.dialog" persistent max-width="700px">
    <v-card id="addStudentForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати студента</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newStudent.valid"
            :lazy-validation="store.state.newStudent.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Ім'я користувача*"
              :rules="[store.state.rules.spaces(store.state.newStudent.username),store.state.rules.min(10, store.state.newStudent.username), store.state.rules.max(30, store.state.newStudent.username)]"
              v-model="store.state.newStudent.username" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Пароль*"
              :rules="[store.state.rules.spaces(store.state.newStudent.password),store.state.rules.min(10, store.state.newStudent.password), store.state.rules.max(20, store.state.newStudent.password)]"
              v-model="store.state.newStudent.password" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn text class="home-link my-3" title="Отримати логін та пароль" @click="store.dispatch('getPassword', store.state.newStudent)"><span class="mdi mdi-24px mdi-account-key"></span></v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Прізвище*"
              :rules="[store.state.rules.spaces(store.state.newStudent.lastName),store.state.rules.min(2, store.state.newStudent.lastName), store.state.rules.max(50, store.state.newStudent.lastName)]"
              v-model="store.state.newStudent.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я*"
              :rules="[store.state.rules.spaces(store.state.newStudent.firstName),store.state.rules.min(2, store.state.newStudent.firstName), store.state.rules.max(50, store.state.newStudent.firstName)]"
              v-model="store.state.newStudent.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові*"
              :rules="[store.state.rules.spaces(store.state.newStudent.surName),store.state.rules.min(2, store.state.newStudent.surName), store.state.rules.max(50, store.state.newStudent.surName)]"
              v-model="store.state.newStudent.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
              <v-text-field
              label="Номер залікової книжки*"
              :rules="[store.state.rules.spaces(store.state.newStudent.bookNumber),store.state.rules.min(2, store.state.newStudent.bookNumber), store.state.rules.max(5, store.state.newStudent.bookNumber)]"
              v-model="store.state.newStudent.bookNumber"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
             <v-select
              :items="store.state.groups"
              v-model="store.state.newStudent.group"
              label="Група*"
              item-color="teal darken-4"
              color="teal darken-4"
              no-data-text="Не знайдено відповідних записів"
              :rules="[store.state.rules.minGroup(1, store.state.newStudent.group)]"
              dense required
             ></v-select>
           </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.newStudent.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.newStudent.avatar"
              show-size
              color="teal darken-4"
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото" required
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addStudent', $root.$refs.toolbar.$refs.newStudentForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newStudent.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddTeacherForm = Vue.component('new-teacher-x',{
  computed: {
    showDialog() {
      return store.state.newTeacher.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newTeacherForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newTeacherForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.newTeacher.dialog" persistent max-width="700px">
    <v-card id="addTeacherForm" class="text-center pt-3">
    <v-title class="subtitle-2 text-center">
      <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати викладача</span>
    </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newTeacher.valid"
            :lazy-validation="store.state.newTeacher.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Ім'я користувача*"
              :rules="[store.state.rules.spaces(store.state.newTeacher.username),store.state.rules.min(10, store.state.newTeacher.username), store.state.rules.max(30, store.state.newTeacher.username)]"
              v-model="store.state.newTeacher.username" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Пароль*"
              :rules="[store.state.rules.spaces(store.state.newTeacher.password),store.state.rules.min(10, store.state.newTeacher.password), store.state.rules.max(20, store.state.newTeacher.password)]"
              v-model="store.state.newTeacher.password" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn text class="home-link my-3" title="Отримати логін та пароль" @click="store.dispatch('getPassword', store.state.newTeacher)"><span class="mdi mdi-24px mdi-account-key"></span></v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Прізвище*"
              :rules="[store.state.rules.spaces(store.state.newTeacher.lastName),store.state.rules.min(2, store.state.newTeacher.lastName), store.state.rules.max(50, store.state.newTeacher.lastName)]"
              v-model="store.state.newTeacher.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я*"
              :rules="[store.state.rules.spaces(store.state.newTeacher.firstName),store.state.rules.min(2, store.state.newTeacher.firstName), store.state.rules.max(50, store.state.newTeacher.firstName)]"
              v-model="store.state.newTeacher.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові*"
              :rules="[store.state.rules.spaces(store.state.newTeacher.surName),store.state.rules.min(2, store.state.newTeacher.surName), store.state.rules.max(50, store.state.newTeacher.surName)]"
              v-model="store.state.newTeacher.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Email*"
              :rules="[store.state.rules.spaces(store.state.newTeacher.email),store.state.rules.min(2, store.state.newTeacher.email), store.state.rules.emailRules(store.state.newTeacher.email)]"
              v-model="store.state.newTeacher.email"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.newTeacher.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.newTeacher.avatar"
              show-size
              color="teal darken-4"
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото" required
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addTeacher', $root.$refs.toolbar.$refs.newTeacherForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newTeacher.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const EditStudentForm = Vue.component('edit-student-x',{
  computed: {
    showDialog() {
      return store.state.editStudent.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.editStudentForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.editStudentForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.editStudent.dialog" persistent max-width="700px">
    <v-card id="editStudentForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Редагування профілю</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.editStudent.valid"
            :lazy-validation="store.state.editStudent.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Прізвище"
              @keypress.native="$root.validateKey($event)"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.lastName),store.state.rules.min(2, store.state.editStudent.lastName), store.state.rules.max(50, store.state.editStudent.lastName)]"
              v-model="store.state.editStudent.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.firstName),store.state.rules.min(2, store.state.editStudent.firstName), store.state.rules.max(50, store.state.editStudent.firstName)]"
              v-model="store.state.editStudent.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.surName),store.state.rules.min(2, store.state.editStudent.surName), store.state.rules.max(50, store.state.editStudent.surName)]"
              v-model="store.state.editStudent.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Номер залікової книжки"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.bookNumber),store.state.rules.min(2, store.state.editStudent.bookNumber), store.state.rules.max(5, store.state.editStudent.bookNumber)]"
              v-model="store.state.editStudent.bookNumber"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.editStudent.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.editStudent.avatar"
              show-size
              @change="store.state.editStudent.wasEdited = true"
              outlined dense
              color="teal darken-4"
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото"
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('editStudent', $root.$refs.toolbar.$refs.editStudentForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.editStudent.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const EditTeacherForm = Vue.component('edit-teacher-x',{
  computed: {
    showDialog() {
      return store.state.editTeacher.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.editTeacherForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.editTeacherForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.editTeacher.dialog" persistent max-width="700px">
    <v-card id="editTeacherForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Редагування профілю</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.editTeacher.valid"
            :lazy-validation="store.state.editTeacher.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Прізвище"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.lastName),store.state.rules.min(2, store.state.editTeacher.lastName), store.state.rules.max(50, store.state.editTeacher.lastName)]"
              v-model="store.state.editTeacher.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.firstName),store.state.rules.min(2, store.state.editTeacher.firstName), store.state.rules.max(50, store.state.editTeacher.firstName)]"
              v-model="store.state.editTeacher.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.surName),store.state.rules.min(2, store.state.editTeacher.surName), store.state.rules.max(50, store.state.editTeacher.surName)]"
              v-model="store.state.editTeacher.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Email"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.email),store.state.rules.min(2, store.state.editTeacher.email), store.state.rules.emailRules(store.state.editTeacher.email)]"
              v-model="store.state.editTeacher.email"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.editTeacher.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.editTeacher.avatar"
              show-size
              @change="store.state.editTeacher.wasEdited = true"
              outlined dense
              color="teal darken-4"
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото"
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('editTeacher', $root.$refs.toolbar.$refs.editTeacherForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.editTeacher.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddSubjectForm = Vue.component('new-subject-x',{
  data() {
    return {
      teachers: []
    }
  },
  computed: {
    list() {
      return store.state.teachers
    },
    showDialog() {
      return store.state.newSubject.dialog
    }
  },
  watch: {
    list: {
      handler() {
        store.state.newSubject.subject = ''
        store.state.newSubject.teacher = ''
        this.teachers = store.getters.getListOfTeachers
      },
      deep: true,
    },
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newSubjectForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newSubjectForm.$refs.form.resetValidation()
        }
      }
    }
  },
  mounted() {
    this.teachers = store.getters.getListOfTeachers
  },
  template: `
  <v-dialog v-model="store.state.newSubject.dialog" persistent max-width="700px">
    <v-card id="addSubjectForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати навчальну дисципліну</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newSubject.valid"
            :lazy-validation="store.state.newSubject.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Назва дисципліни"
              :rules="[store.state.rules.spaces(store.state.newSubject.subject),store.state.rules.min(3, store.state.newSubject.subject), store.state.rules.max(100, store.state.newSubject.subject)]"
              v-model="store.state.newSubject.subject"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-select
                v-model="store.state.newSubject.teacher"
                :items="teachers"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSubject.teacher)]"
                @keydown.native.space.prevent
                label="Викладач"
              ></v-select>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addSubject', $root.$refs.toolbar.$refs.newSubjectForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newSubject.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddSemesterForm = Vue.component('new-semester-x',{
  data () {
    return {
      items: [],
      subjects: []
    }
  },
  computed: {
    list() {
      return store.state.subjects
    },
    showDialog() {
      return store.state.newSemester.dialog
    }
  },
  watch: {
    list: {
      handler() {
        this.subjects = store.getters.getListOfSubjects
      },
      deep: true,
    },
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newSemesterForm.$refs.form != 'undefined') {
          store.state.newSemester.semester = ''
          store.state.newSemester.groups = []
          this.$root.$refs.toolbar.$refs.newSemesterForm.$refs.form.resetValidation()
        }
      }
    }
  },
  mounted () {
    this.subjects = store.getters.getListOfSubjects
    const currentYear = new Date()
    let { firstYear, lastYear } = 0
    if (currentYear.getMonth() < 8) {
      firstYear = currentYear.getFullYear()-1
      lastYear = currentYear.getFullYear()
    } else {
      firstYear = currentYear.getFullYear()
      lastYear = currentYear.getFullYear()+1
    }
    for (let i = 1; i < 12; i++) {
      this.items.push(`${i}-й семестр ${firstYear}/${lastYear} навчального року`)
    }
  },
  template: `
  <v-dialog v-model="store.state.newSemester.dialog" persistent max-width="1200px">
    <v-card id="addSemesterForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати навчальний семестр</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newSemester.valid"
            :lazy-validation="store.state.newSemester.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-select
                v-model="store.state.newSemester.semester"
                :items="items"
                item-color="teal darken-4"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.semester)]"
                label="Семестр навчального року"
              ></v-select>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-select
                v-model="store.state.newSemester.groups"
                @keydown.native.space.prevent
                :items="store.state.groups"
                color="teal darken-4"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.groups)]"
                label="Групи"
                multiple required
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="3" class="px-2 py-2">
              <v-combobox
                v-model="store.state.newSemester.discipline"
                @change="store.getters.getTeacherForSubject(store.state.newSemester.discipline)"
                :items="subjects"
                @keydown.native.space.prevent
                color="teal darken-4"
                item-color="teal darken-4"
                @keypress.native="$root.validateKey($event)"
                no-data-text="Не знайдено відповідних записів"
                :rules="[store.state.rules.spaces(store.state.newSemester.discipline),store.state.rules.minGroup(1, store.state.newSemester.discipline), store.state.rules.max(50, store.state.newSemester.discipline)]"
                label="Навчальна дисципліна"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="6" sm="3" md="2" class="px-2 py-2">
              <v-select
                v-model="store.state.newSemester.form"
                :items="['Залік','Екзамен','Курсовий проект','Навчальна практика','Виробнича практика','Переддипломна практика']"
                color="teal darken-4"
                item-color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.form)]"
                label="Форма"
                required
              ></v-select>
            </v-col>
            <v-col cols="3" sm="3" md="1" class="px-2 py-2">
              <v-text-field
              label="Годин"
              @keydown.native.space.prevent
              type="number"
              min="1"
              max="500"
              :rules="[store.state.rules.spaces(store.state.newSemester.hours),store.state.rules.min(1, store.state.newSemester.hours), store.state.rules.max(3, store.state.newSemester.hours)]"
              v-model="store.state.newSemester.hours" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="3" sm="3" md="1" class="px-2 py-2">
              <v-text-field
              label="Кредитів"
              type="number"
              @keydown.native.space.prevent
              min="1"
              max="30"
              :rules="[store.state.rules.spaces(store.state.newSemester.credits),store.state.rules.min(1, store.state.newSemester.credits), store.state.rules.max(5, store.state.newSemester.credits)]"
              v-model="store.state.newSemester.credits" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="4" sm="3" md="2" class="px-2 py-2">
              <v-menu
                v-model="store.state.newSemester.menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="200px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="store.state.newSemester.date"
                    label="Дата складання"
                    readonly
                    color="teal darken-4"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                color="teal darken-4"
                v-model="store.state.newSemester.date"
                locale="uk"
                first-day-of-week="1"
                @input="store.state.newSemester.menu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" sm="3" md="2" class="px-2 py-2">
              <v-text-field
              label="Викладач"
              v-model="store.state.newSemester.teacher"
              :rules="[store.state.rules.spaces(store.state.newSemester.teacher),store.state.rules.min(10, store.state.newSemester.teacher), store.state.rules.max(50, store.state.newSemester.teacher)]"
              readonly
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2" sm="1" md="1" class="px-2 py-2">
            <v-spacer></v-spacer>
            <v-btn text class="home-link my-3" title="Додати до списку" @click="store.dispatch('addSubjectToSemester', $root.$refs.toolbar.$refs.newSemesterForm.$refs.form)"><span class="mdi mdi-24px mdi-arrow-down-bold-box-outline"></span></v-btn>
            <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-flex v-if="store.state.newSemester.subjects.length > 0">
            <h3 class="font-weight-bold text--secondary">Перелік навчальних дисциплін</h3>
            <v-divider class="my-3"></v-divider>
            <v-row no-gutters v-for="(item, index) in store.state.newSemester.subjects" :key="item.index">
              <v-col cols="1">
                  {{ index+1 }}
              </v-col>
              <v-col cols="3" class="text-left">
                {{ item.discipline }}
              </v-col>
              <v-col cols="1">
                {{ item.form }}
              </v-col>
              <v-col cols="1">
                {{ item.hours }}
              </v-col>
              <v-col cols="1">
                {{ item.credits }}
              </v-col>
              <v-col cols="2">
                {{ item.date }}
              </v-col>
              <v-col cols="2" class="text-left">
                {{ item.teacher }}
              </v-col>
              <v-col cols="1">
              <v-span
              class="mdi mdi-24px mdi-close-outline home-link"
              @click="store.dispatch('removeSubjectFromSemester', index )"
              title="Вилучити зі списку"
              ></v-span>
              </v-col>
            </v-row>
            <v-divider class="my-3"></v-divider>
          </v-flex>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addSemester', $root.$refs.toolbar.$refs.newSemesterForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newSemester.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddGradeForm = Vue.component('new-grade-x',{
  computed: {
    showDialog() {
      return store.state.newGrade.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newGradeForm.$refs.form != 'undefined') {
          store.state.newGrade.scores = []
          store.state.newGrade.grades = []
          this.$root.$refs.toolbar.$refs.newGradeForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.newGrade.dialog" persistent max-width="1000px">
    <v-card id="addGradeForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати оцінки</span>
      </v-title>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="8" md="8" class="px-2 py-2">
              <v-select
                v-model="store.state.newGrade.semester"
                @change="store.getters.getListOfDiscipline(store.state.newGrade.semester)"
                :items="store.getters.getListOfSemesters"
                :rules="[store.state.rules.minGroup(1, store.state.newGrade.semester)]"
                color="teal darken-4"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                label="Семестер"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4" md="4" class="px-2 py-2">
              <v-select
                v-if="store.state.newGrade.disciplines.length > 0"
                v-model="store.state.newGrade.discipline"
                no-data-text="Не знайдено відповідних записів"
                :items="store.state.newGrade.disciplines"
                :rules="[store.state.rules.minGroup(1, store.state.newGrade.discipline)]"
                color="teal darken-4"
                item-color="teal darken-4"
                label="Навчальна дисципліна"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="px-1">
              <v-divider class="my-1"></v-divider>
              <v-form
                ref="form"
                v-model="store.state.newGrade.valid"
                :lazy-validation="store.state.newGrade.lazy"
                >
              <v-simple-table>
                <v-divider class="py-1"></v-divider>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Студент</th>
                      <th></th>
                      <th>Балів</th>
                      <th></th>
                      <th>Оцінка</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(student, index) in store.state.selectedStudents" :key="index">
                      <td><v-divider vertical></v-divider></td>
                      <td class="text-left">{{ student.fullname }}</td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                          <v-text-field
                            @keydown.native.space.prevent
                            v-if="store.state.newGrade.discipline != ''"
                            v-model="store.state.newGrade.scores[index]"
                            single-line
                            :rules="[store.state.rules.spaces(store.state.newGrade.scores[index]),store.state.rules.min(1, store.state.newGrade.scores[index]), store.state.rules.max(2, store.state.newGrade.scores[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                        <v-select
                          v-if="store.state.newGrade.discipline != ''"
                          v-model="store.state.newGrade.grades[index]"
                          :items="['5','4','3','2','1','зарах']"
                          :rules="[store.state.rules.minGroup(1, store.state.newGrade.grades[index])]"
                          color="teal darken-4"
                          item-color="teal darken-4"
                        ></v-select>
                      </td>
                      <td><v-divider vertical></v-divider></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              </v-form>
              <v-divider class="py-1"></v-divider>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addGrade', $root.$refs.toolbar.$refs.newGradeForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newGrade.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
// The Login Form
const Login = {
  template: `
  <div class="text-center mx-3" v-if="form === true">
    <h3 class="text--secondary">Авторизація</h3>
    <v-text-field
    hide-details="auto"
    color="teal darken-4"
    maxlength="30"
    hint="Ім'я користувача"
    placeholder="Ім'я користувача"
    single-line
    :rules="[store.state.rules.spaces(username)]"
    @keydown.native.space.prevent
    prepend-inner-icon="mdi-face"
    v-model="username"
    @keypress.enter="userLogin"
    class="my-5"
    ></v-text-field>
    <v-text-field
    hide-details="auto"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show ? 'text' : 'password'"
    color="teal darken-4"
    maxlength="30"
    hint="Введіть ваш пароль"
    placeholder="Введіть ваш пароль"
    :rules="[store.state.rules.spaces(password)]"
    @keydown.native.space.prevent
    single-line
    prepend-inner-icon="mdi-key"
    v-model="password"
    class="my-5"
    @keypress.enter="userLogin"
    @click:append="show = !show"
    >
    </v-text-field>
    <v-progress-linear
    :active="loading"
    :indeterminate="loading"
    color="teal darken-4"
    height="3"
    ></v-progress-linear>
    <v-btn @click.native="userLogin" class="home-link my-5" width="150" height="55">
      <v-icon icon title="Login" class="m-auto display-2">mdi-check</v-icon>
    </v-btn>
  </div>
  `,
  data() {
    return {
      username: "",
      password: "",
      show: false,
      loading: false,
      form: false
    }
  },
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
          sessionStorage.setItem('username', this.username)
          store.dispatch('loginUser', data)
            .then(result => {
              if (!result.key) {
                Notiflix.Notify.Failure('Не вдається авторизуватися за допомогою наданих облікових даних.')
              } else if (typeof result.key != 'undefined') {
                sessionStorage.setItem("auth_token", result.key)
                router.replace({
                  name: "home"
                })
                Notiflix.Notify.Success('Авторизація пройшла успішно.')
              }
              this.loading = false
            })
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
// <!--- The Login Form
// The Home Page
const Home = {
  template: `
  <div class="container text-center mb-5">
    <h2 class="display-2 my-5 text-weight-bold text-uppercase">Flex Grade</h2>
    <router-link to="/students" class="mx-1">
      <v-btn class="home-link my-3" width="300" height="55">
        <v-icon icon class="m-auto mr-3">mdi-account-multiple-outline</v-icon>
        <span class="text--secondary m-auto">Студенти</span>
      </v-btn>
    </router-link>
    <router-link to="/teachers" class="mx-1">
      <v-btn class="home-link my-3" width="300" height="55">
        <v-icon class="m-auto mr-3">mdi-account-multiple-outline</v-icon>
        <span class="text--secondary m-auto">Викладачі</span>
      </v-btn>
    </router-link>
  </div>
  `,
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    }
  }
}
// <!--- Home Page
// The Contact Info Page
const Contact = {
  template: `
  <div class="container text-center mb-5 align-center">
    <h2 class="display-2 my-5 text-weight-bold text-uppercase">Flex Grade</h2>
    <div class="text-justify contact-section">
      <span class="mdi mdi-earth"></span>
      <span class="text--secondary font-weight-black">Призначення:</span>
      <span> облік результатів залікової сесії</span> <br>
      <span class="mdi mdi-account-outline"></span>
      <span class="text--secondary font-weight-black">Розробник:</span>
      <a class="home-link" href="https://www.linkedin.com/in/viktorkozachok" target="_blank"> Козачок Віктор</a> <br>
      <span class="mdi mdi-phone"></span>
      <span class="text--secondary font-weight-black">Телефон:</span>
      <span> 096-123-7959</span> <br>
      <span class="mdi mdi-gmail"></span>
      <span class="text--secondary font-weight-black">Email:</span>
      <span> viktorkozachok21@gmail.com</span>
    </div>
    <h3>Адміністратори системи</h3>
    <div class="text-justify contact-section" v-for="admin in store.state.admins">
      <span class="mdi mdi-account-outline"></span>
      <span> {{ admin.fullname }}</span> <br>
      <span class="mdi mdi-gmail"></span>
      <span class="text--secondary font-weight-black">Email:</span>
      <span> {{ admin.email }}</span> <br>
    </div>
  </div>
  `,
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    }
  }
}
// <!--- The Contact Info Page
// The List Of Students
const StudentsList = {
  template: `
  <div>
    <v-row>
      <v-text-field
      class="col-xs-12 col-md-9 px-5"
      v-model="search"
      append-icon="mdi-magnify"
      label="Пошук..."
      color="teal darken-4"
      @keydown.native.space.prevent
      @input="store.state.selectedStudents = []"
      single-line
      hide-details
      ></v-text-field>
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
    :headers="headers"
    :items="students"
    :item-key="itemKey"
    :sort-by="sortBy"
    multi-sort
    :search="search"
    no-results-text="Не знайдено відповідних записів"
    no-data-text="Не знайдено відповідних записів"
    v-model="store.state.selectedStudents"
    :single-select="singleSelect"
    :show-select="store.state.showSelected"
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
    prepend-inner-icon="mdi-emoticon"
    solo
    readonly
    ></v-text-field>
  </div>
  `,
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
      sortBy: 'fullname',
      itemsPerPage: 30,
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
          align: 'left',
          width: '15%',
          value: 'book_number',
        },
        {
          text: 'Рівень освіти',
          align: 'left',
          width: '12%',
          value: 'degree',
        },
        {
          text: 'Зареєстровано',
          align: 'right',
          width: '15%',
          value: 'registered',
        }
      ],
    }
  },
  computed: {
    watcher() {
      options = this.options
      students = store.state.students
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
        }, 1000);
      })
    },
    moreInfo(student) {
      sessionStorage.removeItem("student")
      sessionStorage.setItem("student", JSON.stringify(student))
      router.push({
        name: 'student',
        params: {
          'code': student.code,
          'profile': student
        }
      })
    }
  }
}
// <!--- The List Of Students
// The More Details About A Student
const StudentsPerson = {
  template: `
  <div class="mx-1 text-center">
      <v-row>
        <v-col cols="12">
          <div class="text-center float-sm-left mr-sm-3 p-1">
            <v-dialog v-model="dialog" persistent max-width="500px">
              <v-card class="text-center py-0 my-0">
                <v-title class="subtitle-2 text-center">
                  <span class="headline mx-auto">Змінити фото</span>
                </v-title>
                  <v-container class="my-0 py-0">
                    <v-row no-gutters>
                      <v-col cols="12" class="px-1">
                        <v-file-input
                         :rules="[store.state.rules.maxFile(avatar)]"
                         accept="image/png, image/jpeg, image/bmp, image/jpg"
                         v-model="avatar"
                         show-size
                         @change="wasEdited = true"
                         outlined dense
                         placeholder="Оберіть фото"
                         prepend-icon="mdi-camera"
                         label="Фото"
                      ></v-file-input>
                      </v-col>
                    </v-row>
                    <v-card-actions class="my-0 py-0">
                      <v-spacer></v-spacer>
                      <v-btn class="home-link my-3" v-if="wasEdited == true" @click="changeAvatar">Зареєструвати</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn class="home-link my-3" @click="dialog = false">Згорнути</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-container>
              </v-card>
            </v-dialog>
              <v-img
              :src="'/media/' + person.avatar"
              :aspect-ratio="3/4"
              class="mx-auto mb-1 grey lighten-2 text-right pt-1"
              width="250"
              >
              <v-span
              class="mdi mdi-24px mdi-border-color home-link mr-1"
              @click="dialog = true"
              v-if="edit == true"
              title="Змінити фото"
              ></v-span>
            </v-img>
              <span class="font-weight-bold mb-1">Дата реєстрації:</span> {{ person.registered }}
          </div>
          <h2 class="text--secondary">Електронна залікова книжка №: {{ person.book_number }}</h2>
          <h3 class="mb-1">{{ person.fullname }}</h3>
          <v-divider class="my-3"></v-divider>
          <div class="text-justify">
            <span class="font-weight-bold ml-3">Група:</span> {{ person.group_number }}
          </div>
          <v-divider class="my-3"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-divider class="my-3"></v-divider>
          <h3 class="text--secondary">
            Заліки, екзамени, курсові роботи, практики
          </h3>
          <v-divider class="my-3"></v-divider>
          <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          color="teal darken-4"
          height="3"
          ></v-progress-linear>
          <p v-if="!gotData">Не знайдено відповідних записів</p>
            <div v-if="gotData" v-for="(semester, index) in semesters" :key="index" class="mb-5">
              <v-divider class="my-1"></v-divider>
              <h5 class="title ml-5 my-3 text-left">{{ semester.semester }}</h5>
              <v-divider class="my-1"></v-divider>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th><v-divider vertical></v-divider></th>
                      <th class="text-center">№</th>
                      <th class="text-left">Навчальна дисципліна</th>
                      <th class="text-center">Форма</th>
                      <th class="text-center">Годин</th>
                      <th class="text-center">Кредитів</th>
                      <th class="text-center">Балів</th>
                      <th class="text-center">Оцінка</th>
                      <th class="text-center">Дата складання</th>
                      <th class="text-left">Викладач</th>
                      <th><v-divider vertical></v-divider></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in semester.disciplines" :key="index">
                      <td><v-divider vertical></v-divider></td>
                      <td class="text-center">{{ item.number }}</td>
                      <td class="text-left">{{ item.subject }}</td>
                      <td class="text-center">{{ item.form }}</td>
                      <td class="text-center">{{ item.hours }}</td>
                      <td class="text-center">{{ item.credits }}</td>
                      <td class="text-center" v-if="semester.grades[index]">{{ semester.grades[index].score }}</td>
                      <td class="text-center" v-else></td>
                      <td class="text-center" v-if="semester.grades[index]">{{ semester.grades[index].grade }}</td>
                      <td class="text-center" v-else></td>
                      <td class="text-center">{{ item.discipline_date }}</td>
                      <td class="text-left">{{ item.teacher }}</td>
                      <td><v-divider vertical></v-divider></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider class="my-1"></v-divider>
            </div>
          <v-divider class="mt-3 mb-5"></v-divider>
        </v-col>
      </v-row>
  </div>
  `,
  data() {
    return {
      gotData: true,
      person: {},
      semesters: [],
      loading: true,
      edit: false,
      dialog: false,
      avatar: '',
      wasEdited: false
    }
  },
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
      if (this.$route.params.edit) {
        this.edit = true
      } else {
        this.edit = false
      }
      this.person = this.$route.params.profile
      this.getData()
        .then(data => {
          this.semesters = data.semesters
          this.loading = false
          if (typeof data.semesters != 'undefined') {
            if (data.semesters.length > 0) {
              this.gotData = true
            }
          } else {
            this.gotData = false
          }
        })

    }
  },
  methods: {
    getData() {
      this.loading = true
      return new Promise((resolve, reject) => {
        store.dispatch('getSemesters', this.person.code)
          .then(() => {
            let semesters = store.state.semestersForStudent
            setTimeout(function() {
              resolve({
                semesters
              })
            }, 1000);
          })
      })
    },
    changeAvatar() {
      if (this.avatar && this.avatar != '') {
        store.dispatch('editPhoto', {
            person: this.person.code,
            avatar: this.avatar
          })
          .then(result => {
            store.dispatch('checkAuth')
            store.dispatch('loadStudents')
            this.person.avatar = result
            this.avatar = ''
            Notiflix.Notify.Success('Інформацію успішно змінено.')
          })
        this.dialog = false
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    }
  }
}
// <!--- The More Details About A Student
// The List Of Teachers
const TeachersList = {
  template: `
  <div>
    <v-row>
      <v-text-field
      class="col-xs-12 px-5"
      v-model="search"
      append-icon="mdi-magnify"
      label="Пошук..."
      color="teal darken-4"
      @keydown.native.space.prevent
      @input="store.state.selectedTeachers = []"
      single-line
      hide-details
      ></v-text-field>
    </v-row>
    <v-data-table
    :headers="headers"
    :items="teachers"
    :item-key="itemKey"
    :sort-by="sortBy"
    multi-sort
    :search="search"
    v-model="store.state.selectedTeachers"
    :single-select="singleSelect"
    :show-select="store.state.showSelected"
    no-results-text="Не знайдено відповідних записів"
    no-data-text="Не знайдено відповідних записів"
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
    prepend-inner-icon="mdi-emoticon"
    color="teal darken-4"
    solo readonly
    ></v-text-field>
  </div>
  `,
  data() {
    return {
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
      itemsPerPage: 30,
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
    }
  },
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
      return new Promise((resolve, reject) => {
        let loaded = store.state.teachers
        let total = loaded.length
        setTimeout(() => {
          resolve({
            loaded,
            total,
          })
        }, 1000)
      })
    },
    moreInfo(teacher) {
      sessionStorage.removeItem("teacher")
      sessionStorage.setItem("teacher", JSON.stringify(teacher))
      router.push({
        name: 'teacher',
        params: {
          'code': teacher.code,
          'profile': teacher
        }
      })
    }
  }
}
// <!--- The List Of Teachers
// The More Details About A Teacher
const TeachersPerson = {
  template: `
  <div class="mx-1 text-center">
    <v-row>
      <v-col cols="12">
        <div class="text-center float-sm-left mr-sm-3 p-1">
          <v-dialog v-model="dialog" persistent max-width="500px">
            <v-card class="text-center py-0 my-0">
              <v-title class="subtitle-2 text-center">
                <span class="headline mx-auto">Змінити фото</span>
              </v-title>
                <v-container class="my-0 py-0">
                  <v-row no-gutters>
                    <v-col cols="12" class="px-1">
                      <v-file-input
                       :rules="[store.state.rules.maxFile(avatar)]"
                       accept="image/png, image/jpeg, image/bmp, image/jpg"
                       v-model="avatar"
                       show-size
                       @change="wasEdited = true"
                       outlined dense
                       placeholder="Оберіть фото"
                       prepend-icon="mdi-camera"
                       label="Фото"
                    ></v-file-input>
                    </v-col>
                  </v-row>
                  <v-card-actions class="my-0 py-0">
                    <v-spacer></v-spacer>
                    <v-btn class="home-link my-3" v-if="wasEdited == true" @click="changeAvatar">Зареєструвати</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="home-link my-3" @click="dialog = false">Згорнути</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-container>
            </v-card>
          </v-dialog>
          <v-img
           :src="'/media/' + person.avatar"
           :aspect-ratio="3/4"
           class="mx-auto mb-1 grey lighten-2 text-right pt-1"
           width="250"
           >
           <v-span
           class="mdi mdi-24px mdi-border-color home-link mr-1"
           @click="dialog = true"
           v-if="edit == true"
           title="Змінити фото"
           ></v-span>
           </v-img>
          <span class="font-weight-bold mb-1">Дата реєстрації:</span> {{ person.registered }}
        </div>
        <h3 class="mb-1 text-center">{{ person.fullname }}</h3>
        <v-divider class="my-3"></v-divider>
        <div class="text-justify">
          <span class="font-weight-bold">Email:</span> {{ person.email }}
        </div>
        <v-divider class="my-3"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider class="my-3"></v-divider>
        <h3 class="text--secondary">Викладає навчальні дисципліни:</h3>
        <v-divider class="my-3"></v-divider>
        <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="teal darken-4"
        height="3"
        ></v-progress-linear>
        <p v-if="!gotData">Не знайдено відповідних записів</p>
        <v-simple-table v-if="gotData">
          <template v-slot:default>
            <tbody>
              <tr v-for="(item, index) in subjects" :key="index">
                <td><v-divider vertical></v-divider></td>
                <td class="text-left">{{ item.subject }}</td>
                <td><v-divider vertical></v-divider></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider class="mt-3 mb-5"></v-divider>
      </v-col>
    </v-row>
  </div>
  `,
  data() {
    return {
      person: {},
      gotData: true,
      subjects: [],
      loading: true,
      edit: false,
      dialog: false,
      avatar: '',
      wasEdited: false
    }
  },
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
      this.person = this.$route.params.profile
      if (this.$route.params.edit) {
        this.edit = true
      } else {
        this.edit = false
      }
      this.getData()
        .then(data => {
          this.subjects = data.loaded
          this.loading = false
          if (typeof data.loaded != 'undefined') {
            if (data.loaded.length > 0) {
              this.gotData = true
            }
          } else {
            this.gotData = false
          }
        })
    }
  },
  methods: {
    getData() {
      this.loading = true
      return new Promise((resolve, reject) => {
        let loaded = store.getters.getSubjectsForTeacher(this.person.fullname)
        setTimeout(function() {
          resolve({
            loaded,
          })
        }, 1000)
      })
    },
    changeAvatar() {
      if (this.avatar && this.avatar != '') {
        store.dispatch('editPhoto', {
            person: this.person.code,
            avatar: this.avatar
          })
          .then(result => {
            store.dispatch('checkAuth')
            store.dispatch('loadTeachers')
            this.person.avatar = result
            this.avatar = ''
            Notiflix.Notify.Success('Інформацію успішно змінено.')
          })
        this.dialog = false
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    }
  }
}
// <!--- The More Details About A Teacher
// The Profile Of A User
const Profile = {
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
      if (store.state.status == 'Admin') {
        router.replace({
          name: 'home'
        })
      } else if (store.state.status == 'Student') {
        student = JSON.parse(sessionStorage.getItem('profile'))
        router.push({
          name: 'student',
          params: {
            'id': student.code,
            'profile': student,
            'edit': student.code
          }
        })
      } else if (store.state.status == 'Teacher') {
        teacher = JSON.parse(sessionStorage.getItem('profile'))
        router.push({
          name: 'teacher',
          params: {
            'id': teacher.code,
            'profile': teacher,
            'edit': teacher.code
          }
        })
      }
    }
  }
}
// <!--- The Profile Of A User
// The router
const router = new VueRouter({
  mode: 'history',
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
      component: Home
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsList,
      meta: {
        showBack: true,
        showNewStudent: true
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
        showBack: true,
        showNewTeacher: true
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
      name: 'profile',
      path: '/profile',
      component: Profile,
      meta: {
        showBack: true
      }
    },
    // {
    //   name: 'directory',
    //   path: '/directory',
    //   component: Directory,
    //   meta: {
    //     showBack: true
    //   }
    // },
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

// Vuex store to keep the data in use
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    showSelected: false,
    authenticated: false,
    rules: {
      spaces(v) {
        if (v) {
          if (v.trim()) {
            return true
          }
        } else {
         return 'Порожнє поле'
       }
      },
      maxFile(v) {
        return v => !v || v.size < 1000000 || 'Максимальний розмір 1 MB';
      },
      min(min, v) {
        return (v || '').length >= min || `Мінімальне значення ${min}`;
      },
      max(max, v) {
        return (v || '').length <= max || `Максимальне значення ${max}`;
      },
      emailRules(v) {
        return v => /.+@.+\..+/.test(v) || 'Email введено некоректно';
      },
      minGroup(min, v) {
        return (v || '').length >= min || `Оберіть ${min} значення`;
      }
    },
    students: [],
    groups: [],
    teachers: [],
    subjects: [],
    admins: [],
    semestersForStudent: [],
    status: null,
    studyStatus: true,
    selectedStudents: [],
    selectedTeachers: [],
    newStudent: {
      valid: true,
      lazy: true,
      dialog: false,
      username: '',
      password: '',
      lastName: '',
      firstName: '',
      surName: '',
      bookNumber: '',
      group: '',
      avatar: ''
    },
    editStudent: {
      valid: true,
      lazy: true,
      dialog: false,
      wasEdited: false,
      code: '',
      lastName: '',
      firstName: '',
      surName: '',
      bookNumber: '',
      avatar: ''
    },
    newTeacher: {
      valid: true,
      lazy: true,
      dialog: false,
      username: '',
      password: '',
      lastName: '',
      firstName: '',
      surName: '',
      email: '',
      avatar: ''
    },
    editTeacher: {
      valid: true,
      lazy: true,
      dialog: false,
      wasEdited: false,
      lastName: '',
      firstName: '',
      surName: '',
      email: '',
      avatar: ''
    },
    newSubject: {
      valid: true,
      lazy: true,
      dialog: false,
      subject: '',
      teacher: '',
    },
    newSemester: {
      valid: true,
      lazy: true,
      dialog: false,
      semester: '',
      groups: [],
      discipline: '',
      form: '',
      hours: '',
      credits: '',
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      teacher: '',
      subjects: [],
      isFinished: false
    },
    newGrade: {
      valid: true,
      lazy: true,
      dialog: false,
      semesters: [],
      semester: '',
      disciplines: [],
      discipline: '',
      scores: [],
      grades: []
    }
  },
  actions: {
    checkAuth: ({ commit }) => {
      if (sessionStorage.getItem('auth_token')) {
        return new Promise((resolve, reject) => {
          let username = sessionStorage.getItem('username')
          fetch(`/api/app/active_user/${username}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            })
            .then(r => r.json())
            .then(response => {
              sessionStorage.removeItem("profile")
              sessionStorage.setItem("profile", JSON.stringify(response.profile))
              resolve(commit('CHECK_AUTH', {
                response: response
              }))
            })
        })
      } else {
        commit('CHECK_AUTH')
      }
    },
    loginUser: ({ commit }, data) => {
      let csrftoken = getCookie('csrftoken')
      return new Promise((resolve, reject) => {
        fetch('/api/auth/login/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data)
          })
          .then(r => r.json())
          .then(response => {
            sessionStorage.setItem("response", JSON.stringify(response))
            resolve(response)
          })
      })
    },
    logoutUser: ({ commit }) => {
      Notiflix.Confirm.Show(
        'Підтвердіть дію', 'Ви дійсно хочете вийти?', 'Так', 'Ні',
        function() {
          return new Promise((resolve, reject) => {
            fetch('/api/auth/logout/')
              .then(() => {
                sessionStorage.removeItem("auth_token")
                sessionStorage.removeItem("username")
                sessionStorage.removeItem("response")
                sessionStorage.removeItem("profile")
                router.replace({
                  name: "login"
                })
                resolve(commit('CHECK_AUTH'))
              })
          })
        },
        function() {});
    },
    getPassword: ({ commit }, person) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/registration/')
          .then(r => r.json())
          .then(result => {
            resolve(commit('GET_PASSWORD', {
              person: person,
              result: result
            }))
          })
      })
    },
    getAdmins: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/admins/')
          .then(r => r.json())
          .then(response => {
            resolve(commit('GET_ADMINS', response))
          })
      })
    },
    addStudent: ({ commit, state, dispatch }, form) => {
      if (form.validate()) {
        Notiflix.Block.Circle('div#addStudentForm', 'Зачекайте, будь ласка ...')
        let data = new FormData()
        data.append('username', state.newStudent.username)
        data.append('password', state.newStudent.password)
        data.append('first_name', state.newStudent.firstName)
        data.append('last_name', state.newStudent.lastName)
        data.append('sur_name', state.newStudent.surName)
        data.append('book_number', state.newStudent.bookNumber)
        data.append('group_number', state.newStudent.group)
        if (state.newStudent.avatar != '') {
          data.append('avatar', state.newStudent.avatar)
        }
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch('/api/app/registration/', {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              Notiflix.Block.Remove('div#addStudentForm')
              if (response.success) {
                dispatch('loadStudents')
                resolve(commit('ADD_STUDENT', {
                  form: form,
                  response: response
                }))
              } else if (!response.success) {
                Notiflix.Notify.Failure(response.message)
              }
            })
        })
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    addTeacher: ({ commit, state, dispatch }, form) => {
      if (form.validate()) {
        Notiflix.Block.Circle('div#addTeacherForm', 'Зачекайте, будь ласка ...')
        let data = new FormData()
        data.append('username', state.newTeacher.username)
        data.append('password', state.newTeacher.password)
        data.append('first_name', state.newTeacher.firstName)
        data.append('last_name', state.newTeacher.lastName)
        data.append('sur_name', state.newTeacher.surName)
        data.append('email', state.newTeacher.email)
        if (state.newTeacher.avatar != '') {
          data.append('avatar', state.newTeacher.avatar)
        }
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch('/api/app/registration/', {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              Notiflix.Block.Remove('div#addTeacherForm')
              if (response.success) {
                dispatch('loadTeachers')
                resolve(commit('ADD_TEACHER', {
                  form: form,
                  response: response
                }))
              } else if (!response.success) {
                Notiflix.Notify.Failure(response.message)
              }
            })
        })
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    editStudent: ({ commit, state, dispatch }, form) => {
      if (state.editStudent.wasEdited) {
        if (form.validate()) {
          Notiflix.Block.Circle('div#editStudentForm', 'Зачекайте, будь ласка ...')
          let data = new FormData()
          data.append('code', state.editStudent.code)
          data.append('first_name', state.editStudent.firstName)
          data.append('last_name', state.editStudent.lastName)
          data.append('sur_name', state.editStudent.surName)
          data.append('book_number', state.editStudent.bookNumber)
          if (state.editStudent.avatar && state.editStudent.avatar != '') {
            data.append('avatar', state.editStudent.avatar)
          }
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch('/api/app/edit_profile/', {
                method: 'PUT',
                headers: {
                  'X-CSRFToken': csrftoken,
                },
                body: data
              })
              .then(r => r.json())
              .then(response => {
                Notiflix.Block.Remove('div#editStudentForm')
                if (response.success) {
                  dispatch('loadStudents')
                  resolve(commit('EDIT_STUDENT', {
                    form: form,
                    response: response
                  }))
                } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
                }
              })
          })
        } else {
          Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
        }
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    editTeacher: ({ commit, state, dispatch }, form) => {
      if (state.editTeacher.wasEdited) {
        if (form.validate()) {
          Notiflix.Block.Circle('div#editTeacherForm', 'Зачекайте, будь ласка ...')
          let data = new FormData()
          data.append('code', state.editTeacher.code)
          data.append('first_name', state.editTeacher.firstName)
          data.append('last_name', state.editTeacher.lastName)
          data.append('sur_name', state.editTeacher.surName)
          data.append('email', state.editTeacher.email)
          if (state.editTeacher.avatar && state.editTeacher.avatar != '') {
            data.append('avatar', state.editTeacher.avatar)
          }
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch('/api/app/edit_profile/', {
                method: 'PUT',
                headers: {
                  'X-CSRFToken': csrftoken,
                },
                body: data
              })
              .then(r => r.json())
              .then(response => {
                Notiflix.Block.Remove('div#editTeacherForm')
                if (response.success) {
                  dispatch('loadTeachers')
                  commit('EDIT_TEACHER', {
                    form: form,
                    response: response
                  })
                } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
                }
                Notiflix.Block.Remove('div#editTeacherForm')
              })
          })
        } else {
          Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
        }
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    minusStudent: ({ commit, state, dispatch }) => {
      Notiflix.Confirm.Show(
        'Підтвердіть дію', 'Виключити студента(ів) зі списку?', 'Так', 'Ні',
        function() {
          let students = []
          state.selectedStudents.forEach(item => {
            students.push(item.code)
          })
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch('/api/app/registration/', {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                  'students': students
                })
              })
              .then(r => r.json())
              .then(response => {
                if (response.success) {
                  dispatch('loadStudents')
                  resolve(commit('MINUS_USER'))
                  Notiflix.Notify.Success(response.message)
                } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
                }
              })
          })
        },
        function() {})
    },
    minusTeacher: ({ commit, state, dispatch }) => {
      Notiflix.Confirm.Show(
        'Підтвердіть дію', 'Виключити викладача(ів) зі списку?', 'Так', 'Ні',
        function() {
          let teachers = []
          state.selectedTeachers.forEach(item => {
            teachers.push(item.code)
          })
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch('/api/app/registration/', {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({
                  'teachers': teachers
                })
              })
              .then(r => r.json())
              .then(response => {
                if (response.success) {
                  dispatch('loadTeachers')
                  dispatch('loadSubjects')
                  resolve(commit('MINUS_USER'))
                  Notiflix.Notify.Success(response.message)
                } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
                }
              })
          })
        },
        function() {})
    },
    loadStudents: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/students/')
          .then(r => r.json())
          .then(response => {
            resolve(commit('LOAD_STUDENTS', response))
          })
      })
    },
    loadTeachers: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/teachers/')
          .then(r => r.json())
          .then(response => {
            resolve(commit('LOAD_TEACHERS', response))
          })
      })
    },
    checkStatus: ({ commit }, status) => {
      commit('CHECK_STATUS', status)
    },
    loadSubjects: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/subjects/')
          .then(r => r.json())
          .then(response => {
            resolve(commit('LOAD_SUBJECTS', response))
          })
      })
    },
    addSubject: ({ commit, state, dispatch, getters }, form) => {
      if (form.validate()) {
        Notiflix.Block.Circle('div#addSubjectForm', 'Зачекайте, будь ласка ...')
        let data = new FormData()
        data.append('subject', state.newSubject.subject)
        data.append('teacher', getters.getTeacherCode(state.newSubject.teacher))
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch('/api/app/edit_subject/', {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              Notiflix.Block.Remove('div#addSubjectForm')
              if (response.success) {
                dispatch('loadSubjects')
                resolve(commit('ADD_SUBJECT', {
                  form: form,
                  response: response
                }))
              } else if (!response.success) {
                Notiflix.Notify.Failure(response.message)
              }
            })
        })
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    addSemester: ({ commit, state }, form) => {
      if (state.newSemester.semester != '') {
        if (state.newSemester.groups.length > 0) {
          if (state.newSemester.subjects.length > 0) {
            Notiflix.Block.Circle('div#addSemesterForm', 'Зачекайте, будь ласка ...')
            const data = {
              'semester': state.newSemester.semester,
              'groups': state.newSemester.groups,
              'disciplines': state.newSemester.subjects
            }
            let csrftoken = getCookie('csrftoken')
            return new Promise((resolve, reject) => {
              fetch('/api/app/edit_semester/', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken,
                  },
                  body: JSON.stringify(data)
                })
                .then(r => r.json())
                .then(response => {
                  Notiflix.Block.Remove('div#addSemesterForm')
                  if (response.success) {
                    resolve(commit('ADD_SEMESTER', {
                      form: form,
                      response: response
                    }))
                  } else if (!response.success) {
                    Notiflix.Notify.Failure(response.message)
                  }
                })
            })
          } else {
            this.loading = false
            Notiflix.Notify.Warning('Додайте щонайменше одну навчальну дисципліну.')
          }
        } else {
          this.loading = false
          Notiflix.Notify.Warning('Оберіть щонайменше одну групу.')
        }
      } else {
        this.loading = false
        Notiflix.Notify.Warning('Оберіть номер(назву) семестру.')
      }
    },
    addSubjectToSemester: ({ commit }, form) => {
      if (form.validate()) {
        if (store.getters.checkDiscipline.length > 0) {
          Notiflix.Notify.Warning('Обрана дисципліна вже додана.')
        } else {
          commit('ADD_SUBJECT_TO_SEMESTER', form)
        }
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    removeSubjectFromSemester: ({ commit }, index) => {
      commit('REMOVE_SUBJECT_FROM_SEMESTER', index)
    },
    getSemesters: ({ commit }, code) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/edit_semester/${code}`)
          .then(r => r.json())
          .then(response => {
            resolve(commit('GET_SEMESTERS', response.semesters))
          })
      })
    },
    loadGroups: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/groups/')
          .then(r => r.json())
          .then(response => {
            resolve(commit('LOAD_GROUPS', response))
          })
      })
    },
    loadSemesters: ({ commit, getters }, students) => {
      if (getters.filterGroup.length > 0) {
        Notiflix.Notify.Warning('Оцінки можна вносити лише для однієї групи.')
      } else {
        return new Promise((resolve, reject) => {
          fetch(`/api/app/edit_grade/${students[0].code}`)
            .then(r => r.json())
            .then(response => {
              resolve(commit('LOAD_SEMESTERS', response))
            })
        })
      }
    },
    addGrade: ({ commit, state }, form) => {
      if (state.newGrade.discipline != '' && form.validate()) {
        Notiflix.Block.Circle('div#addGradeForm', 'Зачекайте, будь ласка ...')
        let semester = state.newGrade.semesters.filter(semester => semester.semester === state.newGrade.semester)
        let discipline = state.newGrade.disciplines.filter(discipline => discipline === state.newGrade.discipline)
        let students = []
        state.selectedStudents.forEach(student => {
          students.push(student.code)
        })
        const data = {
          'semester': semester[0].semester,
          'discipline': discipline[0],
          'students': students,
          'scores': state.newGrade.scores,
          'grades': state.newGrade.grades,
        }
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch('/api/app/edit_grade/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
              },
              body: JSON.stringify(data)
            })
            .then(r => r.json())
            .then(response => {
              Notiflix.Block.Remove('div#addGradeForm')
              commit('ADD_GRADE', {
                form: form,
                response: response
              })
            })
        })
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    editPhoto: ({ commit }, params) => {
      let data = new FormData();
      data.append('person', params.person)
      data.append('avatar', params.avatar)
      let csrftoken = getCookie('csrftoken')
      return new Promise((resolve, reject) => {
        fetch('/api/app/active_user/', {
            method: 'PUT',
            headers: {
              'X-CSRFToken': csrftoken,
            },
            body: data
          })
          .then(r => r.json())
          .then(response => {
            resolve(response.avatar)
          })
      })
    }
  },
  mutations: {
    CHECK_AUTH: (state, props) => {
        if (props) {
          state.authenticated = true
          if (props.response.profile) {
            state.status = props.response.profile.status
              if (state.status === 'Teacher') {
                  state.showSelected = true
              } else {
                  state.showSelected = false
              }
            } else if (props.response.status) {
                state.status = props.response.status
                state.showSelected = true
            } else {
              Notiflix.Notify.Failure(props.response.message)
          }
        } else {
          state.authenticated = false
      }
    },
    GET_PASSWORD: (state, props) => {
      props.person.username = props.result.username
      props.person.password = props.result.password
    },
    GET_ADMINS: (state, response) => {
      state.admins = response
    },
    ADD_STUDENT: (state, props) => {
      state.newStudent.username = ''
      state.newStudent.password = ''
      state.newStudent.firstName = ''
      state.newStudent.lastName = ''
      state.newStudent.surName = ''
      state.newStudent.bookNumber = ''
      state.newStudent.avatar = ''
      props.form.resetValidation()
      Notiflix.Notify.Success(props.response.message)
    },
    ADD_TEACHER: (state, props) => {
      state.newTeacher.username = ''
      state.newTeacher.password = ''
      state.newTeacher.firstName = ''
      state.newTeacher.lastName = ''
      state.newTeacher.surName = ''
      state.newTeacher.email = ''
      state.newTeacher.avatar = ''
      props.form.resetValidation()
      Notiflix.Notify.Success(props.response.message)
    },
    EDIT_STUDENT: (state, props) => {
      state.editStudent.firstName = ''
      state.editStudent.lastName = ''
      state.editStudent.surName = ''
      state.editStudent.bookNumber = ''
      state.editStudent.avatar = ''
      props.form.resetValidation()
      state.editStudent.dialog = false
      state.selectedStudents = []
      Notiflix.Notify.Success(props.response.message)
    },
    EDIT_TEACHER: (state, props) => {
      state.editTeacher.firstName = ''
      state.editTeacher.lastName = ''
      state.editTeacher.surName = ''
      state.editTeacher.email = ''
      state.editTeacher.avatar = ''
      props.form.resetValidation()
      state.editTeacher.dialog = false
      state.selectedTeachers = []
      Notiflix.Notify.Success(props.response.message)
    },
    MINUS_USER: (state) => {
      state.selectedStudents = []
      state.selectedTeachers = []
    },
    LOAD_STUDENTS: (state, response) => {
      state.students = response
    },
    LOAD_TEACHERS: (state, response) => {
      state.teachers = response
    },
    CHECK_STATUS: (state, status) => {
      state.studyStatus = status
    },
    LOAD_SUBJECTS: (state, response) => {
      state.subjects = response
    },
    ADD_SUBJECT: (state, props) => {
      Notiflix.Notify.Success(props.response.message)
      state.newSubject.subject = ''
      props.form.resetValidation()
    },
    ADD_SEMESTER: (state, props) => {
      state.newSemester.form = ''
      state.newSemester.groups = []
      state.newSemester.subjects = []
      props.form.resetValidation()
      Notiflix.Notify.Success(props.response.message)
    },
    ADD_SUBJECT_TO_SEMESTER: (state, form) => {
        let newDiscipline = {
          'discipline': state.newSemester.discipline,
          'form': state.newSemester.form,
          'hours': state.newSemester.hours,
          'credits': state.newSemester.credits,
          'date': state.newSemester.date,
          'teacher': state.newSemester.teacher
        }
        state.newSemester.subjects.push(newDiscipline)
        state.newSemester.discipline = ''
        state.newSemester.hours = ''
        state.newSemester.credits = ''
        state.newSemester.teacher = ''
        form.resetValidation()
    },
    REMOVE_SUBJECT_FROM_SEMESTER: (state, index) => {
      state.newSemester.subjects.splice(index, 1)
    },
    GET_SEMESTERS: (state, semesters) => {
      state.semestersForStudent = semesters
    },
    LOAD_GROUPS: (state, groups) => {
      state.groups = []
      groups.forEach(item => {
        state.groups.push(item.group)
      })
    },
    LOAD_SEMESTERS: (state, response) => {
      state.newGrade.semesters = []
      state.newGrade.semesters = response.semesters
      state.newGrade.disciplines = []
      state.newGrade.semester = ''
      state.newGrade.discipline = ''
      state.newGrade.dialog = true
    },
    ADD_GRADE: (state, props) => {
      state.newGrade.scores = []
      state.newGrade.grades = []
      props.form.resetValidation()
      Notiflix.Notify.Success(props.response.message)
    }
  },
  getters: {
    getStudents: (state) => (studyStatus) => {
      return state.students.filter(student => student.is_active === studyStatus)
    },
    editStudent: (state) => {
      let fullname = state.selectedStudents[0].fullname.split(' ')
      state.editStudent.code = state.selectedStudents[0].code
      state.editStudent.lastName = fullname[0]
      state.editStudent.firstName = fullname[1]
      state.editStudent.surName = fullname[2]
      state.editStudent.bookNumber = state.selectedStudents[0].book_number
    },
    getGroup: (state) => {
      return state.newStudent.group = state.groups[0]
    },
    getListOfTeachers: (state) => {
      let teachers = []
      state.teachers.forEach(teacher => {
        teachers.push(teacher.fullname)
      })
      return teachers
    },
    getTeacherCode: (state) => (fullname) => {
      let code = state.teachers.filter(teacher => teacher.fullname === fullname)
      return code[0].code
    },
    editTeacher: (state) => {
      let fullname = state.selectedTeachers[0].fullname.split(' ')
      state.editTeacher.code = state.selectedTeachers[0].code
      state.editTeacher.lastName = fullname[0]
      state.editTeacher.firstName = fullname[1]
      state.editTeacher.surName = fullname[2]
      state.editTeacher.email = state.selectedTeachers[0].email
    },
    getListOfSubjects: (state) => {
      let list = []
      state.subjects.forEach(item => {
        list.push(item.subject)
      })
      return list
    },
    getTeacherForSubject: (state) => (chosen) => {
      let teacher = state.subjects.filter(subject => subject.subject === chosen)
      if (teacher != '') {
        state.newSemester.teacher = teacher[0].teacher_name
      }
    },
    getSubjectsForTeacher: (state) => (fullname) => {
      return state.subjects.filter(subject => subject.teacher_name === fullname)
    },
    checkDiscipline: (state) => {
      return state.newSemester.subjects.filter(subject => subject.discipline === state.newSemester.discipline)
    },
    filterGroup: (state) => {
      const group = state.selectedStudents[0].group_number
      return state.selectedStudents.filter(student => student.group_number != group)
    },
    getListOfSemesters: (state) => {
      let list = []
      if(typeof state.newGrade.semesters != 'undefined') {
        state.newGrade.semesters.forEach(item => {
          list.push(item.semester)
        })
      }
      return list
    },
    getListOfDiscipline: (state) => (find) => {
      const semesters =  state.newGrade.semesters.filter(semester => semester.semester === find)
      state.newGrade.disciplines = []
      semesters[0].disciplines.forEach(semester => {
        state.newGrade.disciplines.push(semester.subject)
      })
    }
  }
})
// Main app initialization
const app = new Vue({
  router,
  vuetify: new Vuetify(),
  mounted() {
    store.dispatch('getAdmins')
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    validateKey(event) {
        let charCode = (event.which) ? event.which : event.keyCode
        if ((charCode > 32 && charCode < 123) && charCode != 45) {
          event.preventDefault()
        }
        return true
    }
  }
}).$mount('#app')
