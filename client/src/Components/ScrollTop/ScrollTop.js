import React, { useEffect, useState } from 'react'
import './ScrollTop.css'
import up from './up.png'

const ScrollTop = () => {

    const [backToTopButton,SetBackToTopButton] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>125){
                SetBackToTopButton(true)   
            }else{
                SetBackToTopButton(false)   
            }   
        })
    },[])

    const scrolUp =()=> {
        window.scrollTo({
            top : 0 ,
            behavior : "smooth" })
        }
        
  return (
    <div>
        {backToTopButton && (
            <img onClick={scrolUp} src={up} className='v12' alt='up' data-aos="zoom-in"/>
        )}
    </div>
  )
}

export default ScrollTop