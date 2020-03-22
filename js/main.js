Vue.component('students-list', {
  template: document.getElementById("students-list"),
  data: () => ({
      totalItems: '',
      search: '',
      students: [],
      itemKey: 'guid',
      loading: true,
      page: 1,
      pageCount: 0,
      sortBy: 'name',
      itemsPerPage: 30,
      expanded: [],
      singleExpand: true,
      iconIndex: 4,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
      headers: [{
          text: 'П.І.П.',
          align: 'start',
          value: 'name',
        },
        {
          text: 'Група',
          value: 'group'
        },
        {
          text: 'Спеціальність',
          value: 'specialty'
        },
        {
          text: 'Телефон',
          sortable: false,
          value: 'phone'
        },
        {
          text: 'Дата народження',
          value: 'birth'
        },
        {
          text: 'Вік',
          value: 'age'
        },
        {
          text: '',
          sortable: false,
          value: 'isActive'
        }
      ],
  }),
  computed: {
    icon () {
        return this.icons[this.iconIndex]
      },
  },
  mounted() {
    this.loading = true
    fetch('data/list.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.loading = false,
          this.totalItems = " Загальна кількість студентів: " + data.length,
          data.forEach(item => {
            if(item.isActive === true){
              this.students.push(item);
            }
          })
      });
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    say(message) {
      alert(message)
    },
    changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
  },
})

const Foo = { template: '<div>foo</div>' }

const routes = [
  { path: '/foo', component: Foo },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const app = new Vue({
  vuetify: new Vuetify(),
  router
}).$mount('#app')
