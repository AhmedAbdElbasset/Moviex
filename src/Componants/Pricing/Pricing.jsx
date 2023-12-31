import SignBoard from "../SignBoard/SignBoard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import './Pricing.css'
function Pricing(){
    return (
        <div className="PricingPage">
            <p className="headline">our pricing plans</p>
            <h3>our pricing strategy</h3>
            <div className="plans">
                <div className="box premium">
                        <h2>premium</h2>
                        <div className="color">
                            <p>9.99$</p>
                            <span>Monthly</span>
                        </div>
                        <div className="div span">
                            <FontAwesomeIcon icon={faCheck} />
                            <p>Video quality</p>
                            <span>Better</span>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faCheck} />
                            <p> Resolution</p>
                            <span>1080p</span>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faCheck} />
                            <p>  Screens you can watch</p>
                            <span>2</span>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faCheck} />
                            <p>  Cancel anytime</p>
                        </div>
                        <button>buy now</button>
                    </div>
                <div className="box standard">
                    <h2>standard</h2>
                    <div className="color">
                        <p>7.99$</p>
                        <span>Monthly</span>
                    </div>
                    <div className="div span">
                        <FontAwesomeIcon icon={faCheck} />
                        <p>Video quality</p>
                        <span>Good</span>
                    </div>
                    <div className="div">
                        <FontAwesomeIcon icon={faCheck} />
                        <p> Resolution</p>
                        <span>480p</span>
                    </div>
                    <div className="div">
                        <FontAwesomeIcon icon={faCheck} />
                        <p>  Screens you can watch</p>
                        <span>1</span>
                    </div>
                    <div className="div">
                        <FontAwesomeIcon icon={faCheck} />
                        <p>  Cancel anytime</p>
                    </div>
                    <button>buy now</button>
                </div>
                <div className="box premium pro">
                        <h2>premium pro</h2>
                        <div className="color">
                            <p>9.99$</p>
                            <span>Monthly</span>
                        </div>
                        <div className="div span">
                            <FontAwesomeIcon icon={faCheck} />
                            <p>Video quality</p>
                            <span>Best</span>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faCheck} />
                            <p> Resolution</p>
                            <span>4K+HDR</span>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faCheck} />
                            <p>  Screens you can watch</p>
                            <span>4</span>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faCheck} />
                            <p>  Cancel anytime</p>
                        </div>
                        <button>buy now</button>
                    </div>
            </div>
        </div>
    )
}

export default Pricing