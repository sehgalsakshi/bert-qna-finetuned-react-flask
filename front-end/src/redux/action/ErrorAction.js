import {
    TOGGLE_ERROR,
    LOADING,
} from './Types';
 
export const toggleLoader = (value) => ((dispatch) => {
    dispatch({ type: LOADING, loading: value })
})

export const showErrorPopup = (message, errorTitle ) => ((dispatch) => {
    dispatch({type: TOGGLE_ERROR, value: true, message, errorTitle})
})
export const closeErrorPopup = () => ((dispatch) => {
    dispatch({type: TOGGLE_ERROR, value: false })
})