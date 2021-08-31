import React , { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getAllActivities, getDetail } from '../../Actions/actions';
import './detailcountry.css'
import { Link , useParams} from 'react-router-dom';
import formatNumber from '../../Functions/functions';
import { Countries } from '../Countries/countries';

export function Detailcountry (id) {
  const dispatch = useDispatch();
  const details = useSelector(state => state.countriesDetail);
  const activities = useSelector(state =>state.activities);
  const {idCountry}= useParams();
  const [state, setState] = useState({
    nombres : [],
    text: 'Ver Actividades'
  })
  

  console.log(idCountry) // me guardo el id del pais para hacer el pedido de las actividades
  
  useEffect(() => {
    dispatch(getDetail(id))
  },[id, activities, dispatch ,state.nombres ])

  console.log(activities)

  let nombres = [];
  let change =false;

  const handleActivity =  () => {
    let id = idCountry;
    if(state.text === 'Ocultar Actividades') {
      console.log('entro en text')
      setState({
        ...state,
        nombres : [],
       text : 'Ver Actividades'
      })
    } else {
    let activity = activities ? activities : false;
    activity.forEach(element => {
      element.Countries.forEach(ele => {
       if(ele.idCountry === id ) {
         nombres.push(element.name)
       }
      })
    });
    setState({
           ...state,
           nombres: nombres,
           text: 'Ocultar Actividades'
         })}
    console.log(nombres)
      return nombres ; 
    } 
    
  
  
 



   return (
            <div className='container'>
              <div>
                
              </div>
              <div className='box'>
                <div>
                  <img className='imgflag' src={details.flag} alt='...'/>
                </div>
                <div>
                  <h1 className='title' >{details.name}</h1>
                  <hr />
                  <h4>Codigo Pais: {details.idCountry}</h4>
                  <h4>Capital:{details.capital}</h4>
                  <h4>Continente: {details.continent}H</h4>
                  <h4>Subregion: {details.subregion} </h4>
                  <h4>Area: {formatNumber(details.area)} Km<sup>2</sup></h4>
                  <h4>Poblacion: {details.population !==0 ? formatNumber(details.population) : 'No se ha encontrado la Poblacion de este Pais.'  }</h4>
                   <h4>Presione el boton para ver las Actividades</h4>
                   <h4>{state.nombres.length > 0 && state.nombres.map(nom => <li className='listOne'  key={nom}>•{nom}</li>)}</h4>
                <button className='btn' onClick={handleActivity}>{state.text}</button>
                </div>
                
              </div>
              <div>
              <Link to='/home'>
             <button className='btn' >Regresar</button>
             </Link>
             
             
             </div>
            </div>
          );   
}


export default Detailcountry ;


// Ruta de detalle de país: debe contener

// [x] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [x] Código de país de 3 letras (id)
// [x] Capital
// [x] Subregión
// [x] Área (Mostrarla en km2 o millones de km2)
// [x] Población
// [x] Actividades turísticas con toda su información asociada