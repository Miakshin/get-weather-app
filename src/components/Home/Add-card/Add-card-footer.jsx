import React from 'react';
import { connect } from 'react-redux';

function AddCardFooter(props){
  if(props.inputState.loading){
    return (
      <footer className="weather-card-create__footer_loading">
        <div > Sending request ... </div>
      </footer>
    )
  }else if(!props.inputState.loading && props.inputState.errors){
    return (
      <footer className="weather-card-create__footer-err">
        <input  type="button" value="Add" className="add-item-bitton" onClick={props.addCity}/>
        <p className="err">This city doesn`t exist</p>
      </footer>
    )
  }else{
    return (
      <footer className="weather-card-create__footer">
        <input  type="button" value="Add" className="add-item-bitton" onClick={props.addCity}/>
      </footer>
    )
  }
}

export default connect(
  state => ({
    inputState: state.inputState,
  })
)(AddCardFooter);
