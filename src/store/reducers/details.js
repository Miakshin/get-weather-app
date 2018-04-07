const initialState = { loading: false, data: {}, errors: null };

const detail = (state = initialState, action) => {
  if(action.type === 'LOAD_DETAIL_DATA_REQUESTED'){
     let newState = Object.assign({},state);
     newState.loading = true;
     return newState

  }else if(action.type === 'LOAD_DETAIL_DATA') {
    let newState = Object.assign({},state);
    newState.loading = false;
    newState.data = Object.assign({},action.data)
    return newState
  }else if(action.type ==='LOAD_DETAIL_ERR'){
    return {loading: true, data: {}, errors: action.err}
  }else{
      return state
  }
}

export default detail
