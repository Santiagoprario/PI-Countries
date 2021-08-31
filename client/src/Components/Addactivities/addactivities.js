import React , {useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './addactivities.css';
import axios from 'axios';
import { getAllCountries } from '../../Actions/actions';
import { connect } from 'react-redux';

export function  AddActivity(props) {
  const paises = useSelector(state => state.allcountries); 
  const [input , setInput] = useState({
      name: '',
      difficulty: 1,
      duration:1,
      season:'',
      countries:[]
    })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
    console.log('entro')
    return;
  },[dispatch])

   const handleInputChange = function(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  const clean = (e) => {
    setInput({
      ...input,
      countries: []
     })
  }

  const submit = function () {
    let { name , difficulty , duration , season , countries } = input;
    axios.post('http://localhost:3001/activity',
    { name, difficulty, duration , season , countries })
    .then(r => 
      console.log(r))
  }
  
  const  addCountry = (e) => {
    setInput({
      ...input,
      [e.target.name]:
      [...input.countries,
       e.target.value] 
     })
    }
 
  return (
    <div className='form'>
    <form onSubmit={submit} className='flex'>
      <div>
      <h2 className='title-act'>Agregar Actividad Turistica</h2>
       <hr />
      </div>
        <input className='input' placeholder='Nombre de la Actividad' type="text" name='name' value={input.name} onChange={(e) => handleInputChange(e)}/>
        <label>Dificultad</label>
        <input className='input' type="range" name="difficulty"  min="1" max="5" step="1" value={input.difficulty}
         onChange={(e) => handleInputChange(e)}/>
        <input className='input' placeholder='Duracion de la Actividad' type='number' name='duration' min='1' max='24' value={input.duration} onChange={(e) => handleInputChange(e)}/> 
        <select className='input' name='season' value={input.season} defaultValue='DISABLED' onChange={(e) => handleInputChange(e)}>
        <option  value='DISABLED'>Seleccione una estacion</option>
          <option  value='otono'>Otoño</option>
          <option  value='invierno'>Invierno</option>
          <option  value='primavera'>Primavera</option>
          <option  value='verano'>Verano</option>
        </select >
        <span className='input'>Selecciona los paises a asignarle la actividad </span>
				<select className='input' name='countries' onChange={addCountry} defaultValue='DEFAULT' >
					<option name='DEFAULT' value=''>                                   
						Paises...                         
					</option>
					{
						paises &&                   
							paises.map( pais => (								
								<option name={input.countries} key={pais.idCountry} value={pais.idCountry}>                                   
									{pais.name}                            
								</option>								        
							))
					}
				</select>  
       <input className='input' type="text" name='countries' value={input.countries}  onChange={(e) => handleInputChange(e)}/>
         <div className='container-button'>  
       <button className='btn1' onClick={clean}>Limpiar Paises</button>
     <input className='btn1' type="submit" />
     </div>
    </form>
    </div>
  )
 }



const mapStateToProps = state => {
  return {
    paises : state.allcountries
  }
}

export default connect(mapStateToProps, null)(AddActivity)

// Ruta de creación de actividad turística: debe contener

// [x] Un formulario controlado con los siguientes campos
// Nombre
// Dificultad
// Duración
// Temporada
// [x] Posibilidad de seleccionar/agregar varios países en simultaneo
// [x] Botón/Opción para crear una nueva actividad turística