import React from "react";
import './projects.css';

import nav1 from '../../../Img/Projetos/nav1.png';
import nav2 from '../../../Img/Projetos/nav2.png';
import nav3 from '../../../Img/Projetos/nav3.png';

export const Projects = ()=> {
    
    const projects = ()=> {
        const arr = [ nav2, nav3, nav1 ];

        return arr.map((val, i, arr)=> 
            <div className="project">
                <img src={val} alt="" />
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