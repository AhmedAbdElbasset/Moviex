import Header from "../Header/Header"
import DeadPool from '../../assets/pngwing.com.png'
import BackGround from '../../assets/myke-simon-atsUqIm3wxo-unsplash.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import './landing.css'
function Landing(){
    return(
    <div className="landing"> 
        <Header/>
        <img src={DeadPool} alt="" />
        <div className="des">
            <motion.div initial={{x:-400,y:-138}} animate={{x:-2,y:-138}} transition={{duration:1,stiffness:200,type:'spring'}} className="text">
                <h3>Moviex</h3>
                <p>Unlimited <span>Movie</span>, TVs Shows, & More.</p>
            </motion.div>
                <Link to={'/Moviex/movies'}>
                    <FontAwesomeIcon icon={faPlay} />
                    Watch Now
                </Link>
        </div>
    </div>
    )
}

export default Landing