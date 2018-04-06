const url = "http://api.openweathermap.org/data/2.5/weather?q=";
const key = "&APPID=1cad821d83d79985ccf382aaa195ade5";

export function getData(cityes) {
    return dispatch => {
      dispatch({
        type: 'LOAD_DATA_REQUESTED'
      });

      let promises = [];
      cityes.forEach(city => {
        let promise = fetch(`${url}${city}${key}`).then(res => res.json())
        promises.push(promise)
      })

      Promise.all([...promises])
      .then(res => {
        dispatch({
          type: 'ADD_DATA',
          data: res
        });
      })
      .catch(err=>{
        dispatch({
          type: 'CATCH_DATA_ERR',
          err: err
        })
      })
    }
  }


export function deleteCity(city) {
    console.log(city)
    return dispatch => {
      dispatch({
        type: 'REMOVE_CITY',
        city: city
      });
      dispatch({
        type:  'DELETE_DATA_ITEM',
        city: city
      });
    }
  }

  export function addCity(city) {
    return dispatch =>{
      dispatch({
        type: 'LOAD_DATA_REQUESTED'
      });
      fetch(`${url}${city}${key}`)
        .then(res =>res.json())
        .then(resp =>{
          let data = [resp]
          dispatch({
            type: 'ADD_DATA',
            data: data
          });
        })
        .catch(err=>{
          dispatch({
            type: 'CATCH_DATA_ERR',
            err: err
          })
        })
      }
    }
