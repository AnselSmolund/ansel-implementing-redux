export const loadState = () => {
  const localState = localStorage.getItem('state')
  if (localState === null) {
    return undefined
  }
  return JSON.parse(localState)
}

export const saveState = state => {
  localStorage.setItem('state', JSON.stringify(state))
}
