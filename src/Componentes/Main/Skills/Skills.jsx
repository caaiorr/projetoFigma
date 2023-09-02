import React from "react";
import './skills.css';

import htmlIcon from '../../../Img/Skills/icone-html-ok.png';
import cssIcon from '../../../Img/Skills/icone-css-ok.png';
import javaScriptIcon from '../../../Img/Skills/icone-js-ok.png';
import phpIcon from '../../../Img/Skills/icone-php-ok.png';
import reactIcon from '../../../Img/Skills/icone-react-ok.png';
import sqlIcon from '../../../Img/Skills/icone-sql-ok.png';
import mysqlIcon from '../../../Img/Skills/icone-mysql-ok.png';

export const Skills = ()=> {

    const showSkills = ()=> {
        const skillsObj = [
            { name: 'HTML-5', icon: htmlIcon },
            { name: 'CSS-3', icon: cssIcon },
            { name: 'JavaScript', icon: javaScriptIcon },
            { name: 'React', icon: reactIcon },
            { name: 'PHP', icon: phpIcon },
            { name: 'SQL', icon: sqlIcon },
            { name: 'MySql', icon: mysqlIcon },
        ];

        const renderSkills = skillsObj.map((e, i, arr)=> {
            let progress = 0;
            const progress70 = e.name === 'HTML-5' || e.name === 'CSS-3' || e.name === 'JavaScript' || e.name === 'SQL';
            const progress50 = e.name === 'React' || e.name === 'MySql';
            const progress20 = e.name === 'PHP';
            
            if(progress70){
                progress = 70;
            }
            if(progress50){
                progress = 35;
            }
            if(progress20){
                progress = 20;
            };

            return (
                <article key={i} className="renderedSkill">
                    <figure>
                        <img src={e.icon} alt="CSS" />
                    </figure>
                    <div className="containerNameBar">
                        <h2>{e.name}</h2>
                        <div className={`container${e.name}`}>
                            <progress className="teste14" max="100" value={progress}>{`${progress}%`}</progress>
                        </div>
                    </div>
                </article>
            );
        });

        return renderSkills;
    };

    return(
        <section className="containerSkills">
            <div className="contH2">
                <h2>Skills</h2>
            </div>
            <div className="skills">
                {showSkills()}
            </div>
        </section>
    );
};