import React from 'react'
import style from '../styles/dashboard.module.css'

const Advisor = () => {
  return (
    <>
    <div className={style.mainContainer}>
       <div className={style.leftContainer}>
          <div className={style.leftTop}>A</div>
          <div className={style.leftBottom}>B</div>
       </div>

        <div className={style.rightContainer}>
            <div className={style.rightTop}>C</div>
            <div className={style.rightBottom}>D</div>
        </div>
    </div>
    </>
  )
}

export default Advisor