import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'presist_v0.1',
      paths: ['chain.payForUser', 'market.activeTab', 'theme']
    })(store)

    // Theme management
    if (store.state.theme == 'dark') {
      document.documentElement.classList.add('theme-dark')
    }
  })
}
