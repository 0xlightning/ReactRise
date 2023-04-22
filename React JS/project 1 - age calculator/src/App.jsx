import React from 'react';
import Dates from "./Dates";

var currentAge;
function App() {
  return (
    <div className="container">
      <div className="title-head">
        <h1>Age Calculator</h1>
      </div>
      <div className='date-box'>
        <Dates name='Date of Birth' data = "id1"/>
        <Dates name='Age at the Date of' data = "id2"/>
        <button className="btn" onClick={calculate}>Calculator</button>
      </div>
      <input id="f_ans" defaultValue= {currentAge}/>
    </div>
  );
}

function calculate(){

  var date1 = document.getElementById("id1");
  var day1= date1.querySelector("#day_id").value;
  var month1= date1.querySelector("#month_id").value;
  var year1= date1.querySelector("#year_id").value;

  var date2 = document.getElementById("id2");
  var day2= date2.querySelector("#day_id").value;
  var month2= 1 + date2.querySelector("#month_id").value;
  var year2= date2.querySelector("#year_id").value;

  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  if (day1 > day2){
      day2 = day2 + month[month1-1];
      month2 = month2-1
  }
  if(month1 > month2){
      month2 = month2 + 12;
      year2 = year2-1;
  }
  var D = day2 - day1;
  var M = month2 - month1;
  var Y = year2 - year1;
  currentAge ="Your Age is :" +Y;
  let ans= document.getElementById("f_ans");
  ans.value = currentAge;
  
}

export default App;