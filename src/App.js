import { useEffect, useReducer, useRef } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import "./styleFolder/app.css";
function App() {
  const [state, setState] = useReducer(
    (prevState, newState) => ({ ...prevState, ...newState }),
    {
      users: [],
      input: "",
      keys: [],
      checkedIdAll: []
    }
  );

  const inputRef = useRef();

  const data = async () => {
    if (state.input == "users" || state.input == "comments"  || state.input == "todos") {
      const user = await fetch(
        `https://jsonplaceholder.typicode.com/${state.input}`
      );
      const userFin = await user.json();
      setState({ users: userFin });
      inputRef.current.value = "";
      setState({ input: "" });
      
    } else {
      window.alert("Wrong API");
    }
  };
  const keyCatch = () => {
    if (state.users.length > 0) {
      const firstObject = state.users[0];
      const key = Object.keys(firstObject);
      setState({ keys: key });
      if(state.checkedIdAll.length<state.keys.length){
        state.checkedIdAll.push(...state.keys)

      }
      
    
    }
  };

  useEffect(() => {
    keyCatch();
  }, [state.users]);

  return (
    <div className="App  vh-100">
      <Navbar />
      <div className=" d-flex flex-row">
        <Side
          data={data}
          setState={setState}
          inputRef={inputRef}
          keyCatch={keyCatch}
        />
        <Body state={state} data={data} setState={setState} />
      </div>
    </div>
  );
}

export default App;
