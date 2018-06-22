import axios from 'axios';

export function fetchEmployeeList() {
    return function(dispatch) {
        axios.get('http://localhost:8080/employees')
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
        axios.get('http://localhost:8080/employees/'+id)
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
        axios.get('http://localhost:8080/employees/departments/'+id)
        .then((response) => {
            dispatch({type: "FETCH_DEP_EMPLOYEE_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"FETCH_DEP_EMPLOYEE_REJECTED", payload:error})
        })
    }
}

export function addEmployee(employee) {
    return function(dispatch) {
        axios.post('http://localhost:8080/employees', employee)
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
        axios.put('http://localhost:8080/employees/'+employee.id, employee)
        .then((response) => {
            dispatch({type: "UPDATE_EMPLOYEE_FULFILLED", payload:response.data})
        })
        .catch((error) => {
            dispatch({type:"UPDATE_EMPLOYEE_REJECTED", payload:error})
        })
    }
}

export function setName(name) {
    return function(dispatch) {
        dispatch({type: "SET_NAME", payload:name})
    }
}

export function setAddress(address) {
    return function(dispatch) {
        dispatch({type: "SET_ADDRESS", payload:address})
    }
}

export function setStatus(status) {
    return function(dispatch) {
        dispatch({type: "SET_STATUS", payload:status})
    }
}