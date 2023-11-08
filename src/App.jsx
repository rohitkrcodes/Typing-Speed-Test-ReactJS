import { useEffect } from "react";
import { useTypeContext } from "./hooks/useTypeContext";
import { useStatus } from "./hooks/useStatus";
import UserInput from "./components/UserInput";
import Preview from "./components/Preview";
import CountDown from "./components/CountDown";

function App() {

  const {status,buttonText,dispatch} = useTypeContext();
  const {startTyping,stopTyping} = useStatus();    

  useEffect (()=>{
    dispatch({type: 'RESET_STATUS'});
  },[dispatch]);

  return (
    <div className= "flex flex-col items-center justify-center bg-stone-300">
      <h1 className="mt-3 font-bold text-3xl text-center">Typing Speed Test</h1>
      <button type="button" className="mt-3 cursor-pointer hover:bg-red-600 bg-red-500 font-bold px-4 py-3 rounded-lg" 
        onClick={status ? stopTyping : startTyping}>{buttonText}</button>
      <CountDown />
      <UserInput />
      <Preview />
    </div>
  )
}

export default App;
