import React, { useEffect, useState } from 'react';
import '../styleFolder/table.css';
import logo from '../img/no.svg'

function Table({state,stateBody}) {
  
  
  
  return (
    <div className='bg-light  w-100 rounded table-div'>
      <table className='table w-100'>
      {state.users.length==0  ?  <div className='no-logo'><img src={logo}></img></div>  : 
       <tr className='header'>
      {stateBody.checkedId && <th className='id'>Id</th> } 
      {stateBody.checkedName && <th>Name</th>}
      {stateBody.checkedUsername && <th>Username</th>} 
      {stateBody.checkedEmail && <th>Email</th>} 
      {stateBody.checkedAddress && <th>Address</th>}  
       </tr> 
      }
       {state.users.length==0 || !stateBody.checkedAll && !stateBody.checkedId && !stateBody.checkedName  && !stateBody.checkedUsername 
        && !stateBody.checkedEmail  && !stateBody.checkedAddress || stateBody.checkedIdAll.length==0
        ? <div className='logo'><img src={logo}></img></div>  : 
       state.users.map((item,key)=>(
          <>
          <tr className='body-tr' key={key}>
           {stateBody.checkedId && <td>{item.id}</td> } 
            {stateBody.checkedName && <td>{item.name}</td> }
            {stateBody.checkedUsername && <td>{item.username}</td>} 
            {stateBody.checkedEmail && <td>{item.email}</td>} 
            {stateBody.checkedAddress &&  <td>{item.address.city}</td>} 
          </tr>
          </>
        
         ))
       }
       
    
       </table>
      
    </div>
  )
}

export default Table