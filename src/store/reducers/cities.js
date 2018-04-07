const initialState = ["Kharkiv", "Kiev", "Lviv", "London"];

const cities = (state = initialState, action) => {
  if(action.type === 'ADD_CITY'){
    return [
      ...state, action.city
    ]
  }else if(action.type === 'REMOVE_CITY'){
    let newState = Object.assign([], state);
    let index = newState.indexOf(action.city)
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

export default cities
