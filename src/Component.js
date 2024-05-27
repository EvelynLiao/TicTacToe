// export const Component = () =>{
//     return <button>Trycker här </button>
// }

import { useState } from "react";

export default function Component (){
    const [number, setNumber] = useState (0);
    const [showNumber, setShowNumber] = useState(true)

    console.log("show number", showNumber)

    function handleClick (){
        setNumber(number+1)

        // if (number === 5){
        //     setShowNumber(ture);
        // }        
    }

    return (
    <div className="margin-top">
      <button onClick={handleClick}>Trycker här att increae number</button>
      <p>{number}</p>
    </div>
    ); 
}