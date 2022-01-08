//import logo from './logo.svg';
//import './App.css';

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  return <MyComponent></MyComponent>;
}

function MyComponent() {
  const [name, setname] = useState("");

  const [pass, setpass] = useState("");

  const [list, setList] = useState([]);

  const processname = (e) => {
    const newname = e.target.value;
    setname(newname);
  };

  const processpass = (e) => {
    const newpass = e.target.value;
    setpass(newpass);
  };

  const adduser = () => {
    const url = "http://localhost:4000/newUser";
    const body = {
      username: name,
      password: pass
    };
    axios.post(url, body);
    let newlist = [body, ...list];
    setList(newlist);
    setname("");
    setpass("");
  };

  const getUser = async () => {
    const url = "http://localhost:4000/newUser";

    let result = await axios.get(url);

    const list = result.data;
    const newlist = [...list];
    setList(newlist);
  };
  useEffect(() => getUser(), []);
  /*
  const getuser = async () => {
    const url = "http://localhost:4000/userlist";

    let result = await axios.get(url);
    let newlist = result.data;
    setlist([newlist]);
  };
  useEffect(() => getuser(), []);
*/
  return (
    <div>
      <h1>App Name</h1>
      <div>
        <input type="text" value={name} placeholder="enter username" onChange={processname} />
      </div>
      <div>
        <input type="text" value={pass} placeholder="enter Password" onChange={processpass} />
      </div>
      <div>
        <input type="button" value="Register" onClick={adduser} />
      </div>

      <div>
        {list.map((item) => (
          <div>
            {item.username} {item.password}
          </div>
        ))}
      </div>
    </div>



  );
}

export default App;
