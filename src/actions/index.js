import axios from 'axios';

const url = "http://api.openweathermap.org/data/2.5/weather?q=";
const key = "&APPID=1cad821d83d79985ccf382aaa195ade5";

export function getData(cityes) {
    return dispatch => {
      dispatch({
        type: 'LOAD_DATA_REQUESTED'
      });

      let promises = [];
      cityes.forEach(city => {
        let promise = axios.get(`${url}${city}${key}`).then(res=> res.data)
        promises.push(promise)
      })

      Promise.all([...promises])
      .then(res => {
        dispatch({
          type: 'ADD_INITIAL_DATA',
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
        type: 'INPUT_REQUESTING'
      });
      axios.get(`${url}${city}${key}`)
        .then(res =>{
          let data = [res.data]
          dispatch({
            type: 'ADD_DATA',
            data: data
          });
        })
        .then(()=>{
          dispatch({
            type: 'ADD_CITY',
            city: city
          })
          dispatch({
            type: "INPUT_REQUESTED"
          })
        })
        .catch(err=>{
          dispatch({
            type: 'INPUT_REQUESTED_ERR',
            err: err
          })
        })
      }
    }

      export function refreshCity(city) {
        return dispatch =>{
          dispatch({
            type: 'LOAD_DATA_REQUESTED'
          });
          axios.get(`${url}${city}${key}`)
            .then(res =>{
              let data = [res.data]
              dispatch({
                type: 'REFRESH_DATA_ITEM',
                data: data,
                city: city
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

    export function getDetailData(city){
      return dispatch =>{
        dispatch({
          type: 'LOAD_DETAIL_DATA_REQUESTED'
        });

        axios.get(`${url}${city}${key}`)
        .then(res => {
          dispatch({
            type: 'LOAD_DETAIL_DATA',
            data: res.data
          });
        })
        .catch(err=>{
          dispatch({
            type: 'LOAD_DETAIL_ERR',
            err: err
          })
        })
      }
    }
