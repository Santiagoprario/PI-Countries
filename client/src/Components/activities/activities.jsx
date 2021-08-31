import React, { useEffect , useState} from 'react'
import { connect } from 'react-redux'
import { useSelector , useDispatch } from 'react-redux';
import { getAllActivities } from '../../Actions/actions';

export const Activities = () => {
    const activities = useSelector(state => state.activities)
    const dispatch = useDispatch()
    const [estado, setEstado] = useState({
        countries : [],
        activity:0,
        actividad:activities[0]
    })

useEffect(() => {
   dispatch(getAllActivities());
}, [dispatch])

const handleInputChange =  function(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
  }


const search = () => {
    setEstado({
      ...estado,
     actividad : activities[estado.activities]
    } )
    console.log(estado.actividad)
}
   













    return (
        <div>
             <select name='activities'  onChange={handleInputChange} defaultValue='0' >
					<option name='DEFAULT' >                                   
						Buscar por Actividad...                       
					</option>
          {
						activities &&                   
							activities.map( act => (								
								<option name={estado.countries} key={act.id} value={act.Countries}>                                   
									{act.name}                            
								</option>								        
							))
					}
				</select> 
                <select>
                <option>
                    {/* {
                    estado.activities &&
                          estado.activities.map( act => (
                          <li>hola
                          </li>
                          ))
  
                    } */}
                </option>
                </select>
                <button onClick={search}>Go!</button>
        </div>
    )
}




const mapDispatchToProps = {
    
}

export default connect(null, mapDispatchToProps)(Activities)
