import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../../img/logo.png';
import { useDispatch } from 'react-redux';
import { getCountries , getAllActivities , getAllCountries}from '../../Actions/actions';


export function NavBar() {

    const dispatch = useDispatch();


    useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities())
  }, [dispatch])






  return (
        <nav >
        <img src={logo} alt='...'/>
        <ul>
        <Link to='/'> <li className='dropbtn'> iWorld! </li> </Link>
        <Link to='/home'> <li className='dropbtn'> Home</li> </Link>
        <Link to='/addactivity'><li className='dropbtn'>Actividades </li> </Link>
        <Link to='/about'> <li className='dropbtn'> Sobre el Proyecto </li> </Link>
        </ul>
    </nav>
    )
};

export default NavBar;