export default function reducer(state=[], action) {
    switch(action.type) {
        case "FETCH_DEPARTMENT_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_DEPARTMENT_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                department:action.payload
            }
        }
        case "FETCH_DEPARTMENTLIST_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "FETCH_DEPARTMENTLIST_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                department:action.payload
            }
        }
        case "ADD_DEPARTMENT_FULFILLED" : {
            const newDepartment = {
                id:action.payload.id,
                name:action.payload.name,
                overview:action.payload.overview,
                employees:action.payload.employees  
            }
            state.department.push(newDepartment)
            return {
                ...state,
                fetching:false,
                fetched:true,
            }
        }
        case "ADD_DEPARTMENT_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "UPDATE_DEPARTMENT_FULFILLED" : {
            return {
                ...state,
                fetching:false,
                fetched:true,
                department:action.payload
            }
        }
        case "UPDATE_DEPARTMENT_REJECTED" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        case "SET_NAME" : {
            return {
                ...state,
                fetching:false,
                department:action.payload
            }
        }
        case "SET_OVERVIEW" : {
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        }
        default:
            return state;
    }
}