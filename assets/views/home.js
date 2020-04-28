const Home = {
  template: `
  <div class="container text-center mb-3">
    <h1 class="display-2 my-5 text-weight-bold text-uppercase">Flex Grade</h1>
    <router-link to="/students" class="mx-1">
      <v-btn class="home-link my-3" width="300" height="55">
        <v-icon icon class="m-auto mr-3">mdi-account-multiple-outline</v-icon>
        <span class="text--secondary m-auto">Студенти</span>
      </v-btn>
    </router-link>
    <router-link to="/teachers" class="mx-1">
      <v-btn class="home-link my-3" width="300" height="55">
        <v-icon class="m-auto mr-3">mdi-account-multiple-outline</v-icon>
        <span class="text--secondary m-auto">Викладачі</span>
      </v-btn>
    </router-link>
  </div>
  `,
  mounted() {
    if (!store.state.authenticated) {
      router.replace({
        name: "login"
      });
    }
  }
}
