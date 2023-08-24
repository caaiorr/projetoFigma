import React from "react";

import './menu.css';
import iconHeader from '../../../Img/iconeHeader.png';

export const Menu = ()=> {
    
    return(
        <section className="headerContainer"> 
            <div className="logoHeader">
                <img src={iconHeader} alt="iconHeader" />
            </div>
            <div className="headerRight">
                <div>
                    <nav className="opcoesHeader">
                        <a className="aDetalhe" href="https://www.google.com" target="blank">Item</a>
                        <a className="aDetalhe" href="#">Item</a>
                        <a className="aDetalhe" href="#">Item</a>
                        <a className="aDetalhe" href="#">Item</a>
                        <a className="aButton" href="#">CLICK</a>
                    </nav>
                </div>
            </div>
        </section>
    );
};
