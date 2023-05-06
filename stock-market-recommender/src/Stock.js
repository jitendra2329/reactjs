import React, { useState } from 'react';


function Form({ onSubmit }) {
  const [symbol, setSymbol] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [timeWindow, setTimeWindow] = useState(10);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ symbol, socialMedia, timeWindow });
  // };

  return (
    <form>
      <label>
        
        Welcome to Stock!
        
        <br/>
        <br/>
        <br/>
        <select value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)}>
          <option value="Stock1">Stock 1</option>
          <option value="Stock2">Stock 2</option>
          <option value="Stock3">Stock 3</option>
          <option value="Stock4">Stock 4</option>
        </select>
        <select value={timeWindow} onChange={(e) => setTimeWindow(e.target.value)}>
          <option value={7}>7 days</option>
          <option value={10}>10 days</option>
          <option value={14}>14 days</option>
        </select>
      </label>
      <br/>
      <br/>
      <br/>
      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form