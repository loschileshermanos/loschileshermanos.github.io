import React from "react";
import "../../App.css";
import Footer from "../Footer/Footer";
import varjo from "../../assets/Tiendas/varjo.png";
import varjo1 from "../../assets/Tiendas/varjo.png";
import varjoStore from "../../assets/Tiendas/Varjo store.jpg";
import comicFood from "../../assets/Tiendas/ComicFood.jpeg";
import comicFood1 from "../../assets/Tiendas/ComicFood.jpeg";
import comicFoodStore from "../../assets/Tiendas/ComicFood-store.jpeg";
import panchoVilla from "../../assets/Tiendas/PanchoVilla.jpeg";
import panchoVilla1 from "../../assets/Tiendas/PanchoVilla.jpeg";
import panchoVillaStore from "../../assets/Tiendas/PanchoVillaStore.jpeg";
import distribucionesMyE from "../../assets/Tiendas/DistribucionesM&E.png";
import distribucionesMyE1 from "../../assets/Tiendas/DistribucionesM&E.png";
import distribucionesMyEStore from "../../assets/Tiendas/DistribucionesM&E-Store.jpeg";
import { ReactComponent as IconHome } from "../../assets/icons/icons8-casa.svg";
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import banderaColombia from "../../assets/icons/bandera colombia.png";
import { ImLibrary } from "react-icons/im";

function Varjo() {
  return <img src={varjo} alt="varjo" className="image-top" />;
}
function Varjo1() {
  return <img src={varjo1} alt="varjo1" className="image-top-iner" />;
}
function VarjoStore() {
  return <img src={varjoStore} alt="varjoStore" className="image-store" />;
}
function ComicFood() {
  return <img src={comicFood} alt="comicFood" className="image-top" />;
}
function ComicFood1() {
  return <img src={comicFood1} alt="comicFood1" className="image-top-iner" />;
}
function ComicFoodStore() {
  return (
    <img src={comicFoodStore} alt="comicFoodStore" className="image-store" />
  );
}
function PanchoVilla() {
  return <img src={panchoVilla} alt="panchoVilla" className="image-top" />;
}
function PanchoVilla1() {
  return (
    <img src={panchoVilla1} alt="panchoVilla1" className="image-top-iner" />
  );
}
function PanchoVillaStore() {
  return (
    <img
      src={panchoVillaStore}
      alt="panchoVillaStore"
      className="image-store"
    />
  );
}
function DistribucionesMyE() {
  return (
    <img
      src={distribucionesMyE}
      alt="distribucionesMyE"
      className="image-top"
    />
  );
}
function DistribucionesMyE1() {
  return (
    <img
      src={distribucionesMyE1}
      alt="distribucionesMyE1"
      className="image-top-iner"
    />
  );
}
function DistribucionesMyEStore() {
  return (
    <img
      src={distribucionesMyEStore}
      alt="distribucionesMyEStore"
      className="image-store"
    />
  );
}
function BanderaColombia() {
  return (
    <img
      src={banderaColombia}
      alt="banderaColombia"
      className="image-bandera-colombia"
    />
  );
}
class Tiendas extends React.Component {
  render = () => {
    return (
      <div className="register-content-container">
        <div className="register-content">
          <h1 class="register-title">
            Puntos de venta
          </h1>
          <p className="txt-subtitle-store">Podras encontrar nuestras deliciosas salsas en estos puntos de venta autorizados.</p>
          <hr></hr>
          <div className="content-tiendas">
            <div className="grid-stores">
              <div className="item-for-grid">
                <div className="select-a-hov">
                  <div className="txt-store-top">
                    <Varjo></Varjo>
                    <p className="txt-store-lg">Varjo cortes al barril</p>
                  </div>
                  <div className="hover12">
                    <div className="text-inter-image">
                      <div className="content-image-iner">
                        <Varjo1></Varjo1>
                      </div>
                      <div className="item-txt-iner">
                        <IconHome className="svg-inter" />
                        <p className="txt-image-store">
                          Varjo cortes al barril
                        </p>
                      </div>
                      <div className="item-txt-iner">
                        <FaStar className="svg-inter" />
                        <p className="txt-image-store">
                          Comidas al barril y asados
                        </p>
                      </div>
                      <div className="item-txt-iner">
                        <ImLocation2 className="svg-inter" />
                        <BanderaColombia></BanderaColombia>
                        <p className="txt-image-store">Barrancabermeja</p>
                      </div>
                      <a
                        href="https://www.instagram.com/varjocortesalbarril/"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item-txt-iner tar-store"
                      >
                        <ImLibrary className="svg-inter"></ImLibrary>
                        <p className="txt-image-store">Ver tienda</p>
                      </a>
                    </div>

                    <figure className="figur-item">
                      <VarjoStore></VarjoStore>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="item-for-grid">
                <div className="select-a-hov">
                  <div className="txt-store-top">
                    <ComicFood></ComicFood>
                    <p className="txt-store-lg">Comic Food Ocaña</p>
                  </div>
                  <div className="hover12">
                    <div className="text-inter-image">
                      <div className="content-image-iner">
                        <ComicFood1></ComicFood1>
                      </div>
                      <div className="item-txt-iner">
                        <IconHome className="svg-inter" />
                        <p className="txt-image-store">Comic Food Ocaña</p>
                      </div>
                      <div className="item-txt-iner">
                        <FaStar className="svg-inter" />
                        <p className="txt-image-store">Restaurante temático</p>
                      </div>
                      <div className="item-txt-iner">
                        <ImLocation2 className="svg-inter" />
                        <BanderaColombia></BanderaColombia>
                        <p className="txt-image-store">Ocaña, N. de Sder.</p>
                      </div>
                      <a
                        href="https://www.instagram.com/comicfoodocana/"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item-txt-iner tar-store"
                      >
                        <ImLibrary className="svg-inter"></ImLibrary>
                        <p className="txt-image-store">Ver tienda</p>
                      </a>
                    </div>

                    <figure className="figur-item">
                      <ComicFoodStore></ComicFoodStore>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="item-for-grid">
                <div className="select-a-hov">
                  <div className="txt-store-top">
                    <PanchoVilla></PanchoVilla>
                    <p className="txt-store-lg">La Taqueria Pancho Villa</p>
                  </div>
                  <div className="hover12">
                    <div className="text-inter-image">
                      <div className="content-image-iner">
                        <PanchoVilla1></PanchoVilla1>
                      </div>
                      <div className="item-txt-iner">
                        <IconHome className="svg-inter" />
                        <p className="txt-image-store">
                          La Taqueria Pancho Villa
                        </p>
                      </div>
                      <div className="item-txt-iner">
                        <FaStar className="svg-inter" />
                        <p className="txt-image-store">Comida Mexicana</p>
                      </div>
                      <div className="item-txt-iner">
                        <ImLocation2 className="svg-inter" />
                        <BanderaColombia></BanderaColombia>
                        <p className="txt-image-store">Ocaña, N. de Sder.</p>
                      </div>
                      <a
                        href="https://www.instagram.com/lataqueriapanchovilla//"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item-txt-iner tar-store"
                      >
                        <ImLibrary className="svg-inter"></ImLibrary>
                        <p className="txt-image-store">Ver tienda</p>
                      </a>
                    </div>

                    <figure className="figur-item">
                      <PanchoVillaStore></PanchoVillaStore>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="item-for-grid">
                <div className="select-a-hov">
                  <div className="txt-store-top">
                    <DistribucionesMyE></DistribucionesMyE>
                    <p className="txt-store-lg">Distribuciones M&E</p>
                  </div>
                  <div className="hover12">
                    <div className="text-inter-image">
                      <div className="content-image-iner">
                        <DistribucionesMyE1></DistribucionesMyE1>
                      </div>
                      <div className="item-txt-iner">
                        <IconHome className="svg-inter" />
                        <p className="txt-image-store">Distribuciones M&E</p>
                      </div>
                      <div className="item-txt-iner">
                        <FaStar className="svg-inter" />
                        <p className="txt-image-store">Condimento y especias</p>
                      </div>
                      <div className="item-txt-iner">
                        <ImLocation2 className="svg-inter" />
                        <BanderaColombia></BanderaColombia>
                        <p className="txt-image-store">Gonzales, Cesar</p>
                      </div>
                      <a
                        href="https://www.instagram.com/distribucionesme"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item-txt-iner tar-store"
                      >
                        <ImLibrary className="svg-inter"></ImLibrary>
                        <p className="txt-image-store">Ver tienda</p>
                      </a>
                    </div>

                    <figure className="figur-item">
                      <DistribucionesMyEStore></DistribucionesMyEStore>
                    </figure>
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
export default Tiendas;
