const getters = {
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
