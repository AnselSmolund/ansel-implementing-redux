import Dedux from './dedux.js'
import { useClickHandler } from './hooks/useClickHandler.js'
import { counter } from './reducers/index.js'
import { loadState, saveState } from './util/localStorage.js'
import { counterActions } from './util/constants.js'

const { createStore, applyMiddleware } = Dedux

export const saveStateMiddleware = store => next => action => {
  next(action)
  let state = store.getState()
  saveState(state)
}

const store = createStore(counter, loadState())
applyMiddleware(store, [saveStateMiddleware])

const render = () => {
  document.getElementById('count').innerHTML = store.getState().counter
}
// render on page load to display persisted data
window.addEventListener('DOMContentLoaded', () => {
  render()
  // this hook handles the click logic for the app
  useClickHandler(counterActions, store, render)
})
