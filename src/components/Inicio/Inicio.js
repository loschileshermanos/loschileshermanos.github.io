import React from "react";
import Typewriter from "typewriter-effect";
import { ReactComponent as IconWhatsapp } from "../../assets/icons/whatsapp.svg";
import imageChingona from "../../assets/souces/La_Chingona-PhotoRoom.png-PhotoRoom-removebg-preview.png";
import imageChula from "../../assets/souces/La_Chula-PhotoRoom.png-PhotoRoom-removebg-preview.png";
import imageGuera from "../../assets/souces/La_Güera_1-PhotoRoom.png-PhotoRoom-removebg-preview.png";
import imageBanner from "../../assets/logo.png";
import Footer from "../Footer/Footer";
import "../../App.css";

function ImageBanner() {
  return <img className="image-banner" src={imageBanner} alt="imageBanner" />;
}
function ImageChingona() {
  return (
    <img src={imageChingona} alt="imageChingona" className="image-content" />
  );
}
function ImageChula() {
  return <img src={imageChula} alt="imageChula" className="image-content" />;
}
function ImageGuera() {
  return (
    <img src={imageGuera} alt="imageGuera" className="image-content_item" />
  );
}
class Inicio extends React.Component {
  render = () => {
    return (
      <div className="content-banner-container">
        <div className="content-banner">
          <div className="items-content-banner">
            <div className="item-content-left">
              <div className="item-content-title">
                <div className="typed-element">
                  <h1 className="txt-title">
                    Tu tienda online conectada a
                    <span className="txt-title-span">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("WhatsApp")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Instagram")
                            .start()
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Contáctanos!");
                        }}
                      />
                    </span>
                  </h1>
                </div>
              </div>
              <div className="item-content-subtitle">
                <p className="txt-subtitle">
                  Somos un emprendimiento formado por amantes del ají, de la
                  buena mesa, del trabajo bien hecho y de la atención con
                  excelencia. En nuestro portafolio de productos, podrás
                  encontrar variedad de salsas, con diferentes niveles de
                  picante.
                </p>
              </div>
              <a
                className="content-whatsApp"
                href="https://api.whatsapp.com/send/?phone=573014484996&text&type=phone_number&app_absent=0"
                title="Whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <IconWhatsapp className="logo-whatsapp" />
                <p className="txt-wsp">Contactar Asesor</p>
              </a>
            </div>
            <div className="item-content-right">
              <picture>
                <ImageBanner />
              </picture>
            </div>
          </div>
        </div>
        <div className="content-ourProduct">
          <div className="content-ourProduct-title">
            <p className="content-ourProduct-txt-title">Nuestros productos</p>
            <p className="content-ourProduct-txt-subtitle">
              Descripción de nuestras tres espectaculares salsas
            </p>
          </div>
          <div className="content-ourProduct-card">
            <div className="items-content-ourProduct">
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageChingona className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">La Chingona</p>
                  <p className="item-subtext">
                    La Chingona es una deliciosa salsa picante elaborada con
                    chiles de árbol tatemados, lo que le da un sabor ahumado y
                    profundo. Su intensidad de picor varía dependiendo de la
                    cantidad de chiles que se utilicen, pero en general es una
                    salsa bastante picante. Es ideal para acompañar empanadas,
                    tacos, enchiladas, carnes, chicharrón y otros platos típicos
                    colombianos. Su nombre refleja su sabor intenso y atrevido,
                    ¡una verdadera chingonería! esta es la mezcla favorita de la
                    cocina mexicana y colombiana.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-content-ourProduct">
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageGuera className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">La Güera</p>
                  <p className="item-subtext">
                    La Güera es una deliciosa salsa que combina el dulce sabor
                    de la piña con el ligero picor de los chiles poblanos y
                    chiles mirasol. Es una salsa fresca y vibrante que se
                    utiliza comúnmente en platos como pizzas, empanadas, papas y
                    carnes. La piña le da un toque tropical y dulce que
                    equilibra perfectamente con la intensidad de los chiles. Su
                    nombre "La Güera" hace referencia a su color claro y a su
                    sabor suave y único. Es una excelente opción para aquellos
                    que buscan experimentar con nuevos sabores y agregar un
                    toque fresco y tropical a sus platillos. ¡Prueba La Güera! y
                    experimenta el auténtico sabor de la comida
                    colombiana y mexicana.
                  </p>
                </div>
              </div>
            </div>
            <div className="items-content-ourProduct">
              <div className="items-content-ourProduct-card">
                <p className="item-circle-id">
                  <ImageChula className="logo" />
                </p>
                <div className="content-item-text">
                  <p className="item-text">La Chula</p>
                  <p className="item-subtext">
                    La Chula es una salsa única que fusiona la tradición
                    colombiana con la salsa tártara y la mexicana con los chiles
                    chilaca. El resultado es una salsa cremosa y ligeramente
                    picante que se utiliza para acompañar una gran variedad de
                    platos. La salsa tártara le da una textura suave y cremosa,
                    mientras que los chiles chilaca le añaden un toque de sabor
                    ahumado y un nivel medio de picor. La combinación de sabores
                    es única y deliciosa, lo que hace que La Chula sea una salsa
                    imprescindible para aquellos que buscan experimentar con
                    nuevos sabores. Su nombre "La Chula" hace referencia a su
                    sabor audaz y picante, lo que la convierte en una excelente
                    opción para agregar a tus platos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-consultant support">
          <div className="items-consultant">
            <p className="text-support">
              ¿Quieres saber más de nuestros productos?
            </p>
            <p className="subtextSupport">
              Contacta con un asesor para conocer más acerca de nuestras
              deliciosas salsas
            </p>
            <a href="https://api.whatsapp.com/send/?phone=573014484996&text&type=phone_number&app_absent=0">
              <button className="buttonSupport">Hablar con un Asesor</button>
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}

export default Inicio;
