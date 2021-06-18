const initialState = {
  counter: 0,
}
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT': {
      return state
    }
    case 'COUNTER_UP': {
      state.counter += 1
      return state
    }
    case 'COUNTER_DOWN': {
      state.counter--
      return state
    }
    case 'RESET': {
      state.counter = 0
      return state
    }
    default:
      return state
  }
}
