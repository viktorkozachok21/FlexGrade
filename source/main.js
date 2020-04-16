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
      <li class="nav-item-x">
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
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
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
      v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"
      :title="store.state.selectedStudents.length === 1 ? 'Вилучити студента зі списку' : 'Вилучити студентів зі списку'"
      ></v-span>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusTeacher')"
      v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"
      :title="store.state.selectedTeachers.length === 1 ? 'Вилучити викладача зі списку' : 'Вилучити викладачів зі списку'"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editStudent;store.state.editStudent.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"
      title="Редагувати профіль студента"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-key home-link"
      @click="store.state.changePassword.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"
      title="Змінити дані авторизації"
      ></v-span>
      <edit-student-x ref="editStudentForm"></edit-student-x>
      <edit-teacher-x ref="editTeacherForm"></edit-teacher-x>
      <new-password-x ref="changePasswordForm"></new-password-x>
      <v-span
      class="mdi mdi-account-key home-link"
      @click="store.state.changePassword.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"
      title="Змінити дані авторизації"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editTeacher;store.state.editTeacher.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"
      title="Редагувати профіль викладача"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && (store.state.selectedStudents.length > 0 || $route.meta.showNewGrade) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-keyboard-close home-link"
      @click="$route.meta.showNewGrade ? store.dispatch('loadSemesters', store.state.person) : store.dispatch('loadSemesters', store.state.selectedStudents)"
      v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && (store.state.selectedStudents.length > 0 || $route.meta.showNewGrade) && store.state.studyStatus == true"
      title="Додати оцінки"
      ></v-span>
      <new-grade-x ref="newGradeForm"></new-grade-x>
      <v-divider class="mx-2" inset vertical replace v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && (store.state.selectedStudents.length > 0 || $route.meta.showNewGrade) && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-book-plus home-link"
      @click="store.getters.getListOfSubjects;store.state.newSemester.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewStudent && store.state.studyStatus == true"
      title="Додати навчальний семестр"
      ></v-span>
      <new-semester-x ref="newSemesterForm"></new-semester-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
      <v-span
      class="mdi mdi-note-plus-outline home-link"
      @click="store.state.newSubject.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewTeacher"
      title="Додати навчальну дисципліну"
      ></v-span>
      <new-subject-x ref="newSubjectForm"></new-subject-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
      <v-span
      class="mdi mdi-folder-plus home-link"
      @click="store.state.newDepartment.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.directory"
      title="Додати відділення"
      ></v-span>
      <new-department-x ref="newDepartmentForm"></new-department-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>
      <v-span
      class="mdi mdi-credit-card-plus home-link"
      @click="store.state.newSpecialty.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.directory"
      title="Додати спеціальність"
      ></v-span>
      <new-specialty-x ref="newSpecialtyForm"></new-specialty-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && $route.meta.directory"></v-divider>

      <v-spacer></v-spacer>

      <v-divider v-if="store.state.authenticated" class="mx-2" inset vertical replace></v-divider>
      <v-span class="home-link mdi mdi-exit-to-app" v-if="store.state.authenticated" @click="store.dispatch('logoutUser')" title="Вихід" replace></v-span>
      <v-divider class="mx-2" inset vertical></v-divider>
      <div id="full-toggle" class="home-link"><span class="mdi mdi-fullscreen" title="Увімкнути повноекранний режим"></span></div>
    </v-toolbar>
  `
})
const Footer = Vue.component('footer-x', {
  data: () => ({
    created: 2020,
    today: new Date().getFullYear(),
    copyRight: null
  }),
  mounted() {
    if (this.created === this.today) {
      this.copyRight = `${this.created}`
    } else {
      this.copyRight = `${this.created}-${this.today}`
    }
  },
  template: `
  <v-footer height="35" class="d-print-none">
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
              maxlength="30"
              :rules="[store.state.rules.spaces(store.state.newStudent.username),store.state.rules.min(10, store.state.newStudent.username)]"
              v-model="store.state.newStudent.username" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Пароль*"
              maxlength="25"
              :rules="[store.state.rules.spaces(store.state.newStudent.password),store.state.rules.min(10, store.state.newStudent.password)]"
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
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newStudent.lastName),store.state.rules.min(2, store.state.newStudent.lastName)]"
              v-model="store.state.newStudent.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newStudent.firstName),store.state.rules.min(2, store.state.newStudent.firstName)]"
              v-model="store.state.newStudent.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newStudent.surName),store.state.rules.min(2, store.state.newStudent.surName)]"
              v-model="store.state.newStudent.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
              <v-text-field
              label="Номер залікової книжки*"
              maxlength="5"
              :rules="[store.state.rules.spaces(store.state.newStudent.bookNumber),store.state.rules.bookRules(store.state.newStudent.bookNumber),store.state.rules.min(2, store.state.newStudent.bookNumber)]"
              v-model="store.state.newStudent.bookNumber"
              @keydown.native.space.prevent
              @input="store.state.newStudent.bookNumber = store.state.newStudent.bookNumber.toUpperCase()"
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
              maxlength="30"
              :rules="[store.state.rules.spaces(store.state.newTeacher.username),store.state.rules.min(10, store.state.newTeacher.username)]"
              v-model="store.state.newTeacher.username" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Пароль*"
              maxlength="25"
              :rules="[store.state.rules.spaces(store.state.newTeacher.password),store.state.rules.min(10, store.state.newTeacher.password)]"
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
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newTeacher.lastName),store.state.rules.min(2, store.state.newTeacher.lastName)]"
              v-model="store.state.newTeacher.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newTeacher.firstName),store.state.rules.min(2, store.state.newTeacher.firstName)]"
              v-model="store.state.newTeacher.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newTeacher.surName),store.state.rules.min(2, store.state.newTeacher.surName)]"
              v-model="store.state.newTeacher.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Email*"
              maxlength="50"
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
              maxlength="30"
              class="capitalize"
              @keypress.native="$root.validateKey($event)"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.lastName),store.state.rules.min(2, store.state.editStudent.lastName)]"
              v-model="store.state.editStudent.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я"
              maxlength="30"
              class="capitalize"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.firstName),store.state.rules.min(2, store.state.editStudent.firstName)]"
              v-model="store.state.editStudent.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові"
              maxlength="30"
              class="capitalize"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.surName),store.state.rules.min(2, store.state.editStudent.surName)]"
              v-model="store.state.editStudent.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Номер залікової книжки"
              maxlength="5"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.bookNumber),store.state.rules.bookRules(store.state.editStudent.bookNumber),store.state.rules.min(2, store.state.editStudent.bookNumber)]"
              v-model="store.state.editStudent.bookNumber"
              @keydown.native.space.prevent
              @input="store.state.editStudent.bookNumber = store.state.editStudent.bookNumber.toUpperCase()"
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
              maxlength="30"
              class="capitalize"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.lastName),store.state.rules.min(2, store.state.editTeacher.lastName)]"
              v-model="store.state.editTeacher.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я"
              maxlength="30"
              class="capitalize"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.firstName),store.state.rules.min(2, store.state.editTeacher.firstName)]"
              v-model="store.state.editTeacher.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові"
              maxlength="30"
              class="capitalize"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.surName),store.state.rules.min(2, store.state.editTeacher.surName)]"
              v-model="store.state.editTeacher.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Email"
              maxlength="50"
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
  data: () => ({
    teachers: []
  }),
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
              maxlength="100"
              :rules="[store.state.rules.spaces(store.state.newSubject.subject),store.state.rules.min(3, store.state.newSubject.subject)]"
              v-model="store.state.newSubject.subject"
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
  data: () => ({
    items: [],
    subjects: []
  }),
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
    if (currentYear.getMonth() < 6) {
      firstYear = currentYear.getFullYear()-1
      lastYear = currentYear.getFullYear()
    } else {
      firstYear = currentYear.getFullYear()
      lastYear = currentYear.getFullYear()+1
    }
    for (let i = 1; i < 11; i++) {
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
              <v-combobox
                v-model="store.state.newSemester.semester"
                :items="items"
                item-color="teal darken-4"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.semester)]"
                label="Семестр навчального року"
              ></v-combobox>
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
                maxlength="100"
                color="teal darken-4"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                :rules="[store.state.rules.spaces(store.state.newSemester.discipline),store.state.rules.minGroup(1, store.state.newSemester.discipline)]"
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
              max="999"
              onkeypress="if(this.value.length>2&&this.value>2)return false;"
              :rules="[store.state.rules.spaces(store.state.newSemester.hours),store.state.rules.min(1, store.state.newSemester.hours)]"
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
              onkeypress="if(this.value.length>0&&this.value>2)return false;"
              :rules="[store.state.rules.spaces(store.state.newSemester.credits),store.state.rules.min(1, store.state.newSemester.credits)]"
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
              :rules="[store.state.rules.spaces(store.state.newSemester.teacher),store.state.rules.min(10, store.state.newSemester.teacher)]"
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
  data: () => ({
    students: []
  }),
  computed: {
    showDialog() {
      return store.state.newGrade.dialog
    },
    showStudent() {
      return store.state.person
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
    },
    showStudent: {
      handler() {
        this.students = store.state.person
      },
      deep: true,
    }
  },
  template: `
  <v-dialog v-model="store.state.newGrade.dialog" persistent max-width="1000px">
    <v-card id="addGradeForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати оцінки</span>
        <v-btn text class="home-link my-3 btn-hide" title="Згорнути" @click="store.state.newGrade.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
      </v-title>
        <v-container>
        <v-form
          ref="form"
          v-model="store.state.newGrade.valid"
          :lazy-validation="store.state.newGrade.lazy"
          >
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
              <div v-if="store.state.newGrade.disciplines.length === 0 && store.state.newGrade.semester" class="d-flex align-center text-center">
                <p class="text-center">
                  Доступних дисциплін для обраного семестру не знайдено
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="px-1">
              <v-divider class="my-1"></v-divider>
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
                  <tbody v-if="store.state.selectedStudents.length > 0">
                    <tr v-for="(student, index) in store.state.selectedStudents" :key="index">
                      <td><v-divider vertical></v-divider></td>
                      <td class="text-left">{{ student.fullname }}</td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                          <v-text-field
                            v-if="store.state.newGrade.discipline"
                            @keydown.native.space.prevent
                            v-model="store.state.newGrade.scores[index]"
                            single-line
                            type="number"
                            min="1"
                            max="99"
                            onkeypress="if(this.value.length>1&&this.value>2)return false;"
                            :rules="[store.state.rules.spaces(store.state.newGrade.scores[index]),store.state.rules.min(1, store.state.newGrade.scores[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                        <v-select
                          v-if="store.state.newGrade.discipline"
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
                  <tbody v-else>
                    <tr v-for="(student, index) in students" :key="index">
                      <td><v-divider vertical></v-divider></td>
                      <td class="text-left">{{ student.fullname }}</td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                          <v-text-field
                            v-if="store.state.newGrade.discipline"
                            @keydown.native.space.prevent
                            v-model="store.state.newGrade.scores[index]"
                            single-line
                            type="number"
                            min="1"
                            max="99"
                            onkeypress="if(this.value.length>1&&this.value>2)return false;"
                            :rules="[store.state.rules.spaces(store.state.newGrade.scores[index]),store.state.rules.min(1, store.state.newGrade.scores[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                        <v-select
                          v-if="store.state.newGrade.discipline"
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
          </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddDepartmentForm = Vue.component('new-department-x',{
  computed: {
    showDialog() {
      return store.state.newDepartment.dialog
    },
    shortManager() {
      return store.state.newDepartment.manager
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newDepartmentForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newDepartmentForm.$refs.form.resetValidation()
        }
      }
    },
    shortManager: {
      handler: function(val) {
        let manager = val.trim().split(' ')
        if (manager.length > 2) {
          store.state.newDepartment.managerShort = `${manager[0]} ${manager[1].charAt(0)}. ${manager[2].charAt(0)}.`
        } else {
          store.state.newDepartment.managerShort = ''
        }
      },
      deep: true,
    },
  },
  template: `
  <v-dialog v-model="store.state.newDepartment.dialog" persistent max-width="700px">
    <v-card id="addDepartmentForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати відділення</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newDepartment.valid"
            :lazy-validation="store.state.newDepartment.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Назва відділення"
              maxlength="150"
              :rules="[store.state.rules.spaces(store.state.newDepartment.fullName),store.state.rules.min(3, store.state.newDepartment.fullName)]"
              v-model="store.state.newDepartment.fullName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Завідувач відділенням"
              maxlength="50"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newDepartment.manager),store.state.rules.min(3, store.state.newDepartment.manager)]"
              v-model="store.state.newDepartment.manager"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addDepartment', $root.$refs.toolbar.$refs.newDepartmentForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newDepartment.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddSpecialtyForm = Vue.component('new-specialty-x',{
  date: () => ({
    existsDepartments: []
  }),
  computed: {
    showDialog() {
      return store.state.newSpecialty.dialog
    },
    departments() {
      return store.state.departments
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newSpecialtyForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newSpecialtyForm.$refs.form.resetValidation()
        }
      }
    },
    departments: {
      handler() {
        this.existsDepartments = store.getters.getListOfDepartmants
      },
      deep: true,
    }
  },
  template: `
  <v-dialog v-model="store.state.newSpecialty.dialog" persistent max-width="700px">
    <v-card id="addSpecialtyForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати відділення</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newSpecialty.valid"
            :lazy-validation="store.state.newSpecialty.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
             <v-select
              :items="existsDepartments"
              v-if="typeof existsDepartments != 'undefined'"
              v-model="store.state.newSpecialty.department"
              label="Відділення*"
              item-color="teal darken-4"
              color="teal darken-4"
              no-data-text="Не знайдено відповідних записів"
              :rules="[store.state.rules.minGroup(1, store.state.newSpecialty.department)]"
              dense required
             ></v-select>
           </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Назва спеціальності"
              maxlength="150"
              :rules="[store.state.rules.spaces(store.state.newSpecialty.fullName),store.state.rules.min(3, store.state.newSpecialty.fullName)]"
              v-model="store.state.newSpecialty.fullName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Скорочена назва"
              maxlength="5"
              @input="store.state.newSpecialty.shortName = store.state.newSpecialty.shortName.toUpperCase()"
              :rules="[store.state.rules.spaces(store.state.newSpecialty.shortName),store.state.rules.min(1, store.state.newSpecialty.shortName)]"
              v-model="store.state.newSpecialty.shortName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
             <v-select
              :items="['Молодший бакалавр','Бакалавр','Молодший спеціаліст','Магістр','Спеціаліст']"
              v-model="store.state.newSpecialty.degree"
              label="Ступінь освіти*"
              item-color="teal darken-4"
              color="teal darken-4"
              :rules="[store.state.rules.minGroup(1, store.state.newSpecialty.degree)]"
              dense required
             ></v-select>
           </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addSpecialty', $root.$refs.toolbar.$refs.newSpecialtyForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newSpecialty.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const ChangePasswordForm = Vue.component('new-password-x',{
  computed: {
    showDialog() {
      return store.state.changePassword.dialog
    },
    departments() {
      return store.state.departments
    },
    codeWatcher() {
      return [store.state.selectedStudents, store.state.selectedTeachers]
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.changePasswordForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.changePasswordForm.$refs.form.resetValidation()
        }
      }
    },
    codeWatcher: {
      handler() {
        store.state.changePassword.username = ''
        store.state.changePassword.password = ''
        if (store.state.selectedStudents.length > 0) {
          store.state.changePassword.code = store.state.selectedStudents[0].code
        } else if (store.state.selectedTeachers.length > 0) {
          store.state.changePassword.code = store.state.selectedTeachers[0].code
        }
      },
      deep: true,
    }
  },
  template: `
  <v-dialog v-model="store.state.changePassword.dialog" persistent max-width="700px">
    <v-card id="changePasswordForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Змінити дані авторизації</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.changePassword.valid"
            :lazy-validation="store.state.changePassword.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              label="Введіть новий пароль*"
              maxlength="30"
              :rules="[store.state.rules.spaces(store.state.changePassword.password),store.state.rules.min(8, store.state.changePassword.password)]"
              v-model="store.state.changePassword.password"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
          </v-row>
        <v-divider v-if="store.state.changePassword.username && store.state.changePassword.password" class="my-1" replace></v-divider>
        <h3 v-if="store.state.changePassword.username && store.state.changePassword.password" class="text--secondary">Дані для авторизації</h3>
        <v-divider v-if="store.state.changePassword.username && store.state.changePassword.password" class="my-1" replace></v-divider>
        <v-row no-gutters>
          <v-col cols="12" v-if="store.state.changePassword.username && store.state.changePassword.password" class="px-2 py-2">
            <v-text-field
            label="Ім'я користувача"
            maxlength="30"
            v-model="store.state.changePassword.username"
            color="teal darken-4"
            readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" v-if="store.state.changePassword.username && store.state.changePassword.password" class="px-2 py-2">
            <v-text-field
            label="Новий пароль"
            maxlength="30"
            v-model="store.state.changePassword.password"
            color="teal darken-4"
            readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider v-if="store.state.changePassword.username && store.state.changePassword.password" class="my-1" replace></v-divider>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('changePassword', $root.$refs.toolbar.$refs.changePasswordForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.changePassword.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
// The Login Form
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
    form: false
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
// The Home Page
const Home = {
  template: `
  <div class="container text-center mb-3">
    <h1 class="display-2 my-3 text-weight-bold text-uppercase">Flex Grade</h1>
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
// The directory page
const Directory = {
  template: document.getElementById('accordion'),
  data: () => ({
    school: '',
    departments: [],
    specialties: [],
    wasEdited: false,
    editSchool: false,
    editDepartment: false,
    editSpecialty: false,
  }),
  computed: {
    schoolMonitor() {
      return store.state.school
    },
    departmentMonitor() {
      return store.state.departments
    },
    specialtyMonitor() {
      return store.state.specialties
    }
  },
  watch: {
    schoolMonitor: {
      handler() {
        this.school = store.state.school
      },
      deep: true,
    },
    departmentMonitor: {
      handler() {
        this.departments = store.state.departments
      },
      deep: true,
    },
    specialtyMonitor: {
      handler() {
        this.specialties = store.state.specialties
      },
      deep: true,
    },
    'school.director': {
      handler: function(val) {
        let director = val.trim().split(' ')
        if (director.length > 2) {
          this.school.directorShort = `${director[0]} ${director[1].charAt(0)}. ${director[2].charAt(0)}.`
        } else {
          this.school.directorShort = ''
        }
      },
      deep: true,
    },
    'school.assistant': {
      handler: function(val) {
        let assistant = val.trim().split(' ')
        if (assistant.length > 2) {
          this.school.assistantShort = `${assistant[0]} ${assistant[1].charAt(0)}. ${assistant[2].charAt(0)}.`
        } else {
          this.school.assistantShort = ''
        }
      },
      deep: true,
    },
    editSchool: {
      handler() {
        if (this.editSchool == false) {
          this.wasEdited = false
          store.dispatch('getSchool')
        }
      },
      deep: true,
    },
    editDepartment: {
      handler() {
        if (this.editDepartment == false) {
          this.wasEdited = false
          store.dispatch('getDepartments')
        }
      },
      deep: true,
    },
    editSpecialty: {
      handler() {
        if (this.editSpecialty == false) {
          this.wasEdited = false
          store.dispatch('getSpecialties')
        }
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
      store.dispatch('getSchool')
        .then(() => {
          this.school = store.state.school
        })
        store.dispatch('getDepartments')
        .then(() => {
          this.departments = store.state.departments
        })
        store.dispatch('getSpecialties')
        .then(() => {
          this.specialties = store.state.specialties
        })
    }
  },
  methods: {
    shortManager(long) {
      let manager = this.departments.filter(item => item.id == long)
      let short = manager[0].manager.trim().split(' ')
      if (short.length > 2) {
        manager[0].manager_short = `${short[0]} ${short[1].charAt(0)}. ${short[2].charAt(0)}.`
      } else {
        manager[0].manager_short = ''
      }
    },
    saveSchool() {
      if (this.wasEdited) {
        const data = {
          "full_name": this.school.fullName,
          "short_name": this.school.shortName,
          "director": this.school.director,
          "director_short": this.school.directorShort,
          "assistant": this.school.assistant,
          "assistant_short": this.school.assistantShort
        }
        store.dispatch('editSchool', data)
        .then(() => {
          this.wasEdited = false
        })
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    saveDepartment(id) {
      if (this.wasEdited) {
        let changed = this.departments.filter(department => department.id == id)
        const data = {
          "id": changed[0].id,
          "full_name": changed[0].full_name,
          "manager": changed[0].manager,
          "manager_short": changed[0].manager_short,
        }
        store.dispatch('editDepartment', data)
        .then(() => {
          this.wasEdited = false
        })
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    saveSpecialty(id) {
      if (this.wasEdited) {
        let changed = this.specialties.filter(specialty => specialty.id == id)
        const data = {
          "id": changed[0].id,
          "department": changed[0].department_name,
          "full_name": changed[0].full_name,
          "short_name": changed[0].short_name,
          "degree": changed[0].degree,
        }
        store.dispatch('editSpecialty', data)
        .then(() => {
          this.wasEdited = false
        })
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    }
  }
}
// The List Of Students
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
// The More Details About A Student
const StudentsPerson = {
  template: `
  <div class="mx-1 py-2 text-center">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="text-center float-sm-left mr-sm-3 pa-1 mb-2">
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
                         color="teal darken-4"
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
                      <v-btn text v-if="wasEdited == true" large class="home-link my-3" title="Підтвердити" @click="changeAvatar"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
                      <v-spacer></v-spacer>
                      <v-btn text large class="home-link my-3" title="Згорнути" @click="dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
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
              class="mdi mdi-24px mdi-border-color home-link mr-1 d-print-block"
              @click="dialog = true"
              v-if="edit == true"
              title="Змінити фото"
              ></v-span>
            </v-img>
              <span v-if="person.is_active" class="font-weight-bold mb-1">Дата реєстрації:</span> {{ person.registered }}
              <span v-else class="font-weight-bold mb-1">Дата відрахування:</span> {{ person.registered }}
          </div>
          <h2 class="text--secondary">Електронна залікова книжка №: {{ person.book_number }}</h2>
          <h3 class="mb-1">{{ person.fullname }}</h3>
          <v-divider class="my-3"></v-divider>
          <div class="text-justify">
            <span class="font-weight-bold ml-3">Група:</span> {{ person.group_number }}
          </div>
          <v-container class="my-0">
          <v-divider class="my-1"></v-divider>
          <v-row no-gutters class="d-flex align-end justify-center">
            <v-col cols="12" sm="12" md="4" class="text-center py-1">
              <v-sparkline
              v-if="scores"
              :value="scores"
              :labels="labels"
              color="rgba(4, 37, 34, 0.49)"
              smooth="1"
              padding="7"
              label-size="14"
              type="bar"
              class="font-weight-black"
              max-width="calc(100%-30px)"
              auto-line-width
              ></v-sparkline>
              <v-divider v-if="scores.length > 1" class="my-2 mx-2"></v-divider>
              <p class="body-1" v-if="scores.length > 1">
                Загальна успішність
              </p>
            </v-col>
            <v-col cols="12" sm="12" md="8" class="text-center py-1">
              <v-sparkline
              v-if="grades"
              :value="grades"
              :labels="semester"
              color="rgba(4, 37, 34, 0.49)"
              smooth="1"
              padding="7"
              label-size="7"
              type="bar"
              class="font-weight-black"
              max-width="calc(100%-30px)"
              auto-line-width
              ></v-sparkline>
              <v-divider v-if="grades.length > 1" class="my-2 mx-2"></v-divider>
              <p class="body-1" v-if="grades.length > 1">
                Середня успішність за семестр
              </p>
            </v-col>
            </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-divider class="mb-2"></v-divider>
        <v-row no-gutters>
        <v-col cols="12" :sm="(person.is_active && (store.state.status == 'Admin' || store.state.status == 'Teacher')) ? 10 : 12">
          <h3 class="text--secondary">
          Заліки, екзамени, курсові роботи, практики
          </h3>
        </v-col>
        <v-col cols="2" class="d-flex align-center justify-center">
          <v-span
          class="d-none d-sm-flex mdi mdi-24px mdi-printer home-link"
          @click="print"
          v-if="person.is_active && (store.state.status == 'Admin' || store.state.status == 'Teacher') && $route.meta.showNewStudent"
          title="Друк семестрів"
          ></v-span>
        </v-col>
        </v-row>
        <v-divider class="my-2"></v-divider>
      <v-row id="person" no-gutters>
        <v-col cols="12">
          <v-progress-linear
          :active="loading"
          :indeterminate="loading"
          color="teal darken-4"
          height="3"
          ></v-progress-linear>
          <p v-if="!gotData">Не знайдено відповідних записів</p>
            <div v-if="gotData" v-for="(semester, index) in semesters" :key="index" class="mb-5 semester">
                <div class="text-justify">
                  <h5 class="title d-inline ml-5 my-2 text-left">{{ semester.semester }}</h5>
                  <span class="person d-none d-print-inline text-right">{{ person.fullname }}</span>
                </div>
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
                      <th class="d-none d-print-block">Підпис викладача</th>
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
                      <td class="d-none d-print-block"></td>
                      <td><v-divider vertical></v-divider></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <div class="text-justify">
                <span class="updated d-none d-print-inline text-left">Переведений(на) на <u class="underline">_____</u> курс</span>
                <span class="department d-none d-print-inline text-right">Завідувач відділення <u class="underline">__________</u> {{ person.department }}</span>
              </div>
              <v-divider class="my-1"></v-divider>
            </div>
          <v-divider class="mt-3 mb-5"></v-divider>
        </v-col>
      </v-row>
  </div>
  `,
  data: () => ({
    gotData: true,
    person: {},
    semesters: [],
    scores: [],
    labels: [],
    grades: [],
    semester: [],
    loading: true,
    edit: false,
    dialog: false,
    avatar: '',
    wasEdited: false
  }),
  computed: {
    gradeWatcher() {
      return [ store.state.newGrade.grades, store.state.newSemester.update ]
    },
    profileWatcher() {
      return store.state.editStudent.update
    }
  },
  watch: {
    semesters: {
      handler() {
        const grades = []
        let scores = []
        this.scores = []
        this.labels = []
        this.semester = []
        this.grades = []
        const rate = {}
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if (this.semesters) {
          this.semesters.forEach(item => {
            semester = item.semester.split(' ')
            item.grades.forEach( function(val) {
              if (val.grade) {
                grades.push(val.grade)
                scores.push(parseInt(val.score))
              }
            })
            if (scores.length > 0) {
              let amount = scores.reduce(reducer)
              amount = parseInt(amount) / parseInt(scores.length)
              scores = []
              rate[`${semester[0]}`] = parseInt(amount)
            }
          })
          if (grades.length > 0) {
            const trend = compressArray(grades).sort(compareValues('value'))
            trend.forEach(item => {
              this.labels.push(`${item.value} (${item.count})`)
              this.scores.push(item.count)
            })
            for (let [key, value] of Object.entries(rate)) {
              this.semester.push(`${key} (${value})`)
              this.grades.push(value)
            }
          }
        }
      },
      deep: true,
    },
    gradeWatcher: {
      handler() {
        if (store.state.newGrade.update === true || store.state.newSemester.update === true) {
          store.state.newGrade.update = false
          store.state.newSemester.update = false
          this.getData()
            .then(data => {
              this.semesters = data.semesters
              this.loading = false
              if (typeof data.semesters != 'undefined') {
                if (data.semesters.length > 0) {
                  this.gotData = true
                } else {
                  this.gotData = false
                }
              } else {
                this.gotData = false
              }
            })
        }
      }
    },
    profileWatcher: {
      handler() {
        store.state.editStudent.update = false
        this.person = store.state.person[0]
      },
      deep: true,
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
            } else {
              this.gotData = false
            }
          } else {
            this.gotData = false
          }
        })
    }
    goToTop()
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
          '/static/print-person.css'
        ]
      }
      this.$htmlToPaper('person',settings)
    }
  }
}
// The List Of Teachers
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
// The More Details About A Teacher
const TeachersPerson = {
  template: `
  <div class="mx-1 py-2 text-center">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="text-center float-sm-left mr-sm-3 pa-1 mb-2">
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
                       color="teal darken-4"
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
                  <v-btn text v-if="wasEdited == true" large class="home-link my-3" title="Підтвердити" @click="changeAvatar"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text large class="home-link my-3" title="Згорнути" @click="dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
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
        <v-row no-gutters>
          <v-col cols="12">
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
      </v-col>
    </v-row>
    <v-divider class="my-3"></v-divider>
  </div>
  `,
  data: () => ({
    person: {},
    gotData: true,
    subjects: [],
    loading: true,
    edit: false,
    dialog: false,
    avatar: '',
    wasEdited: false
  }),
  computed: {
    subjectWatcher() {
      return store.state.subjects
    },
    profileWatcher() {
      return store.state.editTeacher.update
    }
  },
  watch: {
    subjectWatcher: {
      handler() {
        this.getData()
          .then(data => {
            this.subjects = data.loaded
            this.loading = false
            if (typeof data.loaded != 'undefined') {
              if (data.loaded.length > 0) {
                this.gotData = true
              } else {
                this.gotData = false
              }
            } else {
              this.gotData = false
            }
          })
      },
      deep: true,
    },
    profileWatcher: {
      handler() {
        store.state.editTeacher.update = false
        this.person = store.state.person[0]
      },
      deep: true,
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
            } else {
              this.gotData = false
            }
          } else {
            this.gotData = false
          }
        })
    }
    goToTop()
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
// The Profile Of A User
const Profile = {
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
      this.routeManager()
    }
  },
  methods: {
    routeManager() {
        if (store.state.status === 'Admin') {
          router.replace({
            name: 'home'
          })
        } else if (store.state.status === 'Student') {
          student = JSON.parse(sessionStorage.getItem('profile'))
          router.replace({
            name: 'studentProfile',
            params: {
              'id': student.code,
              'profile': student,
              'edit': student.code
            }
          })
        } else if (store.state.status === 'Teacher') {
          teacher = JSON.parse(sessionStorage.getItem('profile'))
          router.replace({
            name: 'teacherProfile',
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
      path: '/student/:id',
      name: 'student',
      component: StudentsPerson,
      meta: {
        showBack: true,
        showNewStudent: true,
        showNewGrade: true,
        editStudent: true
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
      path: '/teacher/:id',
      name: 'teacher',
      component: TeachersPerson,
      meta: {
        showBack: true,
        showNewTeacher: true,
        editTeacher: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        showBack: true
      }
    },
    {
      name: 'studentProfile',
      path: '/student/:id',
      component: StudentsPerson,
      meta: {
        showBack: true
      }
    },
    {
      name: 'teacherProfile',
      path: '/teacher/:id',
      component: TeachersPerson,
      meta: {
        showBack: true
      }
    },
    {
      name: 'directory',
      path: '/directory',
      component: Directory,
      meta: {
        showBack: true,
        directory: true,
        showNewStudent: true,
        showNewTeacher: true
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
// Vuex store to keep the data in use
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    showSelectedStudents: false,
    showSelectedTeachers: false,
    authenticated: false,
    schoolCode: '',
    changePassword: {
      valid: true,
      lazy: true,
      dialog: false,
      code: '',
      username: '',
      password: ''
    },
    rules: {
      spaces(v) {
        if (v) {
          if (v.trim()) {
            return true
          } else {
            return 'Порожнє поле'
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
      emailRules(v) {
        return v => /.+@.+\..+/.test(v) || 'Email введено некоректно';
      },
      bookRules(v) {
        return v => /.+\-.+/.test(v) || 'Значення введено некоректно';
      },
      minGroup(min, v) {
        return (v || '').length >= min || `Оберіть ${min} значення`;
      }
    },
    school: {
      fullName: '',
      shortName: '',
      director: '',
      directorShort: '',
      assistant: '',
      assistantShort: ''
    },
    departments: [],
    specialties: [],
    person: [],
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
      avatar: '',
      update: false
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
      avatar: '',
      update: false
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
      isFinished: false,
      update: false
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
      grades: [],
      update: false
    },
    newDepartment: {
      valid: true,
      lazy: true,
      dialog: false,
      fullName: '',
      manager: '',
      managerShort: ''
    },
    newSpecialty: {
      valid: true,
      lazy: true,
      dialog: false,
      department: '',
      fullName: '',
      shortName: '',
      degree: ''
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
    getAdmins: ({ commit }) => {
      return new Promise((resolve, reject) => {
        fetch('/api/app/admins/')
          .then(r => r.json())
          .then(response => {
            resolve(commit('GET_ADMINS', response))
          })
      })
    },
    getSchool: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/school/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_SCHOOL', response.school))
            }
          })
      })
    },
    editSchool: ({ commit, state }, data) => {
      let csrftoken = getCookie('csrftoken')
      return new Promise((resolve, reject) => {
        fetch(`/api/app/school/${state.schoolCode}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data)
          })
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_SCHOOL', response.school))
              Notiflix.Notify.Success('Інформацію успішно збережено.')
            }
          })
      })
    },

    getDepartments: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/departments/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_DEPARTMENTS', response.departments))
            }
          })
      })
    },
    addDepartment: ({ commit, state, dispatch }, form) => {
      if (form.validate()) {
        Notiflix.Block.Circle('div#addDepartmentForm', 'Зачекайте, будь ласка ...')
        let data = new FormData()
        data.append('full_name', state.newDepartment.fullName)
        data.append('manager', state.newDepartment.manager)
        data.append('manager_short', state.newDepartment.managerShort)
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch(`/api/app/departments/${state.schoolCode}`, {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
          .then(r => r.json())
          .then(response => {
                Notiflix.Block.Remove('div#addDepartmentForm')
                if (response.success) {
                  dispatch('getDepartments')
                  resolve(commit('GET_DEPARTMENTS', {
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
    editDepartment: ({ commit, state }, data) => {
      let csrftoken = getCookie('csrftoken')
      return new Promise((resolve, reject) => {
        fetch(`/api/app/departments/${state.schoolCode}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data)
          })
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_DEPARTMENTS', response.departments))
              Notiflix.Notify.Success('Інформацію успішно збережено.')
            }
          })
      })
    },

    getSpecialties: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/specialties/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_SPECIALTIES', response.specialties))
            }
          })
      })
    },
    addSpecialty: ({ commit, state, dispatch }, form) => {
      if (form.validate()) {
        Notiflix.Block.Circle('div#addSpecialtyForm', 'Зачекайте, будь ласка ...')
        let data = new FormData()
        data.append('department', state.newSpecialty.department)
        data.append('full_name', state.newSpecialty.fullName)
        data.append('short_name', state.newSpecialty.shortName)
        data.append('degree', state.newSpecialty.degree)
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch(`/api/app/specialties/${state.schoolCode}`, {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
          .then(r => r.json())
          .then(response => {
                Notiflix.Block.Remove('div#addSpecialtyForm')
                if (response.success) {
                  dispatch('getSpecialties')
                  resolve(commit('GET_SPECIALTIES', {
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
    editSpecialty: ({ commit, state }, data) => {
      let csrftoken = getCookie('csrftoken')
      return new Promise((resolve, reject) => {
        fetch(`/api/app/specialties/${state.schoolCode}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(data)
          })
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_SPECIALTIES', response.specialties))
              Notiflix.Notify.Success('Інформацію успішно збережено.')
            }
          })
      })
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
    changePassword: ({ commit, state }) => {
      Notiflix.Confirm.Show(
        'Підтвердіть дію', 'Змінити пароль для обраного користувача?', 'Так', 'Ні',
        function() {
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch(`/api/app/registration/${state.changePassword.code}`, {
                method: 'PUT',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrftoken,
                },
                body: JSON.stringify({'password':state.changePassword.password})
              })
              .then(r => r.json())
              .then(response => {
                if (response.success) {
                  resolve(commit('CHANGE_PASSWORD', response.profile))
                  Notiflix.Notify.Success(response.message)
                } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
                }
              })
          })
        },
        function() {})
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
          fetch(`/api/app/registration/${state.schoolCode}`, {
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
          fetch(`/api/app/registration/${state.schoolCode}`, {
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
                method: 'POST',
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
                method: 'POST',
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
        'Підтвердіть дію', `${state.selectedStudents.length === 1 ? 'Вилучити студента зі списку?' : 'Вилучити студентів зі списку?'}`, 'Так', 'Ні',
        function() {
          let students = []
          state.selectedStudents.forEach(item => {
            students.push(item.code)
          })
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch('/api/app/edit_profile/', {
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
        'Підтвердіть дію', `${state.selectedTeachers.length === 1 ? 'Вилучити викладача зі списку?' : 'Вилучити викладачів зі списку?'}`, 'Так', 'Ні',
        function() {
          let teachers = []
          state.selectedTeachers.forEach(item => {
            teachers.push(item.code)
          })
          let csrftoken = getCookie('csrftoken')
          return new Promise((resolve, reject) => {
            fetch('/api/app/edit_profile/', {
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
    loadStudents: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/students/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('LOAD_STUDENTS', response.students))
            }
          })
      })
    },
    loadTeachers: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/teachers/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('LOAD_TEACHERS', response.teachers))
            }
          })
      })
    },
    checkStatus: ({ commit }, status) => {
      commit('CHECK_STATUS', status)
    },
    loadSubjects: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/subjects/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('LOAD_SUBJECTS', response.subjects))
            }
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
          fetch(`/api/app/subjects/${state.schoolCode}`, {
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
              fetch(`/api/app/semester/${state.schoolCode}`, {
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
        fetch(`/api/app/semester/${code}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('GET_SEMESTERS', response.semesters))
            }
          })
      })
    },
    loadGroups: ({ commit, state }) => {
      return new Promise((resolve, reject) => {
        fetch(`/api/app/groups/${state.schoolCode}`)
          .then(r => r.json())
          .then(response => {
            if (response.success) {
              resolve(commit('LOAD_GROUPS', response.groups))
            }
          })
      })
    },
    loadSemesters: ({ commit, getters }, students) => {
      if (getters.filterGroup) {
        if (getters.filterGroup.length > 0) {
          Notiflix.Notify.Warning('Оцінки можна вносити лише для однієї групи.')
        } else {
          return new Promise((resolve, reject) => {
            fetch(`/api/app/grades/${students[0].code}`)
              .then(r => r.json())
              .then(response => {
                if (response.success) {
                  resolve(commit('LOAD_SEMESTERS', response))
                }
              })
          })
        }
      } else {
        return new Promise((resolve, reject) => {
          fetch(`/api/app/grades/${students[0].code}`)
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
        if (store.state.selectedStudents.length > 0) {
          state.selectedStudents.forEach(student => {
            students.push(student.code)
          })
        } else {
          students.push(state.person[0].code)
        }
        const data = {
          'semester': semester[0].semester,
          'discipline': discipline[0],
          'students': students,
          'scores': state.newGrade.scores,
          'grades': state.newGrade.grades,
        }
        let csrftoken = getCookie('csrftoken')
        return new Promise((resolve, reject) => {
          fetch('/api/app/grades/', {
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
            state.schoolCode = props.response.profile.school
              if (state.status === 'Teacher') {
                  state.showSelectedStudents = true
                  state.showSelectedTeachers = false
              } else {
                  state.showSelectedStudents = false
                  state.showSelectedTeachers = false
              }
            } else if (props.response.status) {
                state.status = props.response.status
                state.schoolCode = props.response.school
                state.showSelectedStudents = true
                state.showSelectedTeachers = true
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
    CHANGE_PASSWORD: (state, profile) => {
      state.changePassword.username = profile.username
    },
    GET_ADMINS: (state, response) => {
      state.admins = response
    },
    GET_SCHOOL: (state, response) => {
      state.school.fullName = response.full_name
      state.school.shortName = response.short_name
      state.school.director = response.director
      state.school.directorShort = response.director_short
      state.school.assistant = response.assistant
      state.school.assistantShort = response.assistant_short
    },
    GET_DEPARTMENTS: (state, props) => {
      if (props.form) {
        state.departments = props.response.departments
        state.newDepartment.fullName = ''
        state.newDepartment.manager = ''
        state.newDepartment.managerShort = ''
        props.form.resetValidation()
        Notiflix.Notify.Success(props.response.message)
      } else {
        state.departments = props
      }
    },
    GET_SPECIALTIES: (state, props) => {
      if (props.form) {
        state.specialties = props.response.specialties
        state.newSpecialty.department = ''
        state.newSpecialty.fullName = ''
        state.newSpecialty.shortName = ''
        state.newSpecialty.degree = ''
        props.form.resetValidation()
        Notiflix.Notify.Success(props.response.message)
      } else {
        state.specialties = props
      }
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
      state.person = []
      state.person.push(props.response.profile)
      state.editStudent.update = true
      state.editStudent.wasEdited = false
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
      state.person = []
      state.person.push(props.response.profile)
      state.editTeacher.update = true
      state.editTeacher.wasEdited = false
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
      state.subjects = props.response.subjects
      props.form.resetValidation()
    },
    ADD_SEMESTER: (state, props) => {
      state.newSemester.form = ''
      state.newSemester.groups = []
      state.newSemester.subjects = []
      state.newSemester.update = true
      props.form.resetValidation()
      Notiflix.Notify.Success(props.response.message)
    },
    ADD_SUBJECT_TO_SEMESTER: (state, form) => {
      let discipline = state.newSemester.discipline.split('^')
        let newDiscipline = {
          'discipline': discipline[1],
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
      state.newGrade.update = true
      state.newGrade.discipline = null
      props.form.resetValidation()
      Notiflix.Notify.Success(props.response.message)
    }
  },
  getters: {
    getStudents: (state) => (studyStatus) => {
      return state.students.filter(student => student.is_active === studyStatus)
    },
    editStudent: (state) => {
      if (state.selectedStudents.length > 0) {
        let fullname = state.selectedStudents[0].fullname.split(' ')
        state.editStudent.code = state.selectedStudents[0].code
        state.editStudent.lastName = fullname[0]
        state.editStudent.firstName = fullname[1]
        state.editStudent.surName = fullname[2]
        state.editStudent.bookNumber = state.selectedStudents[0].book_number
      } else {
        let fullname = state.person[0].fullname.split(' ')
        state.editStudent.code = state.person[0].code
        state.editStudent.lastName = fullname[0]
        state.editStudent.firstName = fullname[1]
        state.editStudent.surName = fullname[2]
        state.editStudent.bookNumber = state.person[0].book_number
        state.editStudent.update = false
      }
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
      if (state.selectedTeachers.length > 0) {
        let fullname = state.selectedTeachers[0].fullname.split(' ')
        state.editTeacher.code = state.selectedTeachers[0].code
        state.editTeacher.lastName = fullname[0]
        state.editTeacher.firstName = fullname[1]
        state.editTeacher.surName = fullname[2]
        state.editTeacher.email = state.selectedTeachers[0].email
      } else {
        let fullname = state.person[0].fullname.split(' ')
        state.editTeacher.code = state.person[0].code
        state.editTeacher.lastName = fullname[0]
        state.editTeacher.firstName = fullname[1]
        state.editTeacher.surName = fullname[2]
        state.editTeacher.email = state.person[0].email
        state.editTeacher.update = false
      }
    },
    getListOfSubjects: (state) => {
      let list = []
      state.subjects.forEach(item => {
        list.push(`${item.pk}^${item.subject}`)
      })
      return list
    },
    getTeacherForSubject: (state) => (chosen) => {
      if (chosen != null) {
        let pk = chosen.split('^')
        let teacher = state.subjects.filter(subject => subject['pk'] == pk[0])
        if (teacher != '') {
          state.newSemester.teacher = teacher[0].teacher_name
        }
      }
    },
    getSubjectsForTeacher: (state) => (fullname) => {
      return state.subjects.filter(subject => subject.teacher_name === fullname)
    },
    checkDiscipline: (state) => {
      return state.newSemester.subjects.filter(subject => subject.discipline === state.newSemester.discipline.split('^')[1])
    },
    filterGroup: (state) => {
      if (state.selectedStudents.length > 0) {
        const group = state.selectedStudents[0].group_number
        return state.selectedStudents.filter(student => student.group_number != group)
      }
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
      if (state.status === 'Admin') {
        semesters[0].disciplines.forEach(semester => {
          state.newGrade.disciplines.push(semester.subject)
        })
      } else {
        const teacher = JSON.parse(sessionStorage.getItem('profile'))
        const subjects = semesters[0].disciplines.filter(subject => subject.teacher === teacher.fullname)
        if (subjects) {
          subjects.forEach(item => {
            state.newGrade.disciplines.push(item.subject)
          })
        }
      }
    },
    getListOfDepartmants: (state) => {
      let list = []
      if(typeof state.departments != 'undefined') {
        state.departments.forEach(item => {
          list.push(item.full_name)
        })
      }
      return list
    }
  }
})
// Main app initialization
Vue.use(VueHtmlToPaper)
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
