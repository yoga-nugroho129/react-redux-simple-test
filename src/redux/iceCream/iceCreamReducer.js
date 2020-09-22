import { BUY_ICECREAM } from './iceCreamTypes'

const initalState = {
  numberOfIceCream: 20
}

const iceCreamReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numberOfIceCream: state.numberOfIceCream - 1
    }

    default: return state
  }
}

export default iceCreamReducer;
