import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mail.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a
          href="https://github.com/Thamireslopescz"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={github} alt="github"></img>
        </a>
        <a
          href="https://www.instagram.com/thamireslopescz/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={insta} alt="instagram"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/thamires-lopes-025a06159/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={linkedin} alt="linkedin"></img>
        </a>
        <a
          href="mailto:thamiresribeirocezar@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={mail} alt="email"></img>
        </a>
        <a
          href="https://w.app/fMyHcl"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={whatsapp} alt="whatsapp"></img>
        </a>
        <a
          href="https://www.facebook.com/thamires.ribeirocezar"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={facebook} alt="facebookP"></img>
        </a>
      </div>
      <p className="footer-title">Desenvolvido por Thamireslopescz © - 2023</p>
    </footer>
  );
}

export default Footer;
