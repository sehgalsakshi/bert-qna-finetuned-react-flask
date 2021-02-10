import { post } from '../../services/httpService';
import {
    SET_QUESTION, SET_ANSWER, SET_PARAGRAPH, LOADING,
} from './Types';

export const setParagraph = (paragraph) => ((dispatch) => {
    dispatch({type:SET_PARAGRAPH, paragraph})
})

export const setQuestion = (question) => ((dispatch) => {
    dispatch({type:SET_QUESTION, question})
})

export const getAnswer = (question, paragraph) => ((dispatch) => {
    dispatch({ type: LOADING, loading: true })
    return post({
        api:'fetch_answer/',
        data: { paragraph, question },
    }).then((response) => {
        dispatch({ type: LOADING, loading: false })
        dispatch({type:SET_ANSWER, answer: response.data})
    })
    
})