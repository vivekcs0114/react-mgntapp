import axios from 'axios';

export function fetchEmployeeList() {
    return function(dispatch) {
        axios.get('/employees')
        .then((response) => {
            dispatch({type: "FETCH_EMPLOYEELIST_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_EMPLOYEELIST_REJECTED", payload:error})
        })
    }
}

export function fetchEmployee(id) {
    return function(dispatch) {
        axios.get('/employees/'+id)
        .then((response) => {
            dispatch({type: "FETCH_EMPLOYEE_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_EMPLOYEE_REJECTED", payload:error})
        })
    }
}

export function fetchDepartmentEmployees(id) {
    return function(dispatch) {
        axios.get('/employees/departments/'+id)
        .then((response) => {
            dispatch({type: "FETCH_DEP_EMPLOYEE_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_DEP_EMPLOYEE_REJECTED", payload:error})
        })
    }
}

export function addDepartmentEmployees(id, employee) {
    return function(dispatch) {
        axios.post('/employees/departments/'+id, employee)
        .then((response) => {
            dispatch({type: "ADD_DEP_EMPLOYEE_SUCCESS", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"ADD_DEP_EMPLOYEE_FAILED", payload:error})
        })
    }
}

export function addEmployee(employee) {
    return function(dispatch) {
        axios.post('/employees', employee)
        .then((response) => {
            dispatch({type: "ADD_EMPLOYEE_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"ADD_EMPLOYEE_REJECTED", payload:error})
        })
    }
}

export function updateEmployee(employee) {
    return function(dispatch) {
        axios.put('/employees/'+employee.id, employee)
        .then((response) => {
            dispatch({type: "UPDATE_EMPLOYEE_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"UPDATE_EMPLOYEE_REJECTED", payload:error})
        })
    }
}

export function deleteEmployee(id) {
    return function(dispatch) {
        axios.delete('/employees/'+ id)
        .then((response) => {
            dispatch({type: "DELETE_EMPLOYEE_SUCCESS", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"DELETE_EMPLOYEE_FAILED", payload:error})
        })
    }
}