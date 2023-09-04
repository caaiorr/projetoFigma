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
            {   
                name: 'HTML-5', 
                icon: htmlIcon, 
                progress: 70 
            },
            { 
                name: 'CSS-3', 
                icon: cssIcon, 
                progress: 70 
            },
            { 
                name: 'JavaScript', 
                icon: javaScriptIcon, 
                progress: 70 
            },
            { 
                name: 'React', 
                icon: reactIcon, 
                progress: 40 
            },
            { 
                name: 'PHP', 
                icon: phpIcon, 
                progress: 40 
            },
            { 
                name: 'SQL', 
                icon: sqlIcon, 
                progress: 70 
            },
            { 
                name: 'MySql', 
                icon: mysqlIcon, 
                progress: 50 
            },
        ];

        const renderSkills = skillsObj.map((e, i, arr)=> {
            
            return (
                <article key={i} className="renderedSkill">
                    <figure>
                        <img src={e.icon} alt="CSS" />
                    </figure>
                    <div className="containerNameBar">
                        <h2>{e.name}</h2>
                        <div className={`container${e.name}`}>
                            <progress className="teste14" max="100" value={e.progress}>{`${e.progress}%`}</progress>
                        </div>
                    </div>
                </article>
            );
        });

        return renderSkills
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