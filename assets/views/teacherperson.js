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
