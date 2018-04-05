
const initialState = { loading: false, data: [], errors: null };

const weatherData = (state = initialState, action) => {
  if(action.type === 'LOAD_DATA_REQUESTED'){
     let newState = Object.assign({},state);
     newState.loading = true;
     return newState

  }else if(action.type === 'ADD_DATA') {
    let newState = Object.assign({},state);
    newState.loading = false
    newState.data = [...state.data, ...action.data]
    return newState

  }else if(action.type === 'REFRESH_DATA_ITEM'){
    let newState = Object.assign({}, state);
    let index = newState.findIndex(item => item.city === action.data.city);
    if(index === -1){
      return state
    }else{
      newState[index] = action.data;
      return newState;
    }

  }else if(action.type === 'DELETE_DATA_ITEM'){
    let newState = Object.assign([], state);
    let index = newState.findIndex(item => item.city === action.city);
    if(index === -1){
      return state
    }else{
      newState.splice(index,1);
      return newState
    }

  }else{
      return state
  }
}

export default weatherData
