const defaultState = {
  items: false,
}

export default function loading (state = {...defaultState}, action) {
  switch(action.type) {
    case 'SHOW_LOADING_ITEMS':
      return {
        ...state,
        items: action.isLoading
      }
    default:
      return state
  }
}
