import { useTypeContext } from "../hooks/useTypeContext";

const CountDown = () => {

   const {status,seconds} = useTypeContext();

   return ( 
      <div>
         {status ? (<h1 className="font-bold text-3xl text-center">{seconds}</h1>) : (<h1>Press start to begin!</h1>)}
      </div>
   );
}
 
export default CountDown;