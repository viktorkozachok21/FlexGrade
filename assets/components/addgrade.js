const AddGradeForm = Vue.component('new-grade-x',{
  data: () => ({
    students: []
  }),
  computed: {
    showDialog() {
      return store.state.newGrade.dialog
    },
    showStudent() {
      return store.state.person
    }
  },
  watch: {
    showDialog: {
      handler() {
        if (typeof this.$root.$refs.toolbar.$refs.newGradeForm.$refs.form != 'undefined') {
          store.state.newGrade.scores = []
          store.state.newGrade.grades = []
          this.$root.$refs.toolbar.$refs.newGradeForm.$refs.form.resetValidation()
        }
      }
    },
    showStudent: {
      handler() {
        this.students = store.state.person
      },
      deep: true,
    }
  },
  template: `
  <v-dialog v-model="store.state.newGrade.dialog" persistent max-width="1000px">
    <v-card id="addGradeForm" class="text-center pt-3">
      <v-title class="subtitle-2 text-center">
        <span class="headline mx-auto font-weight-bold teal--text text--darken-4">Додати оцінки</span>
        <v-btn text class="home-link my-3 btn-hide" title="Згорнути" @click="store.state.newGrade.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
      </v-title>
        <v-container>
        <v-form
          ref="form"
          v-model="store.state.newGrade.valid"
          :lazy-validation="store.state.newGrade.lazy"
          >
          <v-row no-gutters>
            <v-col cols="12" sm="8" md="8" class="px-2 py-2">
              <v-select
                v-model="store.state.newGrade.semester"
                @change="store.getters.getListOfDiscipline(store.state.newGrade.semester)"
                :items="store.getters.getListOfSemesters"
                :rules="[store.state.rules.minGroup(1, store.state.newGrade.semester)]"
                color="teal darken-4"
                item-color="teal darken-4"
                no-data-text="Не знайдено відповідних записів"
                label="Семестер"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4" md="4" class="px-2 py-2">
              <v-select
                v-if="store.state.newGrade.disciplines.length > 0"
                v-model="store.state.newGrade.discipline"
                no-data-text="Не знайдено відповідних записів"
                :items="store.state.newGrade.disciplines"
                :rules="[store.state.rules.minGroup(1, store.state.newGrade.discipline)]"
                color="teal darken-4"
                item-color="teal darken-4"
                label="Навчальна дисципліна"
                required
              ></v-select>
              <div v-if="store.state.newGrade.disciplines.length === 0 && store.state.newGrade.semester" class="d-flex align-center text-center">
                <p class="text-center">
                  Доступних дисциплін для обраного семестру не знайдено
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="px-1">
              <v-divider class="my-1"></v-divider>
              <v-simple-table>
                <v-divider class="py-1"></v-divider>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Студент</th>
                      <th></th>
                      <th>Балів</th>
                      <th></th>
                      <th>Оцінка</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody v-if="store.state.selectedStudents.length > 0">
                    <tr v-for="(student, index) in store.state.selectedStudents" :key="index">
                      <td><v-divider vertical></v-divider></td>
                      <td class="text-left">{{ student.fullname }}</td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                          <v-text-field
                            v-if="store.state.newGrade.discipline"
                            @keydown.native.space.prevent
                            v-model="store.state.newGrade.scores[index]"
                            single-line
                            type="number"
                            min="1"
                            max="99"
                            onkeypress="if(this.value.length>1&&this.value>2)return false;"
                            :rules="[store.state.rules.spaces(store.state.newGrade.scores[index]),store.state.rules.min(1, store.state.newGrade.scores[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                        <v-select
                          v-if="store.state.newGrade.discipline"
                          v-model="store.state.newGrade.grades[index]"
                          :items="['5','4','3','2','1','зарах']"
                          :rules="[store.state.rules.minGroup(1, store.state.newGrade.grades[index])]"
                          color="teal darken-4"
                          item-color="teal darken-4"
                        ></v-select>
                      </td>
                      <td><v-divider vertical></v-divider></td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr v-for="(student, index) in students" :key="index">
                      <td><v-divider vertical></v-divider></td>
                      <td class="text-left">{{ student.fullname }}</td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                          <v-text-field
                            v-if="store.state.newGrade.discipline"
                            @keydown.native.space.prevent
                            v-model="store.state.newGrade.scores[index]"
                            single-line
                            type="number"
                            min="1"
                            max="99"
                            onkeypress="if(this.value.length>1&&this.value>2)return false;"
                            :rules="[store.state.rules.spaces(store.state.newGrade.scores[index]),store.state.rules.min(1, store.state.newGrade.scores[index])]"
                            color="teal darken-4"
                          ></v-text-field>
                      </td>
                      <td class="text-center"><v-divider vertical></v-divider></td>
                      <td class="text-center" width="100px">
                        <v-select
                          v-if="store.state.newGrade.discipline"
                          v-model="store.state.newGrade.grades[index]"
                          :items="['5','4','3','2','1','зарах']"
                          :rules="[store.state.rules.minGroup(1, store.state.newGrade.grades[index])]"
                          color="teal darken-4"
                          item-color="teal darken-4"
                        ></v-select>
                      </td>
                      <td><v-divider vertical></v-divider></td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider class="py-1"></v-divider>
            </v-col>
          </v-row>
          <v-card-actions class="my-0 py-0">
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Підтвердити" @click="store.dispatch('addGrade', $root.$refs.toolbar.$refs.newGradeForm.$refs.form)"><span class="mdi mdi-36px mdi-check-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
            <v-btn text large class="home-link my-3" title="Згорнути" @click="store.state.newGrade.dialog = false"><span class="mdi mdi-36px mdi-minus-circle-outline"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          </v-form>
        </v-container>
    </v-card>
  </v-dialog>
  `
})
