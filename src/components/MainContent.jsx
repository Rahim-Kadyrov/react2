import Buttons from './Buttons'
import Number from "./Number";
import { useState } from "react";

function MainContent(props){
    const [counter, setCounter] = useState(0);
    
    return(
            <div className="main">
                <Number counter={counter}/>
                <Buttons counter={counter} setCounter={setCounter}/>
            </div>
    )
}
export default MainContent;