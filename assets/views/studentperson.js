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
