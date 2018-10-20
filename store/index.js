import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      sidebar: false
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
      toggleSidebar(state) {
        state.sidebar = !state.sidebar
      }
    },
    actions: {
      autoSignIn({ commit }, payload) {
        commit('setUser', payload)
      },

      signInWithGoogle({ commit }) {
        return new Promise((resolve, reject) => {
          // auth.signInWithRedirect(GoogleProvider)
          auth.signInWithPopup(GoogleProvider).then(function (result) {
            resolve()
          })
        })
      },

      signOut({ commit }) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(err))
      }
    }
  })
}

export default createStore
