export const useClickHandler = (actions, store, render) => {
  actions.forEach(action => {
    document.getElementById(action.id).addEventListener('click', function() {
      store.dispatch({ type: action.type })
    })
  })
  store.subscribe(render)
}
