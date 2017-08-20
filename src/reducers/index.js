/**
 * Created by haruna on 8/7/17.
 */
import { combineReducers } from 'redux'
import items from './items'
import loading from './loading'
import errors from './errors'

const rootReducer = combineReducers({
  items,
  loading,
  errors
})

export default rootReducer