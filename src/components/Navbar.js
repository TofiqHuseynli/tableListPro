import React, { useState } from 'react'
import '../styleFolder/navbar.css'

function Navbar() {

  const [mode,setMode]=useState(true);
  const changeMode = ()=>{
    setMode(!mode)

    if(mode){
      document.body.classList.add('dark')

    }else{
      document.body.classList.remove('dark')
    }
    
  }

  
  return (
    <div className='nav-div d-flex justify-content-between p-2 bg-light'>
        <div>
            <h4 className='log'>Logo.az</h4>
        </div>
        <div className='mode-area'>
          <span>Light</span>
            <div onClick={changeMode} className={mode ? "mode-div-light" : "mode-div-dark"}><div className={mode ? "mode-button" : "mode-button-right"}></div></div>
            <span>Dark</span>
        </div>
    </div>
  )
}

export default Navbar