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
