import React from "react";
import Footer from "../Footer/Footer";
import { FaRegCheckCircle } from "react-icons/fa";
import imageChingona from "../../assets/souces/La_Chingona-PhotoRoom.png-PhotoRoom-removebg-preview.png";
import imageChula from "../../assets/souces/La_Chula-PhotoRoom.png-PhotoRoom-removebg-preview.png";
import imageGuera from "../../assets/souces/La_Güera_1-PhotoRoom.png-PhotoRoom-removebg-preview.png";
import iconPayment from "../../assets/icons/icon-payment.png";
import whatsappPayment from "../../assets/icons/Wp-payment.png";
import enviosPayment from "../../assets/icons/icon-envio.png";
import facturaPayment from "../../assets/icons/icon-factura.png";
import "../../App.css";
function ImageChingona() {
  return (
    <img
      src={imageChingona}
      alt="imageChingona"
      className="image-content-price"
    />
  );
}
function ImageChula() {
  return (
    <img src={imageChula} alt="imageChula" className="image-content-price" />
  );
}
function ImageGuera() {
  return (
    <img
      src={imageGuera}
      alt="imageGuera"
      className="image-content-price-guera"
    />
  );
}
function IconPayment() {
  return <img src={iconPayment} alt="iconPayment" />;
}
function WhatsappPayment() {
  return <img src={whatsappPayment} alt="whatsappPayment" width={65} />;
}
function EnviosPayment() {
  return <img src={enviosPayment} alt="enviosPayment" width={75} />;
}
function FacturaPayment() {
  return <img src={facturaPayment} alt="facturaPayment" width={65} />;
}
class Precios extends React.Component {
  render = () => {
    return (
      <div className="content-prices-container">
        <div className="content-prices">
          <div className="item-content-prices">
            <div className="content-plan">
              <div className="items-content-plan">
                <p className="txt-title-prices">
                  Salsas perfectas para tu paladar
                </p>
                <p className="txt-subtitle-prices">
                  Prueba nuestras deliciosas salsas. Y elige la que prefieras
                  para acompañar tus platos favoritos.
                </p>
                <hr></hr>
                <div className="item-grid-plan">
                  <div className="content-grid">
                    <div class="txt-badged-content">
                      <p class="txt-badged">Más Popular</p>
                      <span class="animate-ping pings"></span>
                    </div>
                    <p className="card-title">La Chingona</p>
                    <p className="card-subtext">
                      <ImageChingona className="logo" />
                    </p>
                    <p className="card-price">
                      <span className="card-price-simbol">$</span>
                      <span className="card-price-span">12.000</span>
                      <span className="text-currency">COP</span>
                    </p>
                    <p className="card-data-plan">*IVA incluido</p>
                    <div className="items-content-list">
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Resalta el sabor de tus comidas
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Sin azúcar añadida
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Totalmente natural y saludable
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Nuestros provedores son locales
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Perfecta para acompañar asados
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Usted escoge el nivel de picor
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Bajo <span>🌶️</span>
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Medio <span>🌶️🌶️</span>
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Alto <span>🌶️🌶️🌶️</span>
                        </p>
                      </div>
                    </div>
                    <div className="btn">
                      <a
                        className="btn-empren"
                        href="https://api.whatsapp.com/send/?phone=573014484996&text=Hola familia Los Chiles Hermanos!; estoy interesado en tu salsa La Chingona&type=phone_number&app_absent=0"
                      >
                        Comprar ahora
                      </a>
                    </div>
                  </div>
                  <div className="content-grid">
                    <p className="card-title">La Güera</p>
                    <p className="card-subtext">
                      <ImageGuera className="logo" />
                    </p>
                    <p className="card-price">
                      <span className="card-price-simbol">$</span>
                      <span className="card-price-span">12.000</span>
                      <span className="text-currency">COP</span>
                    </p>
                    <p className="card-data-plan">*IVA incluido</p>
                    <div className="items-content-list">
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Resalta el sabor de tus comidas
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Sin azúcar añadida
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Totalmente natural y saludable
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Nuestros provedores son locales
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Dale un toque dulce y picante a tus comidas
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Usted escoge el nivel de picor
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Bajo <span>🌶️</span>
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Medio <span>🌶️🌶️</span>
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Alto <span>🌶️🌶️🌶️</span>
                        </p>
                      </div>
                    </div>
                    <div className="btn">
                      <a
                        className="btn-empren"
                        href="https://api.whatsapp.com/send/?phone=573014484996&text=Hola familia Los Chiles Hermanos!; estoy interesado en tu salsa La Güera&type=phone_number&app_absent=0"
                      >
                        Comprar ahora
                      </a>
                    </div>
                  </div>
                  <div className="content-grid">
                    <p className="card-title">La Chula</p>
                    <p className="card-subtext">
                      <ImageChula className="logo" />
                    </p>
                    <p className="card-price">
                      <span className="card-price-simbol">$</span>
                      <span className="card-price-span">12.000</span>
                      <span className="text-currency">COP</span>
                    </p>
                    <p className="card-data-plan">*IVA incluido</p>
                    <div className="items-content-list">
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Resalta el sabor de tus comidas
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Sin azúcar añadida
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Totalmente natural y saludable
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Nuestros provedores son locales
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Perfecta para acompañar tus comidas rápidas
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Usted escoge el nivel de picor
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Bajo <span>🌶️</span>
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Medio <span>🌶️🌶️</span>
                        </p>
                      </div>
                      <div className="item-list-plan">
                        <p className="txt-item-prices">
                          <span className="el-icon-success">
                            <FaRegCheckCircle></FaRegCheckCircle>
                          </span>
                          Alto <span>🌶️🌶️🌶️</span>
                        </p>
                      </div>
                    </div>
                    <div className="btn">
                      <a
                        className="btn-empren"
                        href="https://api.whatsapp.com/send/?phone=573014484996&text=Hola familia Los Chiles Hermanos!; estoy interesado en tu salsa La Chula&type=phone_number&app_absent=0"
                      >
                        Comprar ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-grid-paymet">
                <div className="item-txt-payment">
                  <div className="content-image">
                    <IconPayment></IconPayment>
                  </div>
                  <div className="content-info">
                    <div className="text-payments">
                      Diferentes métodos de pago
                    </div>
                    <div className="description-payments">
                      Puede pagar sus pedidos en Efectivo directamente al
                      momento de entrega. Ofrecemos diferentes métodos de pago
                      como cuenta Bancolombia, Nequi, Daviplata y más.
                    </div>
                  </div>
                </div>
                <div className="item-txt-payment">
                  <div className="content-image">
                    <WhatsappPayment></WhatsappPayment>
                  </div>
                  <div className="content-info">
                    <div className="text-payments">
                      Pedidos directamente con nuestros asesores
                    </div>
                    <div className="description-payments">
                      Puede escribir a nuestra línea móvil a través de WhatsApp:
                      +57 301 4484996
                    </div>
                  </div>
                </div>
                <div className="item-txt-payment">
                  <div className="content-image">
                    <EnviosPayment></EnviosPayment>
                  </div>
                  <div className="content-info">
                    <div className="text-payments">
                      Envíos seguros a todo el país
                    </div>
                    <div className="description-payments">
                      Ofrecemos envíos a cualquier parte del país, trabajamos a
                      diario para hacer que tu entrega sea efectiva y segura.
                    </div>
                  </div>
                </div>
                <div className="item-txt-payment">
                  <div className="content-image">
                    <FacturaPayment></FacturaPayment>
                  </div>
                  <div className="content-info">
                    <div className="text-payments">
                      Facturación electrónica a nuestros clientes
                    </div>
                    <div className="description-payments">
                      Ofrecemos servicio de facturación electrónica
                      personalizada desde una sola aplicación colaborativa:
                      facturas en PDF por correo electrónico.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  };
}
export default Precios;
