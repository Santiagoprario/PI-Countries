import React , { useEffect, useState} from 'react';
import './countries.css';
import Country from '../Country/Country';
import { connect, useDispatch , useSelector } from 'react-redux';
import { getCountries , getAllCountries, getAllActivities }from '../../Actions/actions';
import { Link } from 'react-router-dom';


export const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const activities = useSelector(state => state.activities)
  const allcountries = useSelector(state => state.allcountries)
  const [input,setInput] = useState({
    paises:countries,
    continent:'',
    search:'',
    filter:'ASC',
    filterName:'Z to A'
  })

  const [page ,setPage] = useState(0)


  let pageSize= 10;

  useEffect(() => {
    dispatch(getCountries(page , pageSize ,input.filter ));
    dispatch(getAllCountries());
    dispatch(getAllActivities())
  }, [page , input.filter , input.paises])
   
  function handlepagenext () {
    setPage(page +1)
  }
  function handlepageprev () {
    if(page===0) return page;
    setPage(page -1)
  }

  const handleInputChange = function(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  

   const filter = () => {
    if(input.filter === 'ASC') {
      setInput({
        ...input,
        filter:'DESC',
        filterName:'A to Z'
      })
    } else if (input.filter === 'DESC') {
      setInput({
        ...input,
        filter:'ASC',
        filterName:'Z to A'
      })
    } 
   }
   
   const contFilter = () => {
    setInput({
      ...input,
      paises : countries.find(p => p.continent === input.search)
    })
   }
   

  let country;

   const search = () => {
    console.log(allcountries)
    let country = allcountries.find(c => c.name.toUpperCase() === input.search.toUpperCase());
    console.log(country)
    setInput({
      ...input,
      
    })
  }



 
   return (
             
            <div className='contenedor' >
              <div>
              <input name='search' value={input.search} onChange={handleInputChange} placeholder='Buscar Pais...' />
               <button onClick={search}>Go!</button>
              </div>
              <div className='buttons'>
              <button className='btnpage' onClick={handlepageprev}>《 Anterior</button>
              <p>{page + 1}</p>
              <button className='btnpage'  onClick={handlepagenext}>Siguiente 》</button>
                  </div>
                <div className='buttons'>
                <button className='btnpage2'  onClick={filter}>{input.filterName}</button>
                <select name='continent' 
                value={input.continent} 
                onChange={contFilter} 
                defaultValue='DEFAULT'
                onClick={handleInputChange} >
					<option name='DEFAULT' value=''>                                   
						Buscar por Continente...                       
					</option>
					<option value='Africa'>Africa</option>
          <option value='Americas'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='Oceania'>Oceania</option>
				</select> 

        <select name='activities' value={activities} onChange={handleInputChange} defaultValue='DEFAULT' >
					<option name='DEFAULT' >                                   
						Buscar por Actividad...                       
					</option>
          {
						activities &&                   
							activities.map( act => (								
								<option name={input.countries} key={act.id} value={act.id}>                                   
									{act.name}                            
								</option>								        
							))
					}
				</select> 
                </div>
                 <div className='cards'>
               {countries.map( pais => <Country
               key={pais.idCountry}
               idCountry={pais.idCountry}
               flag={pais.flag}
               name={pais.name}
               continent={pais.continent}
                />)}
                </div>
            </div>
          );   
}

const mapStateToProps = state => {
  return {
    countries : state.countries,
    activities : state.activities
  }
}

export default connect(null, null)(Countries) ;

