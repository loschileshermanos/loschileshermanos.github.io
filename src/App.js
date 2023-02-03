import React from "react";
import { ReactComponent as IconFacebook } from "./assets/icons/facebook.svg";
import { ReactComponent as IconEmail } from "./assets/icons/gmail.svg";
import { ReactComponent as IconWhatsapp } from "./assets/icons/whatsapp.svg";
import { ReactComponent as IconInstagram } from "./assets/icons/instagram.svg";
import logo from "./assets/logo.png";
// import monochrome from './assets/monochrome-logo.png';
import "./App.css";

function Header() {
  return <img className="logo-img" src={logo} alt="Logo" width={300} />;
}

// function Logo() {
//   return <img src={monochrome} alt="Logo" width={18}/>;
// }

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Los Chiles Hermanos</a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <a
              href="https://loschileshermanos.com"
              title="Los Chiles Hermanos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Header className="logo" />
            </a>

            <h1>
              Prepárate para el picor<span>🌶️🔥</span>acompañado de un gran
              sabor<span>🤤</span>
            </h1>
            <p>
              Próximamente podras ver nuestros productos y hacer tu pedido en
              este sitio web.
            </p>
            <span>
              Contactanos a través nuestras redes sociales, si necesitas mayor información envíanos un correo
              electrónico si tienes mucha más curiosidad.
            </span>
          </div>
          <div className="social">
            <a
              href="https://api.whatsapp.com/send/?phone=573154112845&text&type=phone_number&app_absent=0"
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
        <div className="footer">
          <span>
            Copyright © Los Chiles Hermanos 2023. All rights reserved.
            <p>
              Developed by{" "}
              <a
                className="underlined"
                href="https://github.com/joefaver"
                target="_blank"
                rel="noopener noreferrer"
              >
                joefaver
              </a>{" "}
              and{" "}
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
      </div>
    );
  };
}

export default App;
