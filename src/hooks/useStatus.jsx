import { useTypeContext } from "./useTypeContext";
import { useTimer } from "./useTimer";
import { generate,count } from "random-words";
import { NUMB_OF_WORDS } from "../utils/utils";

export const useStatus = ()=>{

    const {dispatch} = useTypeContext();
    const {startTimer} = useTimer();

    const startTyping = ()=>{
        dispatch({type: 'START_STATUS', payload: generate(NUMB_OF_WORDS)});
        startTimer();
    }
    
    const stopTyping = ()=>{
        dispatch({type: 'STOP_STATUS'});
    }

    return {startTyping,stopTyping} ;
}