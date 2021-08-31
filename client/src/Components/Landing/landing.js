import React from 'react';
import './landing.css';

import { Link } from 'react-router-dom'


export function Landing() {
    return (
     <div>
         <section className='sectionStyle' >
             <div className='titles'>
                 <h1 className='title'>Bienvenidos!</h1>
                 <h2>Welcome!</h2>
                 <h3>Bem-Vindo!</h3>
                 <h4>Benvenuto!</h4>
                 <h5>Willkommen!</h5>
             </div>
             <Link to='/home'>
             <button className='button' >Ingresar</button>
             </Link>
         </section>
     </div>
    )
};

export default Landing