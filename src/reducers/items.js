/**
 * Created by haruna on 8/7/17.
 */

function items (state = [], action) {
  switch(action.type) {
    case 'LOAD_ITEMS':
      return action.items
    case 'ADD_FORM':
      return [
        ...state,
        {
          // Find highest id in list and add 1
          id: action.id,
          text: action.text
        }
      ]
    case 'EDIT_FORM':
      return state.map((item) => {
          if (action.id === item.id) {
            return {...item, text: action.text}
          } else {
            return item
          }
        })
    case 'DELETE_FORM':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default itemsReducer