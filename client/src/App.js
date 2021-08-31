import './App.css';
// import react from 'react';
import { Route } from 'react-router-dom';
import landing from './Components/Landing/landing';
import NavBar from './Components/Nav/NavBar';
import { Countries }from './Components/Countries/countries';
import addActivity from './Components/Addactivities/addactivities';
import Detailcountry from './Components/detailcountry/detailcountry';
import About from './Components/About/about';
import Activities from './Components/activities/activities';


function App() {
  return (
    <div className='App'>
    <Route exact path='/' component={landing} />
    <Route path='/' component={NavBar} />
    <Route path='/addactivity' component={addActivity} />
    <Route path='/activities' component={Activities}/>
    <Route path='/about' component={About}/>
    <Route exact path='/home' component={Countries}/>
    <Route exact path='/countries/:idCountry' 
    render= {({match}) => <Detailcountry id={match.params.idCountry} />}
        />
    </div>
  );
}

export default App;
