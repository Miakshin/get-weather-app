const initialState = { loading: false, errors: null };

const inputState = (state = initialState, action) => {
  if(action.type === 'INPUT_REQUESTING'){
    return { loading: true, errors: null }
  }else if(action.type === 'INPUT_REQUESTED'){
    return { loading: false, errors: null }
  }else if(action.type === 'INPUT_REQUESTED_ERR'){
    return { loading: false, errors: action.err }
  }else{
    return state
  }
}

export default inputState
