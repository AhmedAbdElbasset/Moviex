import Search from '../../assets/icons8-search-48.png';
import { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
const Header=()=>{
    const [toggle,setToggle]=useState(false)
    function toggleHandler(){
        setToggle(prevState=>!prevState)
    }
    return(
    <div className='Head'>
        <div className={`toggle ${toggle?'active':''}`} onClick={toggleHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="Logo">
            <h1>Moviex</h1>
        </div>
        <div className={`bar ${toggle?'active':''}`}>
            <div className="nav">
                <NavLink to={'/Moviex'} className={({isActive})=>(isActive?'active':'')} end>home</NavLink>
                <NavLink to={'/Moviex/movies'} className={({isActive})=>(isActive?'active':'')}>Movies</NavLink>
                <NavLink to={'/Moviex/tv'} className={({isActive})=>(isActive?'active':'')}> TV Shows</NavLink>
                <NavLink to={'/Moviex/pericing'} className={({isActive})=>(isActive?'active':'')}>Pricing</NavLink>
                <NavLink to={'/Moviex/Contact'} className={({isActive})=>(isActive?'active':'')}>Conact</NavLink>
            </div>
            <div className="contact">
                <select className='lan'>
                    <option>En</option>
                    <option>Ar</option>
                </select>
                <FontAwesomeIcon icon={faMagnifyingGlass}/> 
                <input type="text" name="" id="" placeholder='Find Your Fav Movie'/>
                <button> Sign in</button>
            </div>
        </div>
        <div className="scrollButton">
            <FontAwesomeIcon icon={faChevronUp} />
        </div>
    </div>
    )
}


export default Header