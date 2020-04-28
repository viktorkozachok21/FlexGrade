const AddSemesterForm = Vue.component('new-semester-x',{
  data: () => ({
    items: [],
    subjects: []
  }),
  computed: {
    list() {
      return store.state.subjects
    },
    showDialog() {
      return store.state.newSemester.dialog
    }
  },
  watch: {
    list: {
      handler() {
        this.subjects = store.getters.getListOfSubjects
      },
      deep: true,
    },
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newSemesterForm.$refs.form != 'undefined') {
          store.state.newSemester.semester = ''
          store.state.newSemester.groups = []
          this.$root.$refs.toolbar.$refs.newSemesterForm.$refs.form.resetValidation()
        }
      }
    }
  },
  mounted () {
    this.subjects = store.getters.getListOfSubjects
    const currentYear = new Date()
    let { firstYear, lastYear } = 0
    if (currentYear.getMonth() < 6) {
      firstYear = currentYear.getFullYear()-1
      lastYear = currentYear.getFullYear()
    } else {
      firstYear = currentYear.getFullYear()
      lastYear = currentYear.getFullYear()+1
    }
    for (let i = 1; i < 11; i++) {
      this.items.push(`${i}-й семестр ${firstYear}/${lastYear} навчального року`)
    }
  },
  template: `
  <v-dialog v-model="store.state.newSemester.dialog" persistent max-width="1200px">
    <v-card id="addSemesterForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати навчальний семестр</span>
      </v-title>
        <v-container>
          <v-form
            ref="form"
            v-model="store.state.newSemester.valid"
            :lazy-validation="store.state.newSemester.lazy"
            >
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2">
              <v-combobox
                v-model="store.state.newSemester.semester"
                :items="items"
                item-color="teal darken-4"
                color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.semester)]"
                label="Семестр навчального року"
              ></v-combobox>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-select
                v-model="store.state.newSemester.groups"
                @keydown.native.space.prevent
                :items="store.state.groups"
                color="teal darken-4"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.groups)]"
                label="Групи"
                multiple required
              ></v-select>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="3" class="px-2 py-2">
              <v-combobox
                v-model="store.state.newSemester.discipline"
                @change="store.getters.getTeacherForSubject(store.state.newSemester.discipline)"
                :items="subjects"
                maxlength="100"
                color="teal darken-4"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                :rules="[store.state.rules.spaces(store.state.newSemester.discipline),store.state.rules.minGroup(1, store.state.newSemester.discipline)]"
                label="Навчальна дисципліна"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="6" sm="3" md="2" class="px-2 py-2">
              <v-select
                v-model="store.state.newSemester.form"
                :items="['Залік','Екзамен','Курсовий проект','Навчальна практика','Виробнича практика','Переддипломна практика']"
                color="teal darken-4"
                item-color="teal darken-4"
                :rules="[store.state.rules.minGroup(1, store.state.newSemester.form)]"
                label="Форма"
                required
              ></v-select>
            </v-col>
            <v-col cols="3" sm="3" md="1" class="px-2 py-2">
              <v-text-field
              label="Годин"
              @keydown.native.space.prevent
              type="number"
              min="1"
              max="999"
              onkeypress="if(this.value.length>2&&this.value>2)return false;"
              :rules="[store.state.rules.spaces(store.state.newSemester.hours),store.state.rules.min(1, store.state.newSemester.hours)]"
              v-model="store.state.newSemester.hours" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="3" sm="3" md="1" class="px-2 py-2">
              <v-text-field
              label="Кредитів"
              type="number"
              @keydown.native.space.prevent
              min="1"
              max="30"
              onkeypress="if(this.value.length>0&&this.value>2)return false;"
              :rules="[store.state.rules.spaces(store.state.newSemester.credits),store.state.rules.min(1, store.state.newSemester.credits)]"
              v-model="store.state.newSemester.credits" required
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="4" sm="3" md="2" class="px-2 py-2">
              <v-menu
                v-model="store.state.newSemester.menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="200px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="store.state.newSemester.date"
                    label="Дата складання"
                    readonly
                    color="teal darken-4"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                color="teal darken-4"
                v-model="store.state.newSemester.date"
                locale="uk"
                first-day-of-week="1"
                @input="store.state.newSemester.menu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6" sm="3" md="2" class="px-2 py-2">
              <v-text-field
              label="Викладач"
              v-model="store.state.newSemester.teacher"
              :rules="[store.state.rules.spaces(store.state.newSemester.teacher),store.state.rules.min(10, store.state.newSemester.teacher)]"
              readonly
              color="teal darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="2" sm="1" md="1" class="px-2 py-2">
            <v-spacer></v-spacer>
            <v-btn text class="home-link my-3" title="Додати до списку" @click="store.dispatch('addSubjectToSemester', $root.$refs.toolbar.$refs.newSemesterForm.$refs.form)"><span class="mdi mdi-24px mdi-arrow-down-bold-box-outline"></span></v-btn>
            <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-flex v-if="store.state.newSemester.subjects.length > 0">
            <h3 class="font-weight-bold text--secondary">Перелік навчальних дисциплін</h3>
            <v-divider class="my-3"></v-divider>
            <v-row no-gutters v-for="(item, index) in store.state.newSemester.subjects" :key="item.index">
              <v-col cols="1">
                  {{ index+1 }}
              </v-col>
              <v-col cols="3" class="text-left">
                {{ item.discipline }}
              </v-col>
              <v-col cols="1">
                {{ item.form }}
              </v-col>
              <v-col cols="1">
                {{ item.hours }}
              </v-col>
              <v-col cols="1">
                {{ item.credits }}
              </v-col>
              <v-col cols="2">
                {{ item.date }}
              </v-col>
              <v-col cols="2" class="text-left">
                {{ item.teacher }}
              </v-col>
              <v-col cols="1">
              <v-span
              class="mdi mdi-24px mdi-close-outline home-link"
              @click="store.dispatch('removeSubjectFromSemester', index )"
              title="Вилучити зі списку"
              ></v-span>
              </v-col>
            </v-row>
            <v-divider class="my-3"></v-divider>
          </v-flex>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addSemester', $root.$refs.toolbar.$refs.newSemesterForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newSemester.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
