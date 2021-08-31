import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';


export function Country ({flag , name , continent, idCountry} ) {
    
    return (
        <div className='countryCard'><Link to={'/countries/'+ idCountry} >
            <img className='img' src= {flag} alt='...'/></Link>
              <div className='list'>
              <h3 className='textCard'>{name}</h3>
              </div>
              <div >
              <h4 className='textCard'>{continent}</h4>
              </div>
              
        </div>
        
    )
};

export default Country;