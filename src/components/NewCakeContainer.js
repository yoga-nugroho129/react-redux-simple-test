import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
  const [qty, setQty] = useState(1)

  return (
    <div>
      <h1>Stock of Cake = { props.numberOfCake }</h1>
      <input type="text" value={qty} onChange={e => setQty(e.target.value)}/>
      <button onClick={ () => props.buyCake(qty) } >Buy {qty} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfCake: state.cake.numberOfCake
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: qty => dispatch(buyCake(qty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
