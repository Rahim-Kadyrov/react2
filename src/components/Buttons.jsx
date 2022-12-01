import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'
import reset1 from './images/refresh 1.png'
function Buttons(props) {

    function plus() {
    props.setCounter(props.counter + 3)        
    }

    function minus() { 
        props.setCounter(props.counter - 1 )       
        }
    

    function reset() {

        props.setCounter(0)
    }

    return (
        <div className="main-buttons">
            <button className="plus" onClick={plus}>+</button>
            <button className="reset" onClick={reset}><img src={reset1} alt="reset-button" /></button>
            <button className="minus" onClick={minus}>-</button>
        </div>
    )
}
export default Buttons;