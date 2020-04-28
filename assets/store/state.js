const state = {
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
}
