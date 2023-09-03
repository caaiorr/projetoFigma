import React from "react";
import './sobre.css';

import star from '../../../Img/Carrossel/star.png';

export const Sobre = ()=> {

    return (
        <section className="containerSobre">
            <h2>Sobre</h2>
            <div className="lineCarrosel"></div>
            
            <div className="containerEtItem">
                <div className="itemEt">
                    <div className="connect left"></div>
                    <div className="connect"></div>
                </div>
                <div className="itemEt">
                    <div className="connect left"></div>
                    <div className="connect"></div>
                </div>
                <div className="itemEt">
                    <div className="connect left"></div>
                    <div className="connect"></div>
                </div>
                <div className="itemEt">
                    <div className="connect left"></div>
                    <div className="connect"></div>
                </div>
                <div className="itemEt">
                    <div className="connect left"></div>
                    <div className="connect"></div>
                </div>
            </div>
            <div className="containerStars">
                <div className="itemStar">
                    <img src={star} alt="" />
                </div>
                <div className="itemStar">
                    <img src={star} alt="" />
                </div>
                <div className="itemStar">
                    <img src={star} alt="" />
                </div>
                <div className="itemStar">
                    <img src={star} alt="" />
                </div>
                <div className="itemStar">
                    <img src={star} alt="" />
                </div>
            </div>
        </section>
    );
};