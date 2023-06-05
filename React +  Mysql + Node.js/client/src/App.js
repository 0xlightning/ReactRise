import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");

  const [subcribersList, setSubcribersList] = useState([]);

  const addCustomer = () => {
    axios.post("http://localhost:3001/create", {
      name: name,
      email: email,
      age: age,
      country: country
    }).then(() => {
      console.log("success");
    })
  };
  
  const showSubcribers = () => {
    axios.get("http://localhost:3001/subcribe",).then((responce) => {
      console.log(responce.data);
      setSubcribersList(responce.data);
    })
  }

  return (
    <div className="App">
      <div className="information">
        <label text="Name:" >Name:</label>
        <input type="text" 
          onChange={(e) => setName(e.target.value)} 
        />
        <label text="Email:" >Eamil:</label>
        <input type="email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label text="Name:" >Age:</label>
        <input type="number" 
          onChange={(e) => setAge(e.target.value)} 
        />
        <label text="Name:" >Country:</label>
        <input type="text" 
          onChange={(e) => setCountry(e.target.value)} 
        />
        <button onClick={addCustomer}>Subcribe</button>
      </div>
      <div>
      <hr />
      </div>
      <div className='showsub'>
        <button onClick={showSubcribers}>Show Subcribers</button>
      </div>
      <div className='showsub'>
      {subcribersList.map((val, key)=> {
          return (
            <div className='showsublist'>
              <h3>Name : {val.name}</h3>
              <h3>Email : {val.email}</h3>
              <h3>Age : {val.age}</h3>
              <h3>Country : {val.country}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
