import { FETCH_RESTAURANTS } from '../actions/types';
import { FETCH_RESTAURANTBYID } from '../actions/types';
import { FETCH_MENUITEMS } from '../actions/types';
import { SIGNUP } from '../actions/types';
const initialState = {

    restaurants: [],
    restaurant: {},
    menuItems: [],
    users: []

};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            };
        case FETCH_RESTAURANTBYID:
            return {
                ...state,
                restaurant: action.payload
            }
        case FETCH_MENUITEMS:
            return {
                ...state,
                menuItems: action.payload
            }
        case SIGNUP:
            let user = []
            Object.assign(user, state.users)
            user.push(action.payload)
            return {
                ...state,
                users: user
            }
        default:
            return state;
    };
}