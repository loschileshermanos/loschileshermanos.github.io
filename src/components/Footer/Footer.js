import React from "react";
import { ReactComponent as IconFacebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as IconEmail } from "../../assets/icons/gmail.svg";
import { ReactComponent as IconWhatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as IconInstagram } from "../../assets/icons/instagram.svg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import logoHeader from "../../assets/logochileshermanos130px.png";
import "../../App.css";
function LogoHeader() {
  return <img src={logoHeader} alt="Logo" width={50} />;
}

class Footer extends React.Component {
  render = () => {
    return (
      <>
        <div className="footer">
          <div className="item-footer">
            <LogoHeader className="logo" />
            <div className="item-footer-contact">
              <FaPhoneSquareAlt></FaPhoneSquareAlt>
              <p className="items-contact">+57 301 4484996</p>
            </div>
            <div className="item-footer-contact">
              <FaRegEnvelope></FaRegEnvelope>
              <p className="items-contact">info@loschileshermanos.com</p>
            </div>
            <div className="item-footer-contact">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <p className="items-contact">Bucaramanga - Santander</p>
            </div>
          </div>
          <div className="item-footer">
            <p>Contáctanos en nuestras redes sociales:</p>
            <div className="social">
              <a
                href="https://api.whatsapp.com/send/?phone=573014484996&text&type=phone_number&app_absent=0"
                title="Whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsapp className="ion ion-logo-whatsapp icon" />
              </a>
              <a
                href="https://www.instagram.com/loschileshermanos"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram className="ion ion-logo-instagram icon" />
              </a>
              <a
                href="https://facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook className="ion ion-logo-facebook circle-line icon" />
              </a>
              <a
                href="mailto:info@loschileshermanos.com"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconEmail className="ion ion-logo-twitter circle-line icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <a
            className="wsp-content"
            href="https://api.whatsapp.com/send/?phone=573014484996&text&type=phone_number&app_absent=0"
            title="Whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsapp className="logo-wsp" />
          </a>
          <span>
            Copyright © Los Chiles Hermanos 2023. All rights reserved.
            <p>
              Developed by
              <a
                className="underlined"
                href="https://github.com/joefaver"
                target="_blank"
                rel="noopener noreferrer"
              >
                joefaver
              </a>
              and
              <a
                className="underlined"
                href="https://github.com/manuelarevalo01"
                target="_blank"
                rel="noopener noreferrer"
              >
                manuelarevalo01
              </a>
              .
            </p>
          </span>
        </div>
      </>
    );
  };
}
export default Footer;
