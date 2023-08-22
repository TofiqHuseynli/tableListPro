import React, { useEffect, useState } from "react";
import "../styleFolder/table.css";
import logo from "../img/no.svg";

function Table({ state, stateBody,setState }) {
  return (
    <div className="bg-light  w-100 rounded table-div">
      <table className="table w-100">
        {state.users.length == 0 ? (
          <div className="no-logo">
            <img src={logo}></img>
          </div>
        ) : (
          <tr className="header">
            {state.keys.map((key) => (
              <>{state.checkedIdAll.includes(key) && <th className="id">{key}</th>}</>
            ))}
          </tr>
        )}

        {state.users.length == 0 ? (
          <div className="logo">
            <img src={logo}></img>
          </div>
        ) : (
          state.users.map((item, key) => {
              return (
                  <tr className="body-tr" key={key}>
                      {
                          state.keys.map((k) =>(
                            
                             <> {state.checkedIdAll.includes(k) && <td>{ JSON.stringify(item[k])}</td>}</>
                            
                          )   
                          )
                      }
                  </tr>
              );
          })
      )}
      </table>
    </div>
  );
}

export default Table;
