import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "./Image";

const Info = () => {
  return (
    <div>
      <div className="img-container">
        <Image />
      </div>
      <div className="component-container">
        <h1 className="info-title">Evren Ünal</h1>
        <p className="subtitle2">Junior Frontend Developer</p>

        <div className="button-container">
          <button className="email-btn" onClick={() => (window.location.href = 'mailto:evrenn.unal@gmail.com')}>
            <FaEnvelope /> Email
          </button>

          <button className="linkedin-btn" onClick={() => (window.location.href = 'https://www.linkedin.com/in/evrenunall/')}>
            <FaLinkedin /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
