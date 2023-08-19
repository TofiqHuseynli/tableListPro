import React, { useRef } from 'react'
import "../styleFolder/side.css"

function Side({data,setState,inputRef,showObject}){

  
 
  return (
    <div className='side bg-light  m-2 rounded d-flex flex-column p-2'>
        <h5 className='mb-3'>Sorğu</h5>
        <input ref={inputRef} onChange={(e)=>setState({input:e.target.value})} className='input border-0 p-2 mb-2' placeholder='İnput'></input>
        <button onClick={()=>{
          data();
          showObject();
        }} className='btn btn-color'>Select</button>
    </div>
  )
}

export default Side