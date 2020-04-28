const AddStudentForm = Vue.component('new-student-x',{
  computed: {
    showDialog() {
      return store.state.newStudent.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newStudentForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newStudentForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.newStudent.dialog" persistent max-width="700px">
    <v-card id="addStudentForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати студента</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newStudent.valid"
            :lazy-validation="store.state.newStudent.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Ім'я користувача*"
              maxlength="30"
              :rules="[store.state.rules.spaces(store.state.newStudent.username),store.state.rules.min(10, store.state.newStudent.username)]"
              v-model="store.state.newStudent.username" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="10" sm="5" md="5" class="px-2 py-2">
              <v-text-field
              label="Пароль*"
              maxlength="25"
              :rules="[store.state.rules.spaces(store.state.newStudent.password),store.state.rules.min(10, store.state.newStudent.password)]"
              v-model="store.state.newStudent.password" required
              @keydown.native.space.prevent
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn text class="home-link my-3" title="Отримати логін та пароль" @click="store.dispatch('getPassword', store.state.newStudent)"><span class="mdi mdi-24px mdi-account-key"></span></v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Прізвище*"
              maxlength="30"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newStudent.lastName),store.state.rules.min(2, store.state.newStudent.lastName)]"
              v-model="store.state.newStudent.lastName"
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
              :rules="[store.state.rules.spaces(store.state.newStudent.firstName),store.state.rules.min(2, store.state.newStudent.firstName)]"
              v-model="store.state.newStudent.firstName"
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
              :rules="[store.state.rules.spaces(store.state.newStudent.surName),store.state.rules.min(2, store.state.newStudent.surName)]"
              v-model="store.state.newStudent.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
              <v-text-field
              label="Номер залікової книжки*"
              maxlength="5"
              :rules="[store.state.rules.spaces(store.state.newStudent.bookNumber),store.state.rules.bookRules(store.state.newStudent.bookNumber),store.state.rules.min(2, store.state.newStudent.bookNumber)]"
              v-model="store.state.newStudent.bookNumber"
              @keydown.native.space.prevent
              @input="store.state.newStudent.bookNumber = store.state.newStudent.bookNumber.toUpperCase()"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
             <v-select
              :items="store.state.groups"
              v-model="store.state.newStudent.group"
              label="Група*"
              item-color="teal darken-4"
              color="teal darken-4"
              no-data-text="Не знайдено відповідних записів"
              :rules="[store.state.rules.minGroup(1, store.state.newStudent.group)]"
              dense required
             ></v-select>
           </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.newStudent.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.newStudent.avatar"
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
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addStudent', $root.$refs.toolbar.$refs.newStudentForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newStudent.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
