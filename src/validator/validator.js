const validator = {
    'orderNum': {
        checkField: (val) => {
            return !isNaN(val) && val.length;
        }
    },
    'username': {
        checkField: (val) => {
            return val.length ? true : false
            // return val.length;
        }
    },
    'description': {
        checkField: (val) => {
            return val.length;
        }
    },
    'status': {},
    'totalPrice': {
        checkField: (val) => {
            return !isNaN(val);
        }
    },
    'purchasePrice': {
        checkField: (val) => {
            return !isNaN(val);
        }
    },
    'address': {
        checkField: (val) => {
            return val.length;
        }
    },
};

const isValid = (field, value) => {
    console.log("Field ", field, value);
    return validator[field].checkField(value);
};

export default isValid;