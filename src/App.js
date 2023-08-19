import { useEffect, useReducer,useRef } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import './styleFolder/app.css'


function App() {

  const [state,setState]= useReducer(
    (prevState,newState)=>({...prevState,...newState}),
    {
      users:[],
      input:""
    }
  );

  const showObject = ()=>{
    if(state.users.length>0){
      const oneObject = state.users[0];
    console.log(oneObject)

    }
    

  }

  useEffect(()=>{
    showObject()
  },[])

 

  const inputRef = useRef();

  const data = async()=>{
    if(state.input == "users"){
      const user = await fetch(`https://jsonplaceholder.typicode.com/${state.input}`);
      const userFin = await user.json();
      setState({users:userFin});
      inputRef.current.value="";
      setState({input:""})
    
    }else{
      window.alert("Wrong API")
    }
  
  }

  
  
    
  return (
    <div className="App  vh-100">
      <Navbar/>
      <div className=" d-flex flex-row">
      <Side data={data} setState={setState} inputRef={inputRef} showObject={showObject}/>
      <Body state={state} data={data} />
      </div>
      
 
    </div>
  );
}

export default App;
