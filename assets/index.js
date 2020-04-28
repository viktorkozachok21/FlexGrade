// @prepros-prepend settings.js
// @prepros-prepend components/index.js
// @prepros-prepend views/index.js
// @prepros-prepend router.js
// @prepros-prepend store/index.js

Vue.use(VueHtmlToPaper)

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  mounted() {
    store.dispatch('getAdmins')
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    validateKey(event) {
        let charCode = (event.which) ? event.which : event.keyCode
        if ((charCode > 32 && charCode < 123) && charCode != 45) {
          event.preventDefault()
        }
        return true
    }
  }
}).$mount('#app')
