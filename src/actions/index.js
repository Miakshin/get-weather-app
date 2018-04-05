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
        console.log(res)
        dispatch({
          type: 'ADD_DATA',
          data: res
        });
      })


    }
  }
