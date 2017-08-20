
import { connect } from 'react-redux'
import { deleteForm, loadItems } from '../actions/index'
import CardListsComponent  from '../components/CardLists'

const mapStateToProps = (state) => {
  return ({
    isLoading: state.loading.items,
    items: state.items
  })
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    fetchItems() {
      dispatch(loadItems())
    },

    onDelete(id) {
      dispatch(deleteForm(id))
    }
  }
}

const CardLists = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardListsComponent)

export default CardLists
