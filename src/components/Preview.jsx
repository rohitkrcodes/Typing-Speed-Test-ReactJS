import { useTypeContext } from "../hooks/useTypeContext";

const Preview = () => {

    const {text,color,characters} = useTypeContext();
    
    return ( 
        <div>
            <div className="mt-2" >
                <h1 className="font-bold text-2xl text-center">Your score: {characters}</h1>
            </div>
            <div className="bg-white m-3 px-2 font-light text-lg text-center">
                {text.map((word, i) => (
                    <span key={i}>
                    <span className={color[i]}>
                        {word.split("").map((char, idx) => (
                        <span key={idx}>{char}</span>
                        )) 
                    }
                    </span>
                    <span> </span>
                    </span>
                ))}
            </div>
        </div>
     );
}
 
export default Preview;