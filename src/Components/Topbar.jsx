import React from 'react'
import style from '../styles/topbar.module.css'
import {
   faBell,
   faSortDown,
   faMagnifyingGlass
   } from "@fortawesome/free-solid-svg-icons";
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Topbar = () => {
  return (
    <>
       <div className={style.topbarContainer}>
       
           <div className={style.searchContainer}>
             <input type='text' className={style.searchInput}/>
             <FontAwesomeIcon icon={faMagnifyingGlass} className={style.searchIcon}/>
           </div>

        <div className={style.bellContainer}> 
             <FontAwesomeIcon icon={faBell} className={style.bell}/>
            <div className={style.dotContainer}>
                <div className={style.dotisActive}></div>
           </div> 
        </div> 
           
           <div className={style.profileContainer}>
           <img src='profile_image.jpg' alt='image not found' className={style.profileImage}/>
           <FontAwesomeIcon icon={ faSortDown}/>
           </div>
      
        </div>
    </>
  )
}

export default Topbar