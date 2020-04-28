const AddTeacherForm = Vue.component('new-teacher-x',{
  computed: {
    showDialog() {
      return store.state.newTeacher.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newTeacherForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newTeacherForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.newTeacher.dialog" persistent max-width="700px">
    <v-card id="addTeacherForm" class="text-center pt-3">
    <v-title class="subtitle-2 text-center">
      <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати викладача</span>
    </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newTeacher.valid"
            :lazy-validation="store.state.newTeacher.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Ім'я користувача*"
              maxlength="30"
              :rules="[store.state.rules.spaces(store.state.newTeacher.username),store.state.rules.min(10, store.state.newTeacher.username)]"
              v-model="store.state.newTeacher.username" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Пароль*"
              maxlength="25"
              :rules="[store.state.rules.spaces(store.state.newTeacher.password),store.state.rules.min(10, store.state.newTeacher.password)]"
              v-model="store.state.newTeacher.password" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn text class="home-link my-3" title="Отримати логін та пароль" @click="store.dispatch('getPassword', store.state.newTeacher)"><span class="mdi mdi-24px mdi-account-key"></span></v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Прізвище*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newTeacher.lastName),store.state.rules.min(2, store.state.newTeacher.lastName)]"
              v-model="store.state.newTeacher.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newTeacher.firstName),store.state.rules.min(2, store.state.newTeacher.firstName)]"
              v-model="store.state.newTeacher.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newTeacher.surName),store.state.rules.min(2, store.state.newTeacher.surName)]"
              v-model="store.state.newTeacher.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Email*"
              maxlength="50"
              :rules="[store.state.rules.spaces(store.state.newTeacher.email),store.state.rules.min(2, store.state.newTeacher.email), store.state.rules.emailRules(store.state.newTeacher.email)]"
              v-model="store.state.newTeacher.email"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.newTeacher.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.newTeacher.avatar"
              show-size
              color="teal darken-4"
              outlined dense
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото" required
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addTeacher', $root.$refs.toolbar.$refs.newTeacherForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newTeacher.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
