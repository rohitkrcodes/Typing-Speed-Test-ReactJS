import { useTypeContext } from "./useTypeContext";
import { useEffect } from "react";

export const useTimer = ()=> {

    const {status,timerID,dispatch} = useTypeContext();

    //stop timer
    useEffect(()=>{
      if(timerID && status === 0)
      {
        clearInterval(timerID);
        dispatch({ type: 'SET_TIMER', payload: 0 });
        dispatch({ type: 'STOP_STATUS'});
      }
    },[status,dispatch,timerID]);

    //start timer
    const startTimer = () => {
        const timerId = setInterval(() => dispatch({ type: 'TICK' }),1000);
        dispatch({ type: 'SET_TIMER', payload: timerId });
      };

    return {startTimer};
}