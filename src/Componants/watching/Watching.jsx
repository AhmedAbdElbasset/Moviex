import './Watching.css'
import image from'../../assets/live_img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay} from '@fortawesome/free-solid-svg-icons'
function Watching(){
    return(
        <div className="watching">
            <div className="dis">
                <p className='headLine'>ONLINE STREAMING</p>
                <h3>Live Movie & TV Shows For Friends & Family</h3>
                <div className="numbers">
                    <h1>HD</h1>
                    <h1>4K</h1>
                    <p className='top'>20k+</p>
                    <p>Active Customer</p>
                </div>
                <button>
                    <FontAwesomeIcon icon={faPlay} />
                    watch now
                </button>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default Watching