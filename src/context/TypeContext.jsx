import { createContext, useReducer } from 'react';
import { NUMB_OF_WORDS, MAX_TIME } from '../utils/utils';

export const TypeContext = createContext();

const countCorrectCharacters = (text, input) => {
    const ic = input.split(' ');
    return ic.filter((c, i) => c === text[i]).length;
  };

export const typeReducer = (state, action) => {
    switch (action.type) {

      case 'START_STATUS':
        return {
            status: 1,
            buttonText: "Stop",
            timerID: 0,
            text: action.payload,
            input: '',
            characters: 0,
            seconds: MAX_TIME,
            color: Array(NUMB_OF_WORDS).fill("bg-white"),
        }
        
      case 'RESET_STATUS':
        return {
            status: 0,
            buttonText: "Start",
            timerID: 0,
            text:[],
            input: '',
            characters: 0,
            seconds: 0,
            color: [],
        } 
        
      case 'STOP_STATUS':
        return {
            ...state,
            status: 0,
            buttonText: "Start",
            text:[],
            input: '',
            seconds: 0,
            color:[],
        }  
        
      case 'CHANGE_INPUT':
        return {
            ...state,
            input: action.payload,
            characters: countCorrectCharacters(state.text, state.input),
        }

      case 'SET_COLOR':
        return {
            ...state,
            color: action.payload,
        }

      case 'SET_TIMER':
        return {
            ...state,
            timerID: action.payload,
          }
      
      case 'TICK':
        return {
            ...state,
            seconds: state.seconds ? state.seconds - 1 : 0,
            status: state.seconds ? state.status : 0,
        }

      default:
        return state;
    }
  }


export const TypeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(typeReducer, 
        { 
            status: 0,
            buttonText: "Start",
            text:[],
            input: '',
            characters: 0,
            seconds: 0,
            timerID: 0,
            color:[],
        }
    );

    return (
        <TypeContext.Provider value={{ ...state, dispatch }}>
          { children }
        </TypeContext.Provider>
    );
    
}