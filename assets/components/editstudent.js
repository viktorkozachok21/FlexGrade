const EditStudentForm = Vue.component('edit-student-x',{
  computed: {
    showDialog() {
      return store.state.editStudent.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.editStudentForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.editStudentForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.editStudent.dialog" persistent max-width="700px">
    <v-card id="editStudentForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Редагування профілю</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.editStudent.valid"
            :lazy-validation="store.state.editStudent.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Прізвище"
              maxlength="30"
              class="capitalize"
              @keypress.native="$root.validateKey($event)"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.lastName),store.state.rules.min(2, store.state.editStudent.lastName)]"
              v-model="store.state.editStudent.lastName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Ім'я"
              maxlength="30"
              class="capitalize"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.firstName),store.state.rules.min(2, store.state.editStudent.firstName)]"
              v-model="store.state.editStudent.firstName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="По батькові"
              maxlength="30"
              class="capitalize"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.surName),store.state.rules.min(2, store.state.editStudent.surName)]"
              v-model="store.state.editStudent.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Номер залікової книжки"
              maxlength="5"
              @input="store.state.editStudent.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editStudent.bookNumber),store.state.rules.bookRules(store.state.editStudent.bookNumber),store.state.rules.min(2, store.state.editStudent.bookNumber)]"
              v-model="store.state.editStudent.bookNumber"
              @keydown.native.space.prevent
              @input="store.state.editStudent.bookNumber = store.state.editStudent.bookNumber.toUpperCase()"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.editStudent.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.editStudent.avatar"
              show-size
              @change="store.state.editStudent.wasEdited = true"
              outlined dense
              color="teal darken-4"
              placeholder="Оберіть фото"
              prepend-icon="mdi-camera"
              label="Фото"
           ></v-file-input>
          </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('editStudent', $root.$refs.toolbar.$refs.editStudentForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.editStudent.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
