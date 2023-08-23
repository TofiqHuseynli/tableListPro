import React, { useEffect, useReducer, useRef, useState } from "react";
import "../styleFolder/body.css";
import Table from "./Table";

function Body({ state,setState }) {
  const [stateBody, setStateBody] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      checkedAll: false,
      
    }
  );

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setStateBody({ checkedAll: true });

      

      if(state.checkedIdAll.length>0){
       const tt = [...state.keys,...state.checkedIdAll.filter((item)=>{
        state.keys.map((i)=>(
          item !== i
        ))
      })] 
        setState({checkedIdAll:tt})
     
        

       }else{
        state.checkedIdAll.push(...state.keys)

       }
    
   
    } else {
      setStateBody({ checkedAll: false });
      setState({checkedIdAll:[]})
    }
  };

  console.log(stateBody.checkedAll);

  const pushArray = (e) => {
    if (e.target.checked) {
      setState({ checkedIdAll: [...state.checkedIdAll, e.target.id] });
    } else {
      setState({
        checkedIdAll: [
          ...state.checkedIdAll.filter((item) => item !== e.target.id),
        ],
      });
      
    }
  };

  console.log(state.checkedIdAll);

  

   const commonRef = useRef();
 
   


  return (
    <div className="body-div w-100  m-2 p-2">
      <div>
        <h4 className="header-text">Example Title</h4>
        <div className="d-flex ">
          <div className="boxs">
            <lable className="lable-class">All</lable>
            <input
              onChange={handleCheckAll}
              checked={
                state.checkedIdAll.length == state.keys.length && !state.checkedIdAll.length ==0
                  ? true
                  : false
              }
              className="check-box"
              type="checkbox"
            ></input>
          </div>

          {state.keys.map((item) => (
            <>
              <div className="boxs">
                <lable className="lable-class">{item}</lable>
                <input
                  ref={commonRef}
                  checked={state.checkedIdAll.includes(item) ? true : false}
                  onChange={pushArray}
                  id={item}
                  className="check-box"
                  type="checkbox"
                ></input>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <Table state={state} stateBody={stateBody} />
      </div>
    </div>
  );
}

export default Body;
