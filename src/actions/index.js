/**
 * Created by haruna on 8/7/17.
 */

import itemsApi from '../apiservice/items'

export function loadItems() {
  return async dispatch => {
    try {
      await dispatch(showLoadingItems(true))
      const items = await itemsApi.getItems()
      await dispatch(loadItemsResponse(items))
    }
    catch (err) {
      await dispatch(showError(err))
    }
    finally {
      await dispatch(showLoadingItems(false))
    }
  }
}

export function loadItemsResponse(items) {
  return {
    type: 'LOAD_ITEMS',
    items
  }
}

export function showLoadingItems(isLoading) {
  return {
    type: 'SHOW_LOADING_ITEMS',
    isLoading
  }
}

export function addFormRequest(text) {
  return async dispatch => {
    try {
      const newId = await itemsApi.addItem({text})
      await dispatch(addFormResponse(newId, text))
    } catch (err) {
      dispatch(showError(err))
    }
  }
}

export function addFormResponse(id, text) {
  return {
    type: 'ADD_FORM',
    id,
    text
  }
}

export function showError(err) {
  return {
    type: 'SHOW_ERROR',
    err
  }
}

export function editForm (id) {
  return {
    type: 'EDIT_FORM',
    id
  }
}

export function deleteForm(id) {
  // to call API, use thunk
  return async dispatch => {
    try {
      await itemsApi.deleteItem(id)
      await dispatch(deleteFormResponse(id))
    } catch (err) {
      dispatch(showError(err))
    }
  }
}

export function deleteFormResponse (id) {
  return {
    type: 'DELETE_FORM',
    id
  }
}