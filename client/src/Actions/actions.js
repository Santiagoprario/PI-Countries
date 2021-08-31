import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAIL = 'GET_DETAIL';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const SEARCH = 'SEARCH';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';

export  function getCountries (page , pageSize , order) {
   return (dispatch) => {
      axios.get(`http://localhost:3001/countries/all/all?page=${page}&pageSize=${pageSize}&order=${order}`)
      .then((response) => { 
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
       })
  };
}

export function getAllCountries (page , pageSize) {
  return (dispatch) => {
     axios.get(`http://localhost:3001/countries`)
     .then((response) => { 
       dispatch({
           type: GET_ALL_COUNTRIES,
           payload: response.data
       })
      })
 };
}

export function getAllActivities () {
  return (dispatch) => {
     axios.get(`http://localhost:3001/activity`)
     .then((response) => { 
       dispatch({
           type: GET_ALL_ACTIVITIES,
           payload: response.data
       })
      })
 };
}

export function postActivity (activity) {
  return (dispatch) => {
   axios.post('http://localhost:3001/activities' , activity)
    .then((r) => {
      dispatch({
        type : POST_ACTIVITY
      })
    } )
  }
}

export function getDetail (id) {  
  return (dispatch) => {
       axios.get('http://localhost:3001/countries/'+id.id)
       .then((response) => {
          dispatch({
            type: GET_DETAIL,
            payload: response.data
 })
 })
}};

export function search(input) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/paises?name=${input}`).then((response) => {
      dispatch({
        type: SEARCH,
        payload: response.data,
      });
    });
  };
}

// export default function postActivity () {
//   return (dispatch) => {
//      axios.post(`http://localhost:3001/activities`)
//      .then((response) => { 
//        dispatch({
//            type: GET_COUNTRIES,
//            payload: response.data
//        })
//       })
//  };
// }

