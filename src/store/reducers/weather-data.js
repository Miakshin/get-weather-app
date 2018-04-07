
const initialState = { loading: false, data: [], errors: null };

const weatherData = (state = initialState, action) => {
  if(action.type === 'LOAD_DATA_REQUESTED'){
     let newState = Object.assign({},state);
     newState.loading = true;
     return newState

  }else if(action.type === 'ADD_DATA') {
    let newState = Object.assign({},state);
    newState.loading = false;
    newState.data = [...state.data, ...action.data]
    return newState

  }else if(action.type === 'ADD_INITIAL_DATA'){
    let newState = Object.assign({},state);
    newState.loading = false;
    newState.data = [...action.data]
    return newState

  }else if(action.type === 'REFRESH_DATA_ITEM'){
    let newState = Object.assign({}, state);
    let index = newState.findIndex(item => item.name === action.data.name);
    if(index === -1){
      return state
    }else{
      newState[index] = [...action.data];
      return newState;
    }

  }else if(action.type === 'DELETE_DATA_ITEM'){
    console.log("helo from weather data")
    let newState = Object.assign([], state);
    let index = newState.data.findIndex(item =>item.name === action.city);
    if(index === -1){
      return state
    }else{
      newState.data.splice(index,1);
      return newState
    }
  }else if(action.type ==='CATCH_DATA_ERR'){
    let newState = Object.assign([], state);
    newState.loading = true;
    newState.errors = action.err
    return newState
  }else{
      return state
  }
}

export default weatherData
