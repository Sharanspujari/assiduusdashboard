import React from "react";
import style from "../styles/navbar.module.css";
import { Link ,useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faDollarSign,
  faFileLines,
faTableColumns, faUser, faWallet
  } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {

  const location=useLocation();
  console.log(location);
  return (
    <>
      <div className={style.navbarContainer}>
        <div className={style.logoContainer}>
       <img className={style.logo} src="Assiduus_logo.jpg"/>
       </div>
          <div className={style.routeContainer}>
           
            <Link to={"/"}  style={{backgroundColor:location.pathname==="/" ? 'green' :''}}>
              <div className={style.singleroute} >
                 <FontAwesomeIcon style={{color:location.pathname==="/" ? 'white' :''}}  icon={faTableColumns}/>
                 <span style={{color:location.pathname==="/" ? 'white' :''}} className={style.span}>Dashboard</span>
               </div>
            </Link>
           
            <Link to={"/accounts"}>
            <div className={style.singleroute}>
                 <FontAwesomeIcon icon={faWallet}/>
                 <span className={style.span}>Accounts</span>
             </div>
            </Link>

            <Link to={"/payroll"}>
            <div className={style.singleroute}>
                 <FontAwesomeIcon icon={faDollarSign}/>
                 <span className={style.span}>Payroll</span>
             </div>
            </Link>

            <Link to={"/reports"}>
                <div className={style.singleroute}>
                   <FontAwesomeIcon icon={faFileLines}/>
                   <span className={style.span}>Reports</span>
                 </div>
            </Link>

            <Link to={"/advisor"}>
               <div className={style.singleroute}>
                   <FontAwesomeIcon icon={faUser}/>
                   <span className={style.span}>Advisor</span>
               </div>
            </Link>

            <Link to={"/contacts"}>
               <div className={style.singleroute}>
                   <FontAwesomeIcon icon={faAddressBook}/>
                   <span className={style.span}>Contact</span>
               </div>
            </Link>

          </div>
        
      </div>
    </>
  );
};

export default Navbar;
