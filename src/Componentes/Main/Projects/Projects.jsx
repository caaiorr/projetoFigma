import React from "react";
import './projects.css';

import nav1 from '../../../Img/Projetos/nav1.png';
import nav2 from '../../../Img/Projetos/nav2.png';
import nav3 from '../../../Img/Projetos/nav3.png';

export const Projects = ()=> {
    
    const projects = ()=> {

        const arr = [ { img: nav2, link: 'https://www.google.com.br/?hl=pt-BR'}, { img: nav3, link: 'https://www.google.com.br/?hl=pt-BR' }, { img: nav1, link: 'https://www.google.com.br/?hl=pt-BR' } ];

        return arr.map((e, i, arr)=> 
            <div key={i} className="project">
                <a href="https://www.google.com.br/?hl=pt-BR" target="_blank">Acessar</a>
                <div className="containerImg">
                    <img src={e.img} alt="" />
                </div>
            </div>
        );
    };

    return (
        <section className="allProjects">
            <h2>Projetos</h2>
            <div className="containerProjects">
                {projects()}
            </div>
        </section>
    );
};