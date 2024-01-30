import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Contact.css'
function Contact() {
  return (
    <div className="Contact">
      <form action="">
        <h4>Contact Form</h4>
        <div className="cont">
        <input type="text" name="" id="" placeholder="Your Name"/>
        <input type="text" name="" id="" placeholder="Your Email"/>
        <input type="text" name="" id="" placeholder="Subject" className="Subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Type Your Message"></textarea>
        <button>send massage</button>
        </div>
      </form>
      <div className="information">
        <h4>Information</h4>
            <div className="cont">
            
            <p>
            <span>
                Find solutions : 
            </span> to common problems, or get help from a support agent
                industry's standard 
            </p>
            <div className="box">
                <FontAwesomeIcon icon={faLocationDot}/>
                <p>Address :</p>
                <span>Elsaida Zainb , Cairo</span>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faPhone} />
                <p>Phone :</p>
                <span>01123599352</span>
            </div>
            <div className="box">
                <FontAwesomeIcon icon={faEnvelope}/>
                <p>Email:</p>
                <span>ahmedabdelbaset393ee@gmail.com</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
