const EditTeacherForm = Vue.component('edit-teacher-x',{
  computed: {
    showDialog() {
      return store.state.editTeacher.dialog
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.editTeacherForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.editTeacherForm.$refs.form.resetValidation()
        }
      }
    }
  },
  template: `
  <v-dialog v-model="store.state.editTeacher.dialog" persistent max-width="700px">
    <v-card id="editTeacherForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Редагування профілю</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.editTeacher.valid"
            :lazy-validation="store.state.editTeacher.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Прізвище"
              maxlength="30"
              class="capitalize"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.lastName),store.state.rules.min(2, store.state.editTeacher.lastName)]"
              v-model="store.state.editTeacher.lastName"
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
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.firstName),store.state.rules.min(2, store.state.editTeacher.firstName)]"
              v-model="store.state.editTeacher.firstName"
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
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.surName),store.state.rules.min(2, store.state.editTeacher.surName)]"
              v-model="store.state.editTeacher.surName"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Email"
              maxlength="50"
              @input="store.state.editTeacher.wasEdited = true"
              :rules="[store.state.rules.spaces(store.state.editTeacher.email),store.state.rules.min(2, store.state.editTeacher.email), store.state.rules.emailRules(store.state.editTeacher.email)]"
              v-model="store.state.editTeacher.email"
              @keydown.native.space.prevent
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
           <v-col cols="12" sm="6" md="6" class="px-2 py-2">
             <v-file-input
              :rules="[store.state.rules.maxFile(store.state.editTeacher.avatar)]"
              accept="image/png, image/jpeg, image/bmp, image/jpg"
              v-model="store.state.editTeacher.avatar"
              show-size
              @change="store.state.editTeacher.wasEdited = true"
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
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('editTeacher', $root.$refs.toolbar.$refs.editTeacherForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.editTeacher.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
