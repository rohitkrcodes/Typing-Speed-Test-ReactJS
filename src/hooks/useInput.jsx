import { useTypeContext } from "./useTypeContext";

export const useInput = ()=>{

    const {input,text,color,dispatch} = useTypeContext();

    const setColor = ()=>{
        const ic = input.split(' ');
        const idx = ic.length-1 ;
        
        const newtc = color.map((element,i) => {
            if(i <= idx){
                if(ic[i] === text[i]){
                    return "bg-amber-300";
                }
                else{
                    return "bg-red-300";
                }
            }else{
                return "bg-white";
            }
        });
        
        dispatch({type: 'SET_COLOR', payload: newtc});
    }

    return {setColor};
}