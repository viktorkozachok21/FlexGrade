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
