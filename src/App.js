import React, { useState } from 'react';
import './App.css';

function App() {
  var [date, updateDate] = useState(new Date());
  var [age, updateAge] = useState(0);
  var curr_date = new Date();

  function handleChange(event){
    updateDate(event.target.value);
  }

  function calculateAge(){
    var inputDate;
    if(typeof(date) === "string")
    {
      var splitDate = date.split("-");
      inputDate = new Date(splitDate[0], splitDate[1]-1, splitDate[2]);
    } else {
      inputDate = date;
    }
    
    console.log(inputDate);
    console.log(curr_date);
    const diffTime = Math.abs(curr_date- inputDate);
    console.log(diffTime/(1000*60*60*24*365.25));
    const diffYears = Math.floor(diffTime/(1000*60*60*24*365.25));    
    updateAge(diffYears);
  }

  return (
    <div className="App">
      <h1 className='heading'>Age Calculator</h1>
      <h3>Enter your date of birth</h3>
      <input type="date" className='input' value={date} onChange={handleChange}/>
      <button className='calculateButton' onClick={calculateAge}>Calculate Age</button>
      <h2>You are {age} years old</h2>
    </div>
  );
}

export default App;
