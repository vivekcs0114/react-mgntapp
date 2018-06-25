import axios from 'axios';

export function fetchDepartmentList() {
    return function(dispatch) {
        axios.get('http://localhost:8080/departments')
        .then((response) => {
            dispatch({type: "FETCH_DEPARTMENTLIST_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_DEPARTMENTLIST_REJECTED", payload:error})
        })
    }
}

export function fetchDepartment(id) {
    return function(dispatch) {
        axios.get('http://localhost:8080/departments/'+id)
        .then((response) => {
            dispatch({type: "FETCH_DEPARTMENT_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_DEPARTMENT_REJECTED", payload:error})
        })
    }
}

export function addDepartment(department) {
    return function(dispatch) {
        axios.post('http://localhost:8080/departments', department)
        .then((response) => {
            dispatch({type: "ADD_DEPARTMENT_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"ADD_DEPARTMENT_REJECTED", payload:error})
        })
    }
}

export function updateDepartment(department) {
    return function(dispatch) {
        axios.put('http://localhost:8080/departments/'+department.id, department)
        .then((response) => {
            dispatch({type: "UPDATE_DEPARTMENT_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"UPDATE_DEPARTMENT_REJECTED", payload:error})
        })
    }
}

export function setName(name) {
    return function(dispatch) {
        dispatch({type: "SET_NAME", payload:name})
    }
}

export function setOverview(overview) {
    return function(dispatch) {
        dispatch({type: "SET_OVERVIEW", payload:overview})
    }
}