const ChangePasswordForm = Vue.component('new-password-x',{
  computed: {
    showDialog() {
      return store.state.changePassword.dialog
    },
    departments() {
      return store.state.departments
    },
    codeWatcher() {
      return [store.state.selectedStudents, store.state.selectedTeachers]
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.changePasswordForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.changePasswordForm.$refs.form.resetValidation()
        }
      }
    },
    codeWatcher: {
      handler() {
        store.state.changePassword.username = ''
        store.state.changePassword.password = ''
        if (store.state.selectedStudents.length > 0) {
          store.state.changePassword.code = store.state.selectedStudents[0].code
        } else if (store.state.selectedTeachers.length > 0) {
          store.state.changePassword.code = store.state.selectedTeachers[0].code
        }
      },
      deep: true,
    }
  },
  template: `
  <v-dialog v-model="store.state.changePassword.dialog" persistent max-width="700px">
    <v-card id="changePasswordForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Змінити дані авторизації</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.changePassword.valid"
            :lazy-validation="store.state.changePassword.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              label="Введіть новий пароль*"
              maxlength="30"
              :rules="[store.state.rules.spaces(store.state.changePassword.password),store.state.rules.min(8, store.state.changePassword.password)]"
              v-model="store.state.changePassword.password"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
          </v-row>
        <v-divider v-if="store.state.changePassword.username && store.state.changePassword.password" class="my-1" replace></v-divider>
        <h3 v-if="store.state.changePassword.username && store.state.changePassword.password" class="text--secondary">Дані для авторизації</h3>
        <v-divider v-if="store.state.changePassword.username && store.state.changePassword.password" class="my-1" replace></v-divider>
        <v-row no-gutters>
          <v-col cols="12" v-if="store.state.changePassword.username && store.state.changePassword.password" class="px-2 py-2">
            <v-text-field
            label="Ім'я користувача"
            maxlength="30"
            v-model="store.state.changePassword.username"
            color="teal darken-4"
            readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" v-if="store.state.changePassword.username && store.state.changePassword.password" class="px-2 py-2">
            <v-text-field
            label="Новий пароль"
            maxlength="30"
            v-model="store.state.changePassword.password"
            color="teal darken-4"
            readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider v-if="store.state.changePassword.username && store.state.changePassword.password" class="my-1" replace></v-divider>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('changePassword', $root.$refs.toolbar.$refs.changePasswordForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.changePassword.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
