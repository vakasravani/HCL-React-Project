import { FETCH_RESTAURANTS, FETCH_RESTAURANTBYID, FETCH_MENUITEMS, SIGNUP } from './types';
import axios from 'axios';
export const fetchRestaurants = () => dispatch => {
  axios.get("http://localhost:8080/restaurants/all")
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
      })
    })
};
export const fetchRestaurantbyid = (restaurantId) => dispatch => {
  axios.get("http://localhost:8080/restaurants/find/" + restaurantId)
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_RESTAURANTBYID,
        payload: res.data
      })
    })
};

export const fetchMenuItems = (restaurantId) => dispatch => {
  axios.get("http://localhost:8080/menu/find/" + restaurantId)
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_MENUITEMS,
        payload: res.data
      })
    })
};

export const signup = (data) => dispatch => {
  axios.post("http://localhost:8080/user/signup", data)
    .then(response => {
      console.log(response)
      dispatch({
        type: SIGNUP,

        payload: response.data
      })
    })
};