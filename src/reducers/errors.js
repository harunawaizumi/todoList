/**
 * Created by haruna on 8/7/17.
 */

export default function errorsR(state = [], action) {
  switch(action.type) {
    case 'SHOW_ERROR':
      console.log(action.err)
      return state
    default:
      return state
  }
}
