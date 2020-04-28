// @prepros-prepend state.js
// @prepros-prepend actions.js
// @prepros-prepend mutations.js
// @prepros-prepend getters.js

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
