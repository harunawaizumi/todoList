/**
 * Created by haruna on 8/8/17.
 */

import React, { Component } from 'react'
import CardLists from '../containers/CardLists'
import PersonalForm from './NewCardAdder'

const containerStyle = {
  padding: 40,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  width: 500,
}


export default class CardField extends Component {
  render () {
    // この時点でitemsのデータが読み込めないのがおかしい
    return (
      <section style={containerStyle}>
        <PersonalForm/>
        <CardLists />
      </section>
    )
  }
}