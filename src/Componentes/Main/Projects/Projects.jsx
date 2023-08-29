import React from "react";
import './projects.css';



export const Projects = ()=> {
    
    const projects = ()=> {
        const arr = [ 'Olá', 'Hello', 'Oi' ];

        return arr.map((val, i, arr)=> 
            <div className="project">
                <h4>{val}</h4>
            </div>
        );
    }

    return (
        <section className="allProjects">
            <h2>Projetos</h2>
            <div className="containerProjects">
                {projects()}
            </div>
        </section>
    )
};