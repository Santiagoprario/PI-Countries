import React , { useEffect, useState} from 'react';
import './countries.css';
import Country from '../Country/Country';
import { connect, useDispatch , useSelector } from 'react-redux';
import { getCountries }from '../../Actions/actions';

export const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const activities = useSelector(state => state.activities);
  const allcountries = useSelector(state => state.allcountries)
  const [input,setInput] = useState({
    paises:countries,
    continent:false,
    search:'',
    filter:'ASC',
    filterName:'Z to A',
    activities : ''
  })

  const [page ,setPage] = useState(0)


  let pageSize= 10;

  useEffect(() => {
    dispatch(getCountries(page , pageSize ,input.filter ));
  }, [page , input.filter , input.paises , input.continent])


  let numpag = 10 * page
  
  function handlepagenext () {
    if(page===24) return page;
    if(input.continent) {
      setInput({
        ...input,
        paises: input.paises.slice(numpag,numpag+10)
      })
    }
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
    setPage(0)
    if(input.filter === 'ASC') {
      setInput({
        ...input,
        continent:false,
        search: '',
        filter:'DESC',
        filterName:'A to Z'
      })
    } else if (input.filter === 'DESC') {
      setInput({
        ...input,
        filter:'ASC',
        filterName:'Z to A'
      })
    } else {
      setInput({
        ...input,
        search: '',
        continent:false,
        filter:'ASC',
        filterName:'Z to A'
      })
    } 
   }
   
   const contFilter = () => {
    setInput({
      ...input,
      search:'',
      paises : allcountries.filter(p => p.continent === input.continent)
    })
   }

  // tendria que hacer un slice (0,9)  o ()
  //

   const pobFilterdown = () => {
    setPage(0)
    setInput({
      ...input,
      search: '',
      continent:false,
      filter: 'DOWN'
    })
   }
   const pobFilterup = () => {
    setPage(0)
    setInput({
      ...input,
      search: '',
      continent:false,
      filter: 'UP'
    })
   }

  const handleFilterChange = (event) => {
    setInput({
      ...input,
      paises : allcountries
    })
    
    
    let arr1 = allcountries;
    var str = event.target.value;
    var arr2 = arr1.filter(e => {
        var s1 = e.name.toLowerCase();
        var s2 = str.toLowerCase();
        return (s1.includes(s2))
    });
    setInput({
        ...input,
        [event.target.name]: event.target.value,
        paises : arr2
    })
}

const handleActivity =  () => {
  if(input.activities === '') return false;
  console.log(activities)
  let i = input.activities - 1;
  let activity = activities ? activities : false;
  let countries = activity[i].Countries
  console.log(countries)
  setInput({
     ...input,
     paises : countries
    })
}

const handlecont = () => {
  setPage(0)
  setInput({
    ...input,
    continent: true,
    activities: ''
  })
}

const handleAct = () => {
  setInput({
    ...input,
    paises: allcountries.slice(numpag,numpag+10),
    continent:true
  })
}
 
   return (
             
            <div className='contenedor' >
                <div className='buttons'>
                <input name='search' value={input.search}  onChange={handleFilterChange} onClick={handlecont}
              placeholder='Buscar Pais...' />
                <button className='btnpage2'  onClick={filter}>{input.filterName}</button>
                <button onClick={pobFilterdown}>Mas Poblados</button>
                <button onClick={pobFilterup}>Menos Poblados</button>
                
                
                <select 
                name='continent' 
                value={input.continent} 
                onClick={handlecont}
                onChange={handleInputChange} 
                defaultValue='DEFAULT'
                
               >
					<option name='DEFAULT' value=''>                                   
						Buscar por Continente...                       
					</option>
					<option value='Africa'>Africa</option>
          <option value='Americas'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='Oceania'>Oceania</option>
				</select> 
        <button onClick={contFilter}>Go!</button>
        <select name='activities' value={input.activities} onChange={handleInputChange} onClick={handleAct} defaultValue='DEFAULT' >
					<option  name='DEFAULT' value='' >                                   
						Buscar por Actividad...                       
					</option>
          {
						activities &&                   
							activities.map( act => (								
								<option  key={act.id} value={act.id}>                                   
									{act.name}                            
								</option>								        
							))
					}
				</select> 
        <button onClick={handleActivity}>Go!</button>
                </div>
                 <div className='cards'>
               {input.continent ? input.paises.map(pais => <Country
               key={pais.idCountry}
               idCountry={pais.idCountry}
               flag={pais.flag}
               name={pais.name}
               continent={pais.continent}
                />): countries.map( pais => <Country
                  key={pais.idCountry}
                  idCountry={pais.idCountry}
                  flag={pais.flag}
                  name={pais.name}
                  continent={pais.continent}
                   />) 
              }
                </div>
                <div className='buttons'>
              <button className='btnpage' onClick={handlepageprev}>《 Anterior</button>
              <p>{page + 1}</p>
              <button className='btnpage'  onClick={handlepagenext}>Siguiente 》</button>
                  </div>
            </div>
          );   
}


export default connect(null, null)(Countries) ;

