const AddDepartmentForm = Vue.component('new-department-x',{
  computed: {
    showDialog() {
      return store.state.newDepartment.dialog
    },
    shortManager() {
      return store.state.newDepartment.manager
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newDepartmentForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newDepartmentForm.$refs.form.resetValidation()
        }
      }
    },
    shortManager: {
      handler: function(val) {
        let manager = val.trim().split(' ')
        if (manager.length > 2) {
          store.state.newDepartment.managerShort = `${manager[0]} ${manager[1].charAt(0)}. ${manager[2].charAt(0)}.`
        } else {
          store.state.newDepartment.managerShort = ''
        }
      },
      deep: true,
    },
  },
  template: `
  <v-dialog v-model="store.state.newDepartment.dialog" persistent max-width="700px">
    <v-card id="addDepartmentForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати відділення</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newDepartment.valid"
            :lazy-validation="store.state.newDepartment.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Назва відділення"
              maxlength="150"
              :rules="[store.state.rules.spaces(store.state.newDepartment.fullName),store.state.rules.min(3, store.state.newDepartment.fullName)]"
              v-model="store.state.newDepartment.fullName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Завідувач відділенням"
              maxlength="50"
              class="capitalize"
              :rules="[store.state.rules.spaces(store.state.newDepartment.manager),store.state.rules.min(3, store.state.newDepartment.manager)]"
              v-model="store.state.newDepartment.manager"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addDepartment', $root.$refs.toolbar.$refs.newDepartmentForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newDepartment.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
