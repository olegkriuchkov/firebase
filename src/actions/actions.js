export const getOrders = () => ({
    type: "GET_ORDERS_REQUEST"
});

export const createOrder = (order) => ({
    type: "CREATE_ORDER_REQUEST",
    order
});

export const setInputValues = (inputValues) => ({
    type: "SET_INPUT_VALUES",
    inputValues
});