import React from 'react';


export function About() {
    return (
     <div className='cont'>
       <h1>Sobre mi!</h1> 
       <h3>Mi nombre es Santiago y he creado esta App para un proyecto individual en Henry</h3>
       <hr/>
       <h4>Las tecnologias implementadas son :</h4>
           <p>React</p>
           <p>Redux (Storage)</p>
           <p>Express (Servidor)</p>
           <p>PostgreSQL (Base de Datos)</p>
           <p>Sequepze (ORM)</p>
       </div>
    )
};

export default About