const initialState = {};

function Reducer(state=initialState, action) {
    switch(action.type) {
        case "GET_ORDERS": {
            return {};
        }
        case "CREATE_ORDER": {
            return {};
        }
        case "EDIT_ORDER": {
            return {};
        }
        default :
        return {...state};
    }
}

export default Reducer;