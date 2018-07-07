import axios from 'axios';

export function fetchDepartmentList() {
    return function(dispatch) {
        axios.get('/departments')
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
        axios.get('/departments/'+id)
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
        axios.post('/departments', department)
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
        axios.put('/departments/'+department.id, department)
        .then((response) => {
            dispatch({type: "UPDATE_DEPARTMENT_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"UPDATE_DEPARTMENT_REJECTED", payload:error})
        })
    }
}

export function deleteDepartment(depId) {
    return function(dispatch) {
        axios.delete('/departments/'+depId)
        .then((response) => {
            dispatch({type: "DELETE_DEPARTMENT_SUCCESS", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"DELETE_DEPARTMENT_FAILED", payload:error})
        })
    }
}