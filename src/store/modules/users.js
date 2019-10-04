import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        // eslint-disable-next-line no-console
        .catch(console.error);
    },
  },
};
