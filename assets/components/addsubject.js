const AddSubjectForm = Vue.component('new-subject-x',{
  data: () => ({
    teachers: []
  }),
  computed: {
    list() {
      return store.state.teachers
    },
    showDialog() {
      return store.state.newSubject.dialog
    }
  },
  watch: {
    list: {
      handler() {
        store.state.newSubject.subject = ''
        store.state.newSubject.teacher = ''
        this.teachers = store.getters.getListOfTeachers
      },
      deep: true,
    },
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newSubjectForm.$refs.form != 'undefined') {
          this.$root.$refs.toolbar.$refs.newSubjectForm.$refs.form.resetValidation()
        }
      }
    }
  },
  mounted() {
    this.teachers = store.getters.getListOfTeachers
  },
  template: `
  <v-dialog v-model="store.state.newSubject.dialog" persistent max-width="700px">
    <v-card id="addSubjectForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати навчальну дисципліну</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newSubject.valid"
            :lazy-validation="store.state.newSubject.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              @keypress.native="$root.validateKey($event)"
              label="Назва дисципліни"
              maxlength="100"
              :rules="[store.state.rules.spaces(store.state.newSubject.subject),store.state.rules.min(3, store.state.newSubject.subject)]"
              v-model="store.state.newSubject.subject"
              color="teal darken-4" required
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-select
                v-model="store.state.newSubject.teacher"
                :items="teachers"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSubject.teacher)]"
                @keydown.native.space.prevent
                label="Викладач"
              ></v-select>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addSubject', $root.$refs.toolbar.$refs.newSubjectForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newSubject.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
