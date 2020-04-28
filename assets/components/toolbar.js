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
      <edit-student-x ref="editStudentForm"></edit-student-x>
      <edit-teacher-x ref="editTeacherForm"></edit-teacher-x>
      <v-span
      class="mdi mdi-account-key home-link"
      @click="store.state.changePassword.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent) && store.state.studyStatus == true"
      title="Змінити дані авторизації"
      ></v-span>
      <new-password-x ref="changePasswordForm"></new-password-x>
      <v-span
      class="mdi mdi-account-edit home-link"
      @click="store.getters.editTeacher;store.state.editTeacher.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher) && store.state.studyStatus == true"
      title="Редагувати профіль викладача"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher)"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher)"></v-divider>
      <v-span
      class="mdi mdi-account-key home-link"
      @click="store.state.changePassword.dialog = true"
      v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher)"
      title="Змінити дані авторизації"
      ></v-span>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedTeachers.length == 1 || $route.meta.editTeacher)"></v-divider>
      <v-divider class="mx-2" inset vertical replace v-if="store.state.status == 'Admin' && (store.state.selectedStudents.length == 1 || $route.meta.editStudent)"></v-divider>

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
