const initialState = {
    orders: {},
    inputValues: {},
};

function Reducer(state=initialState, action) {
    switch(action.type) {
        case "GET_ORDERS": {
            return {
                orders: action.orders
            };
        }
        case "CREATE_ORDER": {
            return {};
        }
        case "EDIT_ORDER": {
            return {};
        }
        case "DELETE_ORDER": {
            return {};
        }
        case "SET_INPUT_VALUES": {
            return {
                inputValues: action.inputValues
            }
        }
        default:
            return {...state};
    }
}

export default Reducer;