import {
    SET_QUESTION, SET_ANSWER, SET_PARAGRAPH,
} from '../action/Types';

 export const initialState = {
    question: undefined,
    paragraph: undefined,
    answer: undefined
 }; 

 export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION:
            return {...state, question: action.question, answer: undefined}
        case SET_PARAGRAPH:
            return {...state, paragraph: action.paragraph, answer: undefined}
        case SET_ANSWER:
            return {...state, answer: action.answer}        
        default: 
            return state;
    }    
 }  