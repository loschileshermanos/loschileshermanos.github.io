import React from "react";
import "../../App.css";
import logoHeader from "../../assets/logo.png";
import Footer from "../Footer/Footer";
function LogoHeader() {
  return (
    <img className="register-logo" src={logoHeader} alt="Logo" width={150} />
  );
}
class Registro extends React.Component {
  render = () => {
    return (
      <div className="register-content-container">
        <div className="register-content">
          <h1 className="register-title">
            Formulario para tu facturación electrónica
          </h1>
          <hr></hr>
          <div className="register-banner">
            <div className="items-content-register">
              <div className="item-register-left">
                <LogoHeader />
              </div>
              <div className="item-register-left">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfp8IXPGrZ8Zp-N5Mp-m7rSVKK-uXdUOMe3CJzocAOixTIOlw/viewform?embedded=true"
                  width="740"
                  height="800"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}
export default Registro;
