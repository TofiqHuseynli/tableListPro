import React, { useEffect, useReducer, useRef, useState } from "react";
import "../styleFolder/body.css";
import Table from "./Table";

function Body({ state }) {
  const [stateBody, setStateBody] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      checkedAll: false,
      checkedIdAll: [],
    }
  );

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setStateBody({ checkedAll: true });
    } else {
      setStateBody({ checkedAll: false });
    }
  };

  console.log(stateBody.checkedAll);

  const pushArray = (e) => {
    if (e.target.checked) {
      setStateBody({ checkedIdAll: [...stateBody.checkedIdAll, e.target.id] });
    } else {
      setStateBody({
        checkedIdAll: [
          ...stateBody.checkedIdAll.filter((item) => item !== e.target.id),
        ],
      });
    }
  };

  console.log(stateBody.checkedIdAll);

  // const handleCheckAll = e=> {
  //   if(e.target.checked && stateBody.checkedIdAll.length<6){

  //     setStateBody({checkedAll:true})
  //     setStateBody({checkedId:true})
  //     setStateBody({checkedName:true})
  //     setStateBody({checkedUsername:true})
  //     setStateBody({checkedEmail:true})
  //     setStateBody({checkedAddress:true})

  //     if(stateBody.checkedIdAll.includes(idRef.current.id)){
  //       setStateBody({checkedIdAll:[...stateBody.checkedIdAll,nameRef.current.id,usernameRef.current.id,emailRef.current.id,addressRef.current.id]})
  //     }else{
  //       setStateBody({checkedIdAll:[...stateBody.checkedIdAll,idRef.current.id,nameRef.current.id,usernameRef.current.id,emailRef.current.id,addressRef.current.id]})

  //     }

  //   }else{

  //     setStateBody({checkedAll:false})
  //     setStateBody({checkedId:false})
  //     setStateBody({checkedName:false})
  //     setStateBody({checkedUsername:false})
  //     setStateBody({checkedEmail:false})
  //     setStateBody({checkedAddress:false})
  //     setStateBody({checkedIdAll:[]})

  //   }

  // }
  // const handleCheckId = e=> {
  //   if(e.target.checked){
  //     setStateBody({checkedId:!stateBody.checkedId})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll,e.target.id]})
  //   }else{
  //     setStateBody({checkedId:!stateBody.checkedId})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll.filter((item)=>item !== e.target.id)]})

  //   }
  // }

  // const idRef = useRef();
  // const nameRef = useRef();
  // const usernameRef = useRef();
  // const emailRef = useRef();
  // const addressRef = useRef();

  // const autoIdFunc = ()=>{
  //   if(stateBody.checkedAll ){

  //       setStateBody({checkedIdAll:[...stateBody.checkedIdAll,idRef.current.id,nameRef.current.id,usernameRef.current.id,emailRef.current.id,addressRef.current.id]})
  //     }
  // }
  // useEffect(()=>{
  //   autoIdFunc();
  // },[])

  // const handleCheckName = e=> {
  //   if(e.target.checked){
  //     setStateBody({checkedName:true})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll,e.target.id]})
  //   }else{
  //     setStateBody({checkedName:false})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll.filter((item)=>item !== e.target.id)]})
  //   }
  // }

  // const handleCheckUsername = e=> {
  //   if(e.target.checked){
  //     setStateBody({checkedUsername:!stateBody.checkedUsername})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll,e.target.id]})
  //   }else{
  //     setStateBody({checkedUsername:!stateBody.checkedUsername})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll.filter((item)=>item !== e.target.id)]})
  //   }
  // }

  // const handleCheckEmail = e=> {
  //   if(e.target.checked){
  //     setStateBody({checkedEmail:!stateBody.checkedEmail})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll,e.target.id]})
  //   }else{
  //     setStateBody({checkedEmail:!stateBody.checkedEmail})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll.filter((item)=>item !== e.target.id)]})
  //   }
  // }

  // const handleCheckAddress = e=> {
  //   if(e.target.checked){
  //     setStateBody({checkedAddress:!stateBody.checkedAddress})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll,e.target.id]})
  //   }else{
  //     setStateBody({checkedAddress:!stateBody.checkedAddress})
  //     setStateBody({checkedIdAll:[...stateBody.checkedIdAll.filter((item)=>item !== e.target.id)]})
  //   }
  // }

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
                stateBody.checkedIdAll.length == state.keys.length
                  ? !stateBody.checkedAll
                  : stateBody.checkedAll
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
