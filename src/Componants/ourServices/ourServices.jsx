import image from '../../assets/services_img.jpg'
import Download from '../../assets/icons8-download-96.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv,faVideo } from '@fortawesome/free-solid-svg-icons'
import './ourServices.css'
function OurServices(){
    return(
    <div className="Services">
        <div className="left">
            <img src={image} alt=""  className='main'/>
            <div className='download'>
            <img src={Download} alt="" />
             <p>Download</p></div>
        </div>
        <div className="right">
            <p className='services'>OUR SERVICES</p>
            <h3>Download Your Shows Watch Offline.</h3>
            <div className='prop'>
                <div className='tv'>
                    <p>Enjoy on Your TV.</p>
                    <FontAwesomeIcon icon={faTv} />
                </div>
                <div className="viedo">
                    <p>Watch Everywhere.</p>
                    <FontAwesomeIcon icon={faVideo} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default OurServices