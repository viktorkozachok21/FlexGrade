const Contact = {
  template: `
  <div class="container text-center mb-5 align-center">
    <h2 class="display-2 my-5 text-weight-bold text-uppercase">Flex Grade</h2>
    <div class="text-justify contact-section">
      <span class="mdi mdi-earth"></span>
      <span class="text--secondary font-weight-black">Призначення:</span>
      <span> облік результатів залікової сесії</span> <br>
      <span class="mdi mdi-account-outline"></span>
      <span class="text--secondary font-weight-black">Розробник:</span>
      <a class="home-link" href="https://www.linkedin.com/in/viktorkozachok" target="_blank"> Козачок Віктор</a> <br>
      <span class="mdi mdi-phone"></span>
      <span class="text--secondary font-weight-black">Телефон:</span>
      <span> 096-123-7959</span> <br>
      <span class="mdi mdi-gmail"></span>
      <span class="text--secondary font-weight-black">Email:</span>
      <span> viktorkozachok21@gmail.com</span>
    </div>
    <h3>Адміністратори системи</h3>
    <div class="text-justify contact-section" v-for="admin in store.state.admins">
      <span class="mdi mdi-account-outline"></span>
      <span> {{ admin.fullname }}</span> <br>
      <span class="mdi mdi-gmail"></span>
      <span class="text--secondary font-weight-black">Email:</span>
      <span> {{ admin.email }}</span> <br>
    </div>
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
