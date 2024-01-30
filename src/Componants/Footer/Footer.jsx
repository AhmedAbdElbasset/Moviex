import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faPinterest,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <h1>Movix</h1>
                <div className="links">
                    <Link to={'/'}>HOME</Link>
                    <Link to={'/movies'}>MOVIES</Link>
                    <Link to={'/tv'}>TV SHOWS</Link>
                    <Link to={'/pericing'}>PRICING</Link>
                    <Link to={'/Contact'}>CONACT</Link>
                </div>
                <form action="">
                    <input type="text" name="" id="" placeholder='Find Fav Movie'/>
                        <FontAwesomeIcon icon={faSearch} />
                    
                </form>
            </div>
            <div className="bottom">
                <div className="left">
                    <p>FAQ</p>
                    <p>HELP CENTER</p>
                    <p>TERMS OF USE</p>
                    <p>PRIVACY</p>
                </div>
                <div className="icons">
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPinterest} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer