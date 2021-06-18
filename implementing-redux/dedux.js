export default {
  createStore,
  applyMiddleware,
}

function createStore(reducer, initialState) {
  if (typeof reducer !== 'function') {
    throw new Error('Expected reducer to be a function')
  }
  let currentState = initialState
  let listeners = []
  const store = {}
  store.middlewares = []

  store.getState = () => currentState

  store.dispatch = action => {
    if (typeof action !== 'object' || typeof action.type !== 'string')
      throw new Error('Expected action to be of type { type: string, ...any }')
    currentState = reducer(currentState, action)
    for (const listener of listeners) {
      listener(currentState)
    }
  }

  store.subscribe = listener => {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.')
    }
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  store.dispatch({ type: 'INIT' })

  return store
}

function applyMiddleware(store, middlewares) {
  // link up all middlware functions
  const middlewareFunctions = middlewares.map(middleware => middleware(store))
  // set the store dispatch to execute the middlware functions
  store.dispatch = middlewareFunctions.reduce((y, f) => f(y), store.dispatch)
}
