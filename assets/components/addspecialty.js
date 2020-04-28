const AddSpecialtyForm = Vue.component('new-specialty-x',{
  date: () => ({
    existsDepartments: []
  }),
  computed: {
    showDialog() {
      return store.state.newSpecialty.dialog
    },
    departments() {
      return store.state.departments
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newSpecialtyForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newSpecialtyForm.$refs.form.resetValidation()
        }
      }
    },
    departments: {
      handler() {
        this.existsDepartments = store.getters.getListOfDepartmants
      },
      deep: true,
    }
  },
  template: `
  <v-dialog v-model="store.state.newSpecialty.dialog" persistent max-width="700px">
    <v-card id="addSpecialtyForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати відділення</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newSpecialty.valid"
            :lazy-validation="store.state.newSpecialty.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
             <v-select
              :items="existsDepartments"
              v-if="typeof existsDepartments != 'undefined'"
              v-model="store.state.newSpecialty.department"
              label="Відділення*"
              item-color="teal darken-4"
              color="teal darken-4"
              no-data-text="Не знайдено відповідних записів"
              :rules="[store.state.rules.minGroup(1, store.state.newSpecialty.department)]"
              dense required
             ></v-select>
           </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Назва спеціальності"
              maxlength="150"
              :rules="[store.state.rules.spaces(store.state.newSpecialty.fullName),store.state.rules.min(3, store.state.newSpecialty.fullName)]"
              v-model="store.state.newSpecialty.fullName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Скорочена назва"
              maxlength="5"
              @input="store.state.newSpecialty.shortName = store.state.newSpecialty.shortName.toUpperCase()"
              :rules="[store.state.rules.spaces(store.state.newSpecialty.shortName),store.state.rules.min(1, store.state.newSpecialty.shortName)]"
              v-model="store.state.newSpecialty.shortName"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="px-2 py-2">
             <v-select
              :items="['Молодший бакалавр','Бакалавр','Молодший спеціаліст','Магістр','Спеціаліст']"
              v-model="store.state.newSpecialty.degree"
              label="Ступінь освіти*"
              item-color="teal darken-4"
              color="teal darken-4"
              :rules="[store.state.rules.minGroup(1, store.state.newSpecialty.degree)]"
              dense required
             ></v-select>
           </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addSpecialty', $root.$refs.toolbar.$refs.newSpecialtyForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newSpecialty.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
