import React from "react";
import './sobre.css';

import star from '../../../Img/Carrossel/star.png';

export const Sobre = ()=> {

    const divs = [ 'divStar1', 'divStar2', 'divStar3', 'divStar4', 'divStar5' ];

    const centralizeStars = ()=> {
        const returnDivs = divs.map((_)=> {
            return(
                <div className="itemLine">
                    <div className="lineConnect left"></div>
                    <div className="lineConnect"></div>
                </div>
            );
        });
        return returnDivs;
    };

    const itemStar = ()=> {
        const returDivs = divs.map((_)=> {
            return(
                <div className="itemStar">
                    <img src={star} alt="" />
                </div>
            );
        });
        return returDivs;
    };

    return(
        <section className="containerSobre">
            <div className="containerSetaH2">
                <div className="seta setaLeft"></div>
                <h2>Sobre</h2>
                <div className="seta setaRight"></div>
            </div>
            <div className="lineCarrosel">
                {/* design */}
            </div>
            <div className="containerLine">
                {centralizeStars()}
            </div>
            <div className="containerStars">
                {itemStar()}
            </div>
            <div className="containerDescription">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore molestiae minima sequi, illum facilis tempora fugit ipsam maxime recusandae debitis dignissimos. Libero amet voluptatibus eligendi accusantium, fugit in commodi. Magni aliquam commodi unde voluptatem impedit sequi cum alias quo, eligendi illum autem dicta eos amet odit laborum fugit sapiente, dolore maxime incidunt debitis, in magnam facilis?</p>
            </div>
            <div className="lineDivision"></div>
        </section>
    );
};