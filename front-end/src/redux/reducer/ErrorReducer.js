import {
    LOADING,
    TOGGLE_ERROR,
} from '../action/Types';

export const initialState = {
    message: undefined,
    errorTitle:undefined,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: action.loading}
        case TOGGLE_ERROR:
            var message = state.message
            var errorTitle = state.errorTitle
            if(action.value){
                message = action.message
                errorTitle = action.errorTitle
            } else {
                message = undefined;
                errorTitle = '';
            }
            return {
                ...state,
                message,
                errorTitle,
            }
        default:
            return state;
    }
}