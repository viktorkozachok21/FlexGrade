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
      <li class="nav-item-x" v-if="store.state.status != 'Admin'">
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
      <li class="nav-item-x" v-if="store.state.status == 'Admin'">
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
  <v-card class="main mb-3" height="70px">
    <v-toolbar class="text-center" flat>
      <v-span v-if="$route.meta.showBack" @click="$router.go(-1)" replace title="Повернутися на крок назад" class="mdi mdi-keyboard-return home-link"></v-span>
      <v-divider v-if="$route.meta.showBack" class="mx-2" inset vertical></v-divider>

      <v-spacer></v-spacer>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-plus-box-outline home-link"
      @click="store.state.newStudent.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewStudent && store.state.studyStatus == true"
      title="Зареєструвати нового студента"
      ></v-span>
      <new-student-x ref="newStudentForm"></new-student-x>
      <v-span
      class="mdi mdi-plus-box-outline home-link"
      @click="store.state.newTeacher.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewTeacher"
      title="Зареєструвати нового викладача"
      ></v-span>
      <new-teacher-x ref="newTeacherForm"></new-teacher-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusStudent')"
      v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"
      title="Виключити студента(ів) зі списку"
      ></v-span>
      <v-span
      class="mdi mdi-account-minus home-link"
      @click="store.dispatch('minusTeacher')"
      v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"
      title="Виключити викладача(ів) зі списку"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length > 0"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length == 1 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length == 1 && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editStudent;store.state.editStudent.dialog = true"
      v-if="store.state.status == 'Admin' && store.state.selectedStudents.length == 1 && store.state.studyStatus == true"
      title="Редагувати профіль"
      ></v-span>
      <edit-student-x ref="editStudentForm"></edit-student-x>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editTeacher;store.state.editTeacher.dialog = true"
      v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length == 1 && store.state.studyStatus == true"
      title="Редагувати профіль"
      ></v-span>
      <edit-teacher-x ref="editTeacherForm"></edit-teacher-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedTeachers.length == 1 && store.state.studyStatus == true"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length == 1 && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-database-plus home-link"
      @click="store.dispatch('loadSemesters', store.state.selectedStudents)"
      v-if="(store.state.status == 'Admin' || store.state.status == 'Teacher') && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"
      title="Внести оцінки"
      ></v-span>
      <new-grade-x ref="newGradeForm"></new-grade-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && store.state.selectedStudents.length > 0 && store.state.studyStatus == true"></v-divider>

      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>
      <v-span
      class="mdi mdi-book-plus home-link"
      @click="store.getters.getListOfSubjects;store.state.newSemester.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewStudent && store.state.studyStatus == true"
      title="Додати новий навчальний семестр"
      ></v-span>
      <new-semester-x ref="newSemesterForm"></new-semester-x>
      <v-span
      class="mdi mdi-note-plus-outline home-link"
      @click="store.state.newSubject.dialog = true"
      v-if="store.state.status == 'Admin' && $route.meta.showNewTeacher"
      title="Додати нову навчальну дисципліну"
      ></v-span>
      <new-subject-x ref="newSubjectForm"></new-subject-x>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && ($route.meta.showNewTeacher || $route.meta.showNewStudent) && store.state.studyStatus == true"></v-divider>

      <v-spacer></v-spacer>

      <v-divider v-if="store.state.authenticated" class="mx-2" inset vertical replace></v-divider>
      <v-span class="home-link mdi mdi-exit-to-app" v-if="store.state.authenticated" @click="store.dispatch('logoutUser')" title="Вийти" replace></v-span>
      <v-divider class="mx-2" inset vertical></v-divider>
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
const AddStudentForm = Vue.component('new-student-x',{
  template: `
  <v-dialog v-model="store.state.newStudent.dialog" persistent max-width="700px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Реєстрація нового користувача (студент)</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-form
            ref="form"
            v-model="store.state.newStudent.valid"
            :lazy-validation="store.state.newStudent.lazy"
            class="my-0 py-0"
            >
          <v-row no-gutters>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Ім'я користувача*"
              :rules="[store.state.rules.min(10, store.state.newStudent.username), store.state.rules.max(30, store.state.newStudent.username)]"
              v-model="store.state.newStudent.username" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Пароль*"
              :rules="[store.state.rules.min(10, store.state.newStudent.password), store.state.rules.max(20, store.state.newStudent.password)]"
              v-model="store.state.newStudent.password" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn class="home-link my-3" @click="store.dispatch('getPassword', store.state.newStudent)">Згенерувати логін та пароль</v-btn>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Прізвище"
              :rules="[store.state.rules.min(2, store.state.newStudent.lastName), store.state.rules.max(50, store.state.newStudent.lastName)]"
              v-model="store.state.newStudent.lastName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Ім'я"
              :rules="[store.state.rules.min(2, store.state.newStudent.firstName), store.state.rules.max(50, store.state.newStudent.firstName)]"
              v-model="store.state.newStudent.firstName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="По батькові"
              :rules="[store.state.rules.min(2, store.state.newStudent.surName), store.state.rules.max(50, store.state.newStudent.surName)]"
              v-model="store.state.newStudent.surName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Номер залікової книжки"
              :rules="[store.state.rules.min(2, store.state.newStudent.bookNumber), store.state.rules.max(15, store.state.newStudent.bookNumber)]"
              v-model="store.state.newStudent.bookNumber"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col class="d-flex px-1" cols="6">
             <v-select
              :items="store.state.groups"
              v-model="store.state.newStudent.group"
              label="Група"
              :rules="[store.state.rules.min(3, store.state.newStudent.group)]"
              dense required
             ></v-select>
           </v-col>
           <v-col class="d-flex px-1" cols="6">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.newStudent.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.newStudent.avatar"
              show-size
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото" required
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('addStudent', $root.$refs.toolbar.$refs.newStudentForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.newStudent.dialog = false">Згорнути</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const EditStudentForm = Vue.component('edit-student-x',{
  template: `
  <v-dialog v-model="store.state.editStudent.dialog" persistent max-width="700px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Редагувати профіль (студент)</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-form
            ref="form"
            v-model="store.state.editStudent.valid"
            :lazy-validation="store.state.editStudent.lazy"
            class="my-0 py-0"
            >
          <v-row no-gutters>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Прізвище"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editStudent.lastName), store.state.rules.max(50, store.state.editStudent.lastName)]"
              v-model="store.state.editStudent.lastName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Ім'я"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editStudent.firstName), store.state.rules.max(50, store.state.editStudent.firstName)]"
              v-model="store.state.editStudent.firstName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="По батькові"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editStudent.surName), store.state.rules.max(50, store.state.editStudent.surName)]"
              v-model="store.state.editStudent.surName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Номер залікової книжки"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editStudent.bookNumber), store.state.rules.max(15, store.state.editStudent.bookNumber)]"
              v-model="store.state.editStudent.bookNumber"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col class="d-flex px-1" cols="6">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.editStudent.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.editStudent.avatar"
              show-size
              @change="store.state.editStudent.wasEdited = true"
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото"
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('editStudent', $root.$refs.toolbar.$refs.editStudentForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.editStudent.dialog = false">Згорнути</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddTeacherForm = Vue.component('new-teacher-x',{
  template: `
  <v-dialog v-model="store.state.newTeacher.dialog" persistent max-width="700px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Реєстрація нового користувача (викладач)</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-form
            ref="form"
            v-model="store.state.newTeacher.valid"
            :lazy-validation="store.state.newTeacher.lazy"
            class="my-0 py-0"
            >
          <v-row no-gutters>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Ім'я користувача*"
              :rules="[store.state.rules.min(10, store.state.newTeacher.username), store.state.rules.max(30, store.state.newTeacher.username)]"
              v-model="store.state.newTeacher.username" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Пароль*"
              :rules="[store.state.rules.min(10, store.state.newTeacher.password), store.state.rules.max(20, store.state.newTeacher.password)]"
              v-model="store.state.newTeacher.password" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn class="home-link my-3" @click="store.dispatch('getPassword', store.state.newTeacher)">Згенерувати логін та пароль</v-btn>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Прізвище"
              :rules="[store.state.rules.min(2, store.state.newTeacher.lastName), store.state.rules.max(50, store.state.newTeacher.lastName)]"
              v-model="store.state.newTeacher.lastName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Ім'я"
              :rules="[store.state.rules.min(2, store.state.newTeacher.firstName), store.state.rules.max(50, store.state.newTeacher.firstName)]"
              v-model="store.state.newTeacher.firstName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="По батькові"
              :rules="[store.state.rules.min(2, store.state.newTeacher.surName), store.state.rules.max(50, store.state.newTeacher.surName)]"
              v-model="store.state.newTeacher.surName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Email"
              :rules="[store.state.rules.min(2, store.state.newTeacher.email), store.state.rules.emailRules(store.state.newTeacher.email)]"
              v-model="store.state.newTeacher.email"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col class="d-flex px-1" cols="6">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.newTeacher.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.newTeacher.avatar"
              show-size
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото" required
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('addTeacher', $root.$refs.toolbar.$refs.newTeacherForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.newTeacher.dialog = false">Згорнути</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const EditTeacherForm = Vue.component('edit-teacher-x',{
  template: `
  <v-dialog v-model="store.state.editTeacher.dialog" persistent max-width="700px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Редагувати профіль (студент)</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-form
            ref="form"
            v-model="store.state.editTeacher.valid"
            :lazy-validation="store.state.editTeacher.lazy"
            class="my-0 py-0"
            >
          <v-row no-gutters>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Прізвище"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editTeacher.lastName), store.state.rules.max(50, store.state.editTeacher.lastName)]"
              v-model="store.state.editTeacher.lastName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Ім'я"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editTeacher.firstName), store.state.rules.max(50, store.state.editTeacher.firstName)]"
              v-model="store.state.editTeacher.firstName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="По батькові"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editTeacher.surName), store.state.rules.max(50, store.state.editTeacher.surName)]"
              v-model="store.state.editTeacher.surName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-text-field
              label="Email"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.min(2, store.state.editTeacher.email), store.state.rules.emailRules(store.state.editTeacher.email)]"
              v-model="store.state.editTeacher.email"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col class="d-flex px-1" cols="6">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.editTeacher.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.editTeacher.avatar"
              show-size
              @change="store.state.editTeacher.wasEdited = true"
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото"
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('editTeacher', $root.$refs.toolbar.$refs.editTeacherForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.editTeacher.dialog = false">Згорнути</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddSubjectForm = Vue.component('new-subject-x',{
  template: `
  <v-dialog v-model="store.state.newSubject.dialog" persistent max-width="700px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Додати нову навчальну дисципліну</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-form
            ref="form"
            v-model="store.state.newSubject.valid"
            :lazy-validation="store.state.newSubject.lazy"
            class="my-0 py-0"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-1">
              <v-text-field
              label="Назва дисципліни"
              :rules="[store.state.rules.min(3, store.state.newSubject.subject), store.state.rules.max(100, store.state.newSubject.subject)]"
              v-model="store.state.newSubject.subject"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="store.state.newSubject.teacher"
                :items="store.getters.getListOfTeachers"
                color="teal darken-4"
                :rules="[store.state.rules.min(10, store.state.newSubject.teacher), store.state.rules.max(100, store.state.newSubject.teacher)]"
                label="Викладач"
              ></v-combobox>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('addSubject', $root.$refs.toolbar.$refs.newSubjectForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.newSubject.dialog = false">Згорнути</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddSemesterForm = Vue.component('new-semester-x',{
  template: `
  <v-dialog v-model="store.state.newSemester.dialog" persistent max-width="1200px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Додати новий навчальний семестр</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-form
            ref="form"
            v-model="store.state.newSemester.valid"
            :lazy-validation="store.state.newSemester.lazy"
            class="my-0 py-0"
            >
          <v-row no-gutters>
            <v-col cols="12">
              <v-combobox
                v-model="store.state.newSemester.semester"
                :items="['1-й семестр 20__/20__ навчального року','2-й семестр 20__/20__ навчального року','3-й семестр 20__/20__ навчального року','4-й семестр 20__/20__ навчального року','5-й семестр 20__/20__ навчального року','6-й семестр 20__/20__ навчального року','7-й семестр 20__/20__ навчального року','8-й семестр 20__/20__ навчального року','9-й семестр 20__/20__ навчального року','10-й семестр 20__/20__ навчального року','11-й семестр 20__/20__ навчального року']"
                color="teal darken-4"
                :rules="[store.state.rules.min(20, store.state.newSemester.semester), store.state.rules.max(50, store.state.newSemester.semester)]"
                label="Семестр навчального року"
              ></v-combobox>
            </v-col>
            <v-col cols="12" class="px-1">
              <v-select
                v-model="store.state.newSemester.groups"
                :items="store.state.groups"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.groups)]"
                label="Групи"
                multiple required
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="3" class="px-1">
              <v-combobox
                v-model="store.state.newSemester.discipline"
                @change="store.getters.getTeacherForSubject(store.state.newSemester.discipline)"
                :items="store.state.newSemester.listOfSubjects"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.discipline), store.state.rules.max(50, store.state.newSemester.discipline)]"
                label="Навчальна дисципліна"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="2" class="px-1">
              <v-select
                v-model="store.state.newSemester.form"
                :items="['Залік','Екзамен','Курсовий проект','Навчальна практика','Виробнича практика','Переддипломна практика']"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.form)]"
                label="Форма"
                required
              ></v-select>
            </v-col>
            <v-col cols="1" class="px-1">
              <v-text-field
              label="Годин"
              type="number"
              min="1"
              max="500"
              :rules="[store.state.rules.min(1, store.state.newSemester.hours), store.state.rules.max(3, store.state.newSemester.hours)]"
              v-model="store.state.newSemester.hours" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="1" class="px-1">
              <v-text-field
              label="Кредитів"
              type="number"
              min="1"
              max="30"
              :rules="[store.state.rules.min(1, store.state.newSemester.credits), store.state.rules.max(5, store.state.newSemester.credits)]"
              v-model="store.state.newSemester.credits" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="px-1">
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
            <v-col cols="3" class="px-1">
              <v-text-field
              label="Викладач"
              :rules="[store.state.rules.min(5, store.state.newSemester.teacher), store.state.rules.max(50, store.state.newSemester.teacher)]"
              v-model="store.state.newSemester.teacher" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-spacer></v-spacer>
              <v-btn class="home-link my-3" @click="store.dispatch('addSubjectToSemester', $root.$refs.toolbar.$refs.newSemesterForm.$refs.form)">Додати</v-btn>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-flex v-if="store.state.newSemester.subjects.length > 0">
            <h2 class="text--secondary">Перелік навчальних дисциплін</h2>
            <v-divider class="my-3"></v-divider>
            <v-row no-gutters v-for="(item, index) in store.state.newSemester.subjects" :key="item.index">
              <v-col cols="1">
                <v-span
                class="mdi mdi-12px mdi-close-outline home-link mr-3"
                @click="store.dispatch('removeSubjectFromSemester', index )"
                title="Вилучити дисципліну"
                ></v-span>
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
              <v-col cols="3" class="text-left">
                {{ item.teacher }}
              </v-col>
            </v-row>
            <v-divider class="my-3"></v-divider>
          </v-flex>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('addSemester', $root.$refs.toolbar.$refs.newSemesterForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.newSemester.dialog = false">Згорнути</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
const AddGradeForm = Vue.component('new-grade-x',{
  template: `
  <v-dialog v-model="store.state.newGrade.dialog" persistent max-width="1000px">
    <v-card class="text-center py-0 my-0">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto">Внести оцінки</span>
      </v-title>
        <v-container class="my-0 py-0">
          <v-row no-gutters>
            <v-col cols="8" class="px-1">
              <v-select
                v-model="store.state.newGrade.semester"
                @change="store.getters.getListOfDiscipline(store.state.newGrade.semester)"
                :items="store.getters.getListOfSemesters"
                color="teal darken-4"
                label="Семестер"
                required
              ></v-select>
            </v-col>
            <v-col cols="4" class="px-1">
              <v-select
                v-if="store.state.newGrade.disciplines.length > 0"
                v-model="store.state.newGrade.discipline"
                :items="store.state.newGrade.disciplines"
                color="teal darken-4"
                label="Навчальна дисципліна"
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-divider class="my-1"></v-divider>
              <v-form
                ref="form"
                v-model="store.state.newGrade.valid"
                :lazy-validation="store.state.newGrade.lazy"
                class="my-0 py-0"
                >
              <v-simple-table>
                <v-divider class="my-1"></v-divider>
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
                            v-if="store.state.newGrade.discipline != ''"
                            v-model="store.state.newGrade.scores[index]"
                            single-line
                            :rules="[store.state.rules.min(1, store.state.newGrade.scores[index]), store.state.rules.max(3, store.state.newGrade.scores[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                          <v-text-field
                            v-if="store.state.newGrade.discipline != ''"
                            v-model="store.state.newGrade.grades[index]"
                            single-line
                            :rules="[store.state.rules.min(1, store.state.newGrade.grades[index]), store.state.rules.max(5, store.state.newGrade.grades[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td><v-divider vertical></v-divider></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              </v-form>
              <v-divider class="my-1"></v-divider>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.dispatch('addGrade', $root.$refs.toolbar.$refs.newGradeForm.$refs.form)">Зареєструвати</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="home-link my-3" @click="store.state.newGrade.dialog = false">Згорнути</v-btn>
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
  <div class="text-center mx-10">
    <h3 class="text--secondary">Авторизація</h3>
    <v-text-field
    hide-details="auto"
    color="teal darken-4"
    maxlength="30"
    hint="Ім'я користувача"
    placeholder="Ім'я користувача"
    single-line
    prepend-inner-icon="mdi-lock-outline"
    v-model="username"
    @keypress.enter="userLogin"
    class="my-5"
    ></v-text-field>
    <v-text-field
    hide-details="auto"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show ? 'text' : 'password'"
    color="teal darken-4"
    counter="30"
    maxlength="30"
    hint="Введіть ваш пароль"
    placeholder="Введіть ваш пароль"
    single-line
    prepend-inner-icon="mdi-lock-outline"
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
      loading: false
    }
  },
  mounted() {
    store.dispatch('checkAuth')
    if (store.state.authenticated) {
        router.replace({
          name: "home"
        })
    }
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
          setTimeout(() => {
            const result = JSON.parse(sessionStorage.getItem("response"))
            if (!result.key) {
              Notiflix.Notify.Failure('Не вдається увійти за допомогою наданих облікових даних.')
            } else if (typeof result.key != 'undefined') {
              sessionStorage.setItem("auth_token", result.key)
              router.replace({
                name: "home"
              })
              Notiflix.Notify.Success('Авторизація пройшла успішно.')
            }
            this.loading = false
          }, 3000)
        } else {
          this.loading = false
          Notiflix.Notify.Warning('Поле "пароль" не може бути порожнім.')
        }
      } else {
        this.loading = false
        Notiflix.Notify.Warning('Введіть ім\'я користувача.')
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
      <span> облік результатів здачі студентом залікової сесії.</span> <br>
      <span class="mdi mdi-account-outline"></span>
      <span class="text--secondary font-weight-black">Розробник:</span>
      <a class="home-link" href="https://www.facebook.com/BeCeJIyH4iK" target="_blank"> Козачок Віктор</a> <br>
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
      <span> {{ admin.fullname }}</span>
      <span class="text--secondary font-weight-black ml-3">Email:</span>
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
      label="Пошук"
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
    show-select
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
  watch: {
    options: {
      handler() {
        this.getData()
          .then(data => {
            this.students = data.result
            this.totalItems = " Загальна кількість студентів: " + data.total;
          })
      },
      deep: true,
    },
  },
  mounted() {
    if (!store.state.authenticated) {
      router.push({
        name: "login"
      });
    } else {
    this.getData()
      .then(data => {
        this.students = data.result
        this.totalItems = " Загальна кількість студентів: " + data.total;
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    store.state.selectedStudents = []
    next()
  },
  methods: {
    getData() {
      this.loading = true
      return new Promise((resolve, reject) => {
        let {
          studyStatus,
          page
          } = this.options
          store.dispatch('checkStatus', studyStatus)
          let result = []
          let total = null
          setTimeout(() => {
            result = store.getters.getStudents(studyStatus)
            total = result.length
          }, 1000)
            setTimeout(() => {
              this.loading = false
              resolve({
                result,
                total
              })
          }, 2000)
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
              class="mdi mdi-36px mdi-border-color home-link mr-1"
              @click="dialog = true"
              v-if="edit == true"
              title="Змінити фото"
              ></v-span>
            </v-img>
              <span class="font-weight-bold mb-1">Дата реєстрації:</span> {{ person.registered }}
          </div>
          <h1 class="text--secondary">Електронна залікова книжка №: {{ person.book_number }}</h1>
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
          <h2 class="text--secondary">
            Заліки, екзамени, курсові роботи, практики
          </h2>
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
              <h4 class="title ml-5 my-3 text-left">{{ semester.semester }}</h4>
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
    this.person = this.$route.params.profile
    if (this.$route.params.edit) {
      this.edit = true
    } else {
      this.edit = false
    }
    this.getData()
    .then(data => {
      this.semesters = data.semesters
      console.log(data.semesters)
      this.loading = false
      if (data.semesters) {
        this.gotData = true
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
        let semesters = []
        store.dispatch('getSemesters', this.$route.params.profile.code)
        setTimeout(function() {
          semesters = store.state.semestersForStudent
          console.log(semesters);
        }, 1000)
        setTimeout(function() {
          resolve({
            semesters,
          })
        }, 2000)
      })
    },
    changeAvatar() {
      if (this.avatar && this.avatar != '') {
        const params = {
          person: this.person.code,
          avatar: this.avatar
        }
        store.dispatch('editPhoto', params)
        this.person.avatar = this.avatar
        this.dialog = false
        setTimeout(function() {
          store.dispatch('checkAuth')
        }, 2000)
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
      label="Пошук"
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
    show-select
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
  watch: {
    options: {
      handler() {
        this.getData()
          .then(data => {
            this.teachers = data.loaded
            this.totalItems = " Загальна кількість викладачів: " + data.total;
          })
      },
      deep: true,
    },
  },
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    } else {
    if (this.$route.params.teacherName != null) {
        this.search = this.$route.params.teacherName
    } else {
        this.search = ''
    }
    this.getData()
      .then(data => {
        this.teachers = data.loaded
        this.totalItems = " Загальна кількість викладачів: " + data.total;
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    store.state.selectedTeachers = []
    next()
  },
  methods: {
    getData() {
      this.loading = true
      return new Promise((resolve, reject) => {
        let loaded = []
        let total = null
        setTimeout(() => {
          loaded = store.state.teachers
          total = loaded.length
        }, 1000)
        setTimeout(() => {
          this.loading = false
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
           class="mdi mdi-36px mdi-border-color home-link mr-1"
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
        <h2 class="text--secondary">Викладає навчальні дисципліни:</h2>
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
      if (data.loaded.length > 0) {
        this.gotData = true
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
        let loaded = []
        setTimeout(function() {
          loaded = store.getters.getSubjectsForTeacher(this.person.fullname)
        }, 1000);
        setTimeout(function() {
          resolve({
            loaded,
          })
        }, 2000)
      })
    },
    changeAvatar() {
      if (this.avatar && this.avatar != '') {
        const params = {
          person: this.person.code,
          avatar: this.avatar
        }
        store.dispatch('editPhoto', params)
        this.person.avatar = this.avatar
        this.dialog = false
        setTimeout(function() {
          store.dispatch('checkAuth')
        }, 2000)
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
    showNotification: false,
    notificationType: 'success',
    notificationMessage: 'test',
    authenticated: false,
    rules: {
      maxFile(v) {
        return v => !v || v.size < 1000000 || 'Розмір фото не повинен перевищувати 1 MB!';
      },
      min(min, v) {
        return (v || '').length >= min || `Значення повинно бути не менше ${min} символ(ів).`;
      },
      max(max, v) {
        return (v || '').length <= max || `Значення не повинно перевищувати ${max} символ(ів).`;
      },
      emailRules(v) {
        return v => /.+@.+\..+/.test(v) || 'E-mail введено некоректно.';
      },
      minGroup(min, v) {
        return (v || '').length >= min || `Потрібно обрати щонайменше ${min} значення.`;
      }
    },
    students: [],
    groups: [],
    teachers: [],
    subjects: [],
    admins: [],
    semestersForStudent: [],
    status: '',
    selectedStudents: [],
    studyStatus: true,
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
      code: ''
    },
    newSemester: {
      valid: true,
      lazy: true,
      dialog: false,
      semester: '1-й семестр 20__/20__ навчального року',
      groups: [],
      listOfSubjects: '',
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
      commit('CHECK_AUTH')
    },
    loginUser: ({ commit }, data) => {
      commit('LOGIN', data)
    },
    logoutUser: ({ commit }) => {
      commit('LOGOUT')
    },
    getPassword: ({ commit }, person) => {
      commit('GET_PASSWORD', person)
    },
    getAdmins: ({ commit }) => {
      commit('GET_ADMINS')
    },
    addStudent: ({ commit }, form) => {
      if (form.validate()) {
      commit('ADD_STUDENT', form)
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    editStudent: ({ commit, state }, form) => {
      if (state.editStudent.wasEdited) {
        if (form.validate()) {
        commit('EDIT_STUDENT', form)
        } else {
          Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
        }
      }
      else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    minusStudent: ({ commit }) => {
      commit('MINUS_STUDENT')
    },
    checkStatus: ({ state }, status) => {
      state.studyStatus = status
    },
    addTeacher: ({ commit }, form) => {
      if (form.validate()) {
        commit('ADD_TEACHER', form)
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    editTeacher: ({ commit, state }, form) => {
      if (state.editTeacher.wasEdited) {
        if (form.validate()) {
        commit('EDIT_TEACHER', form)
        } else {
          Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
        }
      }
      else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    minusTeacher: ({ commit }) => {
      commit('MINUS_TEACHER')
    },
    addSubject: ({ commit, state, getters }, form) => {
      if (form.validate()) {
        state.newSubject.code = getters.getTeacherCode(state.newSubject.teacher)
        commit('ADD_SUBJECT', form)
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    addSemester: ({ commit}, form) => {
      commit('ADD_SEMESTER', form)
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
    loadStudents: ({ commit }) => {
      commit('LOAD_STUDENTS')
    },
    loadTeachers: ({ commit }) => {
      commit('LOAD_TEACHERS')
    },
    loadGroups: ({ commit }) => {
      commit('LOAD_GROUPS')
    },
    loadSubjects: ({ commit }) => {
      commit('LOAD_SUBJECTS')
    },
    getSemesters: ({ commit }, code) => {
      commit('GET_SEMESTERS', code)
    },
    loadSemesters: ({ commit, getters }, students) => {
      if (getters.filterGroup.length > 0) {
        Notiflix.Notify.Warning('Оцінки можна вносити лише для однієї групи.')
      } else {
        commit('LOAD_SEMESTERS', students)
      }
    },
    addGrade: ({ commit, state }, form) => {
      if (state.newGrade.discipline != '' && form.validate()) {
        commit('ADD_GRADE', form)
      } else {
        Notiflix.Notify.Warning('Ви заповнили не всі поля або поля заповнені некоректно.')
      }
    },
    editPhoto: ({ commit }, params) => {
      console.log(params.avatar)
      commit('EDIT_PHOTO', params)
    }
  },
  mutations: {
    CHECK_AUTH: (state) => {
      if (sessionStorage.getItem('auth_token')) {
        state.authenticated = true
        let username = sessionStorage.getItem('username')
        fetch(`../api/app/active_user/${username}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
          .then(r => r.json())
          .then(response => {
            if (response.profile) {
              sessionStorage.removeItem("profile")
              sessionStorage.setItem("profile", JSON.stringify(response.profile))
              state.status = response.profile.status
            } else if (response.status) {
              state.status = response.status
            } else {
              Notiflix.Notify.Failure(response.message)
            }
          })
      } else {
        state.authenticated = false
      }
    },
    LOGIN: (state, data) => {
      let csrftoken = getCookie('csrftoken')
      fetch('../api/auth/login/', {
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
        })
    },
    LOGOUT: (state) => {
      fetch('../api/auth/logout/')
        .then(r => {
          sessionStorage.removeItem("auth_token")
          sessionStorage.removeItem("username")
          state.authenticated = false
          router.replace({name: "login"})
          sessionStorage.removeItem("response")
          sessionStorage.removeItem("profile")
      })
    },
    GET_PASSWORD: (state, person) => {
      fetch('../api/app/registration/')
      .then(r => r.json())
      .then(result => {
        person.username = result.username
        person.password = result.password
      })
    },
    GET_ADMINS: (state) => {
      fetch('../api/app/admins/')
      .then(r => r.json())
      .then(response => {
        state.admins = response
      })
    },
    ADD_STUDENT: (state, form) => {
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
          fetch('../api/app/registration/', {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              if (response.success) {
                store.dispatch('loadStudents')
                state.newStudent.username = ''
                state.newStudent.password = ''
                state.newStudent.firstName = ''
                state.newStudent.lastName = ''
                state.newStudent.surName = ''
                state.newStudent.bookNumber = ''
                state.newStudent.avatar = ''
                form.resetValidation()
                Notiflix.Notify.Success(response.message)
              } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
              }
            })
    },
    EDIT_STUDENT: (state, form) => {
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
          fetch('../api/app/edit_profile/', {
              method: 'PUT',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              if (response.success) {
                store.dispatch('loadStudents')
                state.editStudent.firstName = ''
                state.editStudent.lastName = ''
                state.editStudent.surName = ''
                state.editStudent.bookNumber = ''
                state.editStudent.avatar = ''
                form.resetValidation()
                state.editStudent.dialog = false
                state.selectedStudents = []
                Notiflix.Notify.Success(response.message)
              } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
              }
            })
    },
    MINUS_STUDENT: (state) => {
      Notiflix.Confirm.Show(
        'Підтвердіть дію','Виключити студента(ів) зі списку?','Так','Ні',
      function() {
        let students = []
        state.selectedStudents.forEach(item => {
          students.push(item.code)
        })
        const data = {
          'students': students
        }
        fetch(`../api/app/registration/`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(response => {
          if (response.success) {
            store.dispatch('loadStudents')
            state.selectedStudents = []
            Notiflix.Notify.Success(response.message)
          } else if (!response.success) {
              Notiflix.Notify.Failure(response.message)
          }
        })
      },
      function() {});
    },
    ADD_TEACHER: (state, form) => {
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
          fetch('../api/app/registration/', {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              if (response.success) {
                store.dispatch('loadTeachers')
                state.newTeacher.username = ''
                state.newTeacher.password = ''
                state.newTeacher.firstName = ''
                state.newTeacher.lastName = ''
                state.newTeacher.surName = ''
                state.newTeacher.email = ''
                state.newTeacher.avatar = ''
                form.resetValidation()
                Notiflix.Notify.Success(response.message)
              } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
              }
            })
    },
    EDIT_TEACHER: (state, form) => {
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
          fetch('../api/app/edit_profile/', {
              method: 'PUT',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              if (response.success) {
                store.dispatch('loadTeachers')
                state.editTeacher.firstName = ''
                state.editTeacher.lastName = ''
                state.editTeacher.surName = ''
                state.editTeacher.email = ''
                state.editTeacher.avatar = ''
                form.resetValidation()
                state.editTeacher.dialog = false
                state.selectedStudents = []
                Notiflix.Notify.Success(response.message)
              } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
              }
            })
    },
    MINUS_TEACHER: (state) => {
      Notiflix.Confirm.Show(
        'Підтвердіть дію','Виключити викладача(ів) зі списку?','Так','Ні',
      function() {
        let teachers = []
        state.selectedTeachers.forEach(item => {
          teachers.push(item.code)
        })
        const data = {
          'teachers': teachers
        }
        fetch(`../api/app/registration/`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(response => {
          if (response.success) {
            store.dispatch('loadTeachers')
            state.selectedTeachers = []
            Notiflix.Notify.Success(response.message)
          } else if (!response.success) {
              Notiflix.Notify.Failure(response.message)
          }
        })
      },
      function() {});
    },
    ADD_SUBJECT: (state, form) => {
          let data = new FormData()
          data.append('subject', state.newSubject.subject)
          data.append('teacher', state.newSubject.code)
          let csrftoken = getCookie('csrftoken')
          fetch('../api/app/edit_subject/', {
              method: 'POST',
              headers: {
                'X-CSRFToken': csrftoken,
              },
              body: data
            })
            .then(r => r.json())
            .then(response => {
              if (response.success) {
                Notiflix.Notify.Success(response.message)
                store.dispatch('loadSubjects')
                state.newSubject.subject = ''
                state.newSubject.teacher = ''
                form.resetValidation()
              } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
              }
            })
    },
    ADD_SEMESTER: (state, form) => {
      if (state.newSemester.semester != '') {
        if (state.newSemester.groups.length > 0) {
          if (state.newSemester.subjects.length > 0) {
          const data = {
            'semester': state.newSemester.semester,
            'groups': state.newSemester.groups,
            'disciplines': state.newSemester.subjects
          }
          let csrftoken = getCookie('csrftoken')
          fetch('../api/app/edit_semester/', {
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
              if (response.success) {
                state.newSemester.form = ''
                state.newSemester.groups = []
                state.newSemester.subjects = []
                form.resetValidation()
                Notiflix.Notify.Success(response.message)
              } else if (!response.success) {
                  Notiflix.Notify.Failure(response.message)
              }
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
    LOAD_STUDENTS: (state) => {
      fetch('../api/app/students/')
        .then(r => r.json())
        .then(data => {
          state.students = data
        })
    },
    LOAD_TEACHERS: (state) => {
      fetch('../api/app/teachers/')
        .then(r => r.json())
        .then(data => {
          state.teachers = data
        })
    },
    LOAD_GROUPS: (state) => {
      fetch('../api/app/groups/')
        .then(r => r.json())
        .then(data => {
          data.forEach(item => {
            state.groups.push(item.group)
          });
        })
    },
    LOAD_SUBJECTS: (state) => {
      fetch('../api/app/subjects/')
        .then(r => r.json())
        .then(data => {
          state.subjects = data
        })
    },
    GET_SEMESTERS: (state, code) => {
      fetch(`../api/app/edit_semester/${code}`)
        .then(r => r.json())
        .then(response => {
            state.semestersForStudent = response.semesters
        })
    },
    LOAD_SEMESTERS: (state, students) => {
      fetch(`../api/app/edit_grade/${students[0].code}`)
        .then(r => r.json())
        .then(response => {
          state.newGrade.semesters = []
          state.newGrade.semesters = response.semesters
          state.newGrade.disciplines = []
          state.newGrade.semester = ''
          state.newGrade.discipline = ''
          state.newGrade.dialog = true
        })
    },
    ADD_GRADE: (state, form) => {
      let semester =  state.newGrade.semesters.filter(semester => semester.semester === state.newGrade.semester)
      let discipline =  state.newGrade.disciplines.filter(discipline => discipline === state.newGrade.discipline)
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
      fetch('../api/app/edit_grade/', {
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
          state.newGrade.scores = []
          state.newGrade.grades = []
          Notiflix.Notify.Success(response.message)
          form.resetValidation()
        })
    },
    EDIT_PHOTO: (state, params) => {
      let data = new FormData()
      data.append('person', params.person)
      data.append('avatar', params.avatar)
      let csrftoken = getCookie('csrftoken')
      fetch('../api/app/active_user/', {
          method: 'PUT',
          headers: {
            'X-CSRFToken': csrftoken,
          },
          body: data
        })
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
      state.newSemester.listOfSubjects = list
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
      state.newGrade.semesters.forEach(item => {
        list.push(item.semester)
      })
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
    store.dispatch('checkAuth')
    store.dispatch('getAdmins')
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}).$mount('#app')
