const actions = {
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
              sessionStorage.clear()
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
}
