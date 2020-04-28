const Footer = Vue.component('footer-x', {
  data: () => ({
    created: 2020,
    today: new Date().getFullYear(),
    copyRight: null
  }),
  mounted() {
    if (this.created === this.today) {
      this.copyRight = `${this.created}`
    } else {
      this.copyRight = `${this.created}-${this.today}`
    }
  },
  template: `
  <v-footer height="35" class="d-print-none">
    <p class="caption mb-0">&copy; {{ copyRight }} <span class="caption font-weight-black">Flex Grade</span></p>
    <a class="subtitle-2 mb-0 mr-3 home-link" href="https://www.linkedin.com/in/viktorkozachok" target="_blank" title="Developer">
      <span class="mdi mdi-linkedin"></span>
    </a>
  </v-footer>
  `
})
