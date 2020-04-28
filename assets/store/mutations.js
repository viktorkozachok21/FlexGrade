const mutations = {
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
}
