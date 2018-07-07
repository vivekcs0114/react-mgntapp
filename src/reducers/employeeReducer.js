export default function reducer(state=[], action) {
    switch(action.type) {
        case "FETCH_EMPLOYEE_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_EMPLOYEE_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                employee:action.payload
            }
        }
        case "FETCH_EMPLOYEELIST_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_EMPLOYEELIST_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                employee:action.payload
            }
        }
        case "ADD_EMPLOYEE_FULFILLED" : {
            const newEmployee = {
                id:action.payload.id,
                name:action.payload.name,
                address:action.payload.address,
                status:action.payload.status  
            }
            state.employee.push(newEmployee)
            return {
                ...state,
                fetching:false,
                fetched:true,
            }
        }
        case "ADD_EMPLOYEE_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_DEP_EMPLOYEE_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_DEP_EMPLOYEE_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                employee:action.payload
            }
        }
        case "ADD_DEP_EMPLOYEE_REJECTED" : {
            return {
                ...state,
                error:action.payload
            }
        }
        case "ADD_DEP_EMPLOYEE_FULFILLED" : {
            return {
                ...state,
                employee:action.payload
            }
        }
        case "UPDATE_EMPLOYEE_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                employee:action.payload
            }
        }
        case "UPDATE_EMPLOYEE_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "DELETE_EMPLOYEE_SUCCESS" : {
            return {
                ...state
            }
        }
        case "DELETE_EMPLOYEE_FAILED" : {
            return {
                ...state,
                error:action.payload
            }
        }
        default:
            return state;
    }
}