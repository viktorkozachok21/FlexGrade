const Directory = {
  template: `
<div>
<v-expansion-panels focusable>
  <v-expansion-panel>
    <v-expansion-panel-header expand-icon="mdi-chart-timeline">
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <v-col cols="4"><h5 class="title">Загальна інформація<h5/></v-col>
        </v-row>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row no-gutters v-if="store.state.status === 'Admin'">
        <v-col cols="3" class="d-flex justify-center align-center">
          <div :title="editSchool ? 'Вимкнути редагування' : 'Ввімкнути редагування'">
            <v-switch
            v-model="editSchool"
            flat
            dense
            color="teal darken-4"
            ></v-switch>
          </div>
          <v-btn text v-if="editSchool" class="home-link my-3" title="Зберегти зміни" @click="saveSchool"><span class="mdi mdi-36px mdi-content-save"></span></v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" class="px-2 py-2">
          <v-text-field
          v-if="store.state.status === 'Admin'"
          label="Повна назва"
          maxlength="250"
          :rules="[store.state.rules.spaces(school.fullName),store.state.rules.min(10, school.fullName)]"
          v-model="school.fullName"
          @input="wasEdited = true"
          color="teal darken-4"
          :readonly="!editSchool"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-2 py-2">
          <v-text-field
          :label="store.state.status === 'Admin' ? 'Скорочена назва' : 'Назва закладу освіти'"
          maxlength="100"
          :rules="[store.state.rules.spaces(school.shortName),store.state.rules.min(3, school.shortName)]"
          v-model="school.shortName"
          @input="wasEdited = true"
          color="teal darken-4"
          :readonly="!editSchool"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-2 py-2">
          <v-text-field
          label="Директор"
          maxlength="50"
          :rules="[store.state.rules.spaces(school.director),store.state.rules.min(3, school.director)]"
          v-model="school.director"
          @input="wasEdited = true"
          color="teal darken-4"
          class="capitalize"
          :readonly="!editSchool"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-2 py-2" v-if="store.state.status === 'Admin'">
          <v-text-field
          maxlength="30"
          :rules="[store.state.rules.spaces(school.directorShort),store.state.rules.min(3, school.directorShort)]"
          v-model="school.directorShort"
          color="teal darken-4"
          class="capitalize"
          readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-2 py-2">
          <v-text-field
          label="Заступник директора з навчальної роботи"
          maxlength="50"
          :rules="[store.state.rules.spaces(school.assistant),store.state.rules.min(3, school.assistant)]"
          v-model="school.assistant"
          @input="wasEdited = true"
          color="teal darken-4"
          class="capitalize"
          :readonly="!editSchool"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3" class="px-2 py-2" v-if="store.state.status === 'Admin'">
          <v-text-field
          maxlength="30"
          :rules="[store.state.rules.spaces(school.assistantShort),store.state.rules.min(3, school.assistantShort)]"
          v-model="school.assistantShort"
          color="teal darken-4"
          class="capitalize"
          readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>

  <v-expansion-panel>
    <v-expansion-panel-header expand-icon="mdi-chart-timeline" class="mb-3">
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <v-col cols="4"><h5 class="title">Відділення<h5/></v-col>
        </v-row>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-expansion-panels focusable>
      <v-expansion-panel
        v-for="item in departments"
        :key="item.id"
      >
      <v-expansion-panel-header disable-icon-rotate expand-icon="mdi-folder-outline">
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="10"><h5 class="title">{{ item.full_name }}<h5/></v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters>
            <v-col cols="12" class="px-2 py-2" v-if="store.state.status === 'Admin'">
              <v-text-field
              label="Назва відділення"
              maxlength="150"
              :rules="[store.state.rules.spaces(item.full_name),store.state.rules.min(10, item.full_name)]"
              v-model="item.full_name"
              @input="wasEdited = true"
              color="teal darken-4"
              :readonly="!editDepartment"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="px-2 py-2">
              <v-text-field
              label="Завідувач відділенням"
              maxlength="50"
              :rules="[store.state.rules.spaces(item.manager),store.state.rules.min(3, item.manager)]"
              v-model="item.manager"
              @input="wasEdited = true;shortManager(item.id)"
              color="teal darken-4"
              class="capitalize"
              :readonly="!editDepartment"
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="3" class="px-2 py-2" v-if="store.state.status === 'Admin'">
              <v-text-field
              maxlength="30"
              :rules="[store.state.rules.spaces(item.manager_short),store.state.rules.min(3, item.manager_short)]"
              v-model="item.manager_short"
              color="teal darken-4"
              class="capitalize"
              readonly
              ></v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="3" class="d-flex justify-center align-center" v-if="store.state.status === 'Admin'">
              <div :title="editDepartment ? 'Вимкнути редагування' : 'Ввімкнути редагування'">
                <v-switch
                v-model="editDepartment"
                flat
                dense
                color="teal darken-4"
                ></v-switch>
              </div>
              <v-btn text v-if="editDepartment" class="home-link my-3" title="Зберегти зміни" @click="saveDepartment(item.id)"><span class="mdi mdi-36px mdi-content-save"></span></v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-expansion-panel-content>
  </v-expansion-panel>

  <v-expansion-panel>
    <v-expansion-panel-header expand-icon="mdi-chart-timeline" class="mb-3">
      <template v-slot:default="{ open }">
        <v-row no-gutters>
          <v-col cols="4"><h5 class="title">Спеціальності<h5/></v-col>
        </v-row>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-expansion-panels focusable>
      <v-expansion-panel
        v-for="item in specialties"
        :key="item.id"
      >
      <v-expansion-panel-header disable-icon-rotate expand-icon="mdi-credit-card-multiple">
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="10"><h5 class="title">{{ item.full_name }} ({{ item.degree }})<h5/></v-col>
          </v-row>
        </template>
      </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row no-gutters v-if="store.state.status === 'Admin'">
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              label="Назва спеціальності"
              maxlength="150"
              :rules="[store.state.rules.spaces(item.full_name),store.state.rules.min(10, item.full_name)]"
              v-model="item.full_name"
              @input="wasEdited = true"
              color="teal darken-4"
              :readonly="!editSpecialty"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="px-2 py-2">
              <v-select
               :items="store.getters.getListOfDepartmants"
               label="Відділення"
               item-color="teal darken-4"
               v-model="item.department_name"
               @change="wasEdited = true"
               color="teal darken-4"
               :readonly="!editSpecialty"
               :rules="[store.state.rules.minGroup(1, item.department_name)]"
               dense required
              ></v-select>
            </v-col>
            <v-col cols="3"class="px-2 py-2">
              <v-text-field
              label="Скорочена назва"
              maxlength="5"
              :rules="[store.state.rules.spaces(item.short_name),store.state.rules.min(1, item.short_name)]"
              v-model="item.short_name"
              @input="wasEdited = true;item.short_name = item.short_name.toUpperCase()"
              color="teal darken-4"
              :readonly="!editSpecialty"
              ></v-text-field>
            </v-col>
            <v-col cols="9" sm="6" md="6" class="px-2 py-2">
              <v-select
                v-if="store.state.status === 'Admin'"
               :items="['Молодший бакалавр','Бакалавр','Молодший спеціаліст','Магістр','Спеціаліст']"
               label="Ступінь освіти"
               item-color="teal darken-4"
               v-model="item.degree"
               @change="wasEdited = true"
               color="teal darken-4"
               :readonly="!editSpecialty"
               :rules="[store.state.rules.minGroup(1, item.degree)]"
               dense required
              ></v-select>
            </v-col>
            <v-col cols="6" sm="3" md="3" class="d-flex justify-center align-center" v-if="store.state.status === 'Admin'">
              <div :title="editSpecialty ? 'Вимкнути редагування' : 'Ввімкнути редагування'">
                <v-switch
                v-model="editSpecialty"
                flat
                dense
                color="teal darken-4"
                ></v-switch>
              </div>
              <v-btn text v-if="editSpecialty" class="home-link my-3" title="Зберегти зміни" @click="saveSpecialty(item.id)"><span class="mdi mdi-36px mdi-content-save"></span></v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters v-else>
            <v-col cols="12" class="px-2 py-2">
              <v-text-field
              label="Відділення"
              v-model="item.department_name"
              color="teal darken-4"
              readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-expansion-panel-content>
  </v-expansion-panel>

</v-expansion-panels>
</div>
  `,
  data: () => ({
    school: '',
    departments: [],
    specialties: [],
    wasEdited: false,
    editSchool: false,
    editDepartment: false,
    editSpecialty: false,
  }),
  computed: {
    schoolMonitor() {
      return store.state.school
    },
    departmentMonitor() {
      return store.state.departments
    },
    specialtyMonitor() {
      return store.state.specialties
    }
  },
  watch: {
    schoolMonitor: {
      handler() {
        this.school = store.state.school
      },
      deep: true,
    },
    departmentMonitor: {
      handler() {
        this.departments = store.state.departments
      },
      deep: true,
    },
    specialtyMonitor: {
      handler() {
        this.specialties = store.state.specialties
      },
      deep: true,
    },
    'school.director': {
      handler: function(val) {
        let director = val.trim().split(' ')
        if (director.length > 2) {
          this.school.directorShort = `${director[0]} ${director[1].charAt(0)}. ${director[2].charAt(0)}.`
        } else {
          this.school.directorShort = ''
        }
      },
      deep: true,
    },
    'school.assistant': {
      handler: function(val) {
        let assistant = val.trim().split(' ')
        if (assistant.length > 2) {
          this.school.assistantShort = `${assistant[0]} ${assistant[1].charAt(0)}. ${assistant[2].charAt(0)}.`
        } else {
          this.school.assistantShort = ''
        }
      },
      deep: true,
    },
    editSchool: {
      handler() {
        if (this.editSchool == false) {
          this.wasEdited = false
          store.dispatch('getSchool')
        }
      },
      deep: true,
    },
    editDepartment: {
      handler() {
        if (this.editDepartment == false) {
          this.wasEdited = false
          store.dispatch('getDepartments')
        }
      },
      deep: true,
    },
    editSpecialty: {
      handler() {
        if (this.editSpecialty == false) {
          this.wasEdited = false
          store.dispatch('getSpecialties')
        }
      },
      deep: true,
    }
  },
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      })
    } else {
      store.dispatch('getSchool')
        .then(() => {
          this.school = store.state.school
        })
        store.dispatch('getDepartments')
        .then(() => {
          this.departments = store.state.departments
        })
        store.dispatch('getSpecialties')
        .then(() => {
          this.specialties = store.state.specialties
        })
    }
  },
  methods: {
    shortManager(long) {
      let manager = this.departments.filter(item => item.id == long)
      let short = manager[0].manager.trim().split(' ')
      if (short.length > 2) {
        manager[0].manager_short = `${short[0]} ${short[1].charAt(0)}. ${short[2].charAt(0)}.`
      } else {
        manager[0].manager_short = ''
      }
    },
    saveSchool() {
      if (this.wasEdited) {
        const data = {
          "full_name": this.school.fullName,
          "short_name": this.school.shortName,
          "director": this.school.director,
          "director_short": this.school.directorShort,
          "assistant": this.school.assistant,
          "assistant_short": this.school.assistantShort
        }
        store.dispatch('editSchool', data)
        .then(() => {
          this.wasEdited = false
        })
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    saveDepartment(id) {
      if (this.wasEdited) {
        let changed = this.departments.filter(department => department.id == id)
        const data = {
          "id": changed[0].id,
          "full_name": changed[0].full_name,
          "manager": changed[0].manager,
          "manager_short": changed[0].manager_short,
        }
        store.dispatch('editDepartment', data)
        .then(() => {
          this.wasEdited = false
        })
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    },
    saveSpecialty(id) {
      if (this.wasEdited) {
        let changed = this.specialties.filter(specialty => specialty.id == id)
        const data = {
          "id": changed[0].id,
          "department": changed[0].department_name,
          "full_name": changed[0].full_name,
          "short_name": changed[0].short_name,
          "degree": changed[0].degree,
        }
        store.dispatch('editSpecialty', data)
        .then(() => {
          this.wasEdited = false
        })
      } else {
        Notiflix.Notify.Info('Змін не виявлено.')
      }
    }
  }
}
