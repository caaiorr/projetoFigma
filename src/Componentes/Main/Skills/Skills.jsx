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
            return (
                <div key={i} className="renderedSkill">
                   <img src={e.icon} alt="CSS" />
                   <div className="containerNameBar">
                        <h2>{e.name}</h2>
                        <div className={`container${e.name}`}>
                            <div className="coloredBar"></div>
                            <div className="uncoloredBar"></div>
                        </div>
                   </div>
                </div>
            );
        });

        return renderSkills;
    };

    return(
        <section className="containerSkills">
            <div className="contH1">
                <h1>Skills</h1>
            </div>
            <div className="skills">
                {showSkills()}
            </div>
        </section>
    );
};