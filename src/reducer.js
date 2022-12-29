import { GET_DATA_SUCCESS } from "./actions";
const reducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default reducer