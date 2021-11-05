import {
    START_GETTING_DATA,
    GET_DATA,
    GET_DATA_FAILD
} from "../actions/types";

const INITAL_STATE = {
    loading: false,
    data: null,
    error: ''
};
export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case START_GETTING_DATA:
            return { ...state, loading: true };
        case GET_DATA:
            return { ...state, data: action.payload, loading: false };
        case GET_DATA_FAILD:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};