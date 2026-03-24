import React, { useState } from "react";
import CreateUser from "../components/CreateUser";
import Login from "../components/Login";

const Landing = () => {
  //view == 0 --> Login
  //view == 1 --> Create
  const [view, setView] = useState(0);

  return (
    <div>
      {!view ? (
        <>
          <Login />
          <button onClick={()=>setView(!view)}>Create New Account</button>
        </>
      ) : (
        <>
          <CreateUser />
          <button onClick={()=>setView(!view)} >Login existing Account</button>
        </>
      )}
    </div>
  );
};

export default Landing;
