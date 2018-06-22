import axios from 'axios';

export function fetchUser() {
    return {
        type:"FETCH_USER_FULFILLED",
        payload: {
            name:"MSD",
            age:40,
        }
    }
}

export function setUserName(name) {
    return {
        type:"SET_USER_NAME",
        payload: {
            name:name
        }
    }
}

export function fetchUserApi() {
    return function(dispatch) {
        axios.get('http://localhost:8080/employees/1')
        .then((response) => {
            dispatch({type: "FETCH_USER_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_USER_REJECTED", payload:error})
        })
    }
}