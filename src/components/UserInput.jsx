import { useInput } from "../hooks/useInput";
import { useTypeContext } from "../hooks/useTypeContext";
import { useEffect, useRef } from "react";

const UserInput = () => {

    const {status,input,dispatch} = useTypeContext();
    const {setColor} = useInput();
    const textInput = useRef(null);

    useEffect(() => {
        if (status) {
          textInput.current.focus();
        }
      }, [status])

    const handleChange = (event)=>{
        dispatch({type: 'CHANGE_INPUT', payload: event.target.value});
        if(input.length)
        {
            setColor();
        }
    }

    return ( 
        <div className="bg-white mt-3 disabled:opacity-75 rounded-lg">
            <input ref={textInput} disabled={status !== 1} type="text" className="input cursor-text rounded-lg p-1.5" value={input} onChange={handleChange} />
        </div>
     );
}
 
export default UserInput;