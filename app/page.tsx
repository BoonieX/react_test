"use client";

import { useState } from "react";

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}
      style={{color: 'red'}}
    >
      Click me
    </button>
  );
}

function CountButton(){
   const [count, setCount] = useState(0);
  
  function handleClick(){
    setCount(count+1);
  }
  return (
     <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function SharedInfoButton({count,onClick}){
  return(
    <button onClick={onClick}>
      You click {count} times
    </button>
  )
}


function ButtonImage() {
  const [image, setImage] = useState(null);
  
  return (
    <div>
      <img src={image} style={{height:'500px'}}/>
      <button onClick={() => {
        setImage("https://www.shutterstock.com/shutterstock/photos/587857943/display_1500/stock-vector-hand-gesture-fuck-you-symbol-middle-finger-sign-cartoon-vector-illustration-sticker-587857943.jpg");
      }} style={{border:'solid white', borderRadius:'10px',margin:'10px',padding:'10px'}}>
        Press this
      </button>
    </div>
  );
}

const user = {
  name: "reo",
};

export default function MyApp() {
    const [count, setCount] = useState(0);
    
  return (
    
    <div>
      <ButtonImage/>
    </div>
  );
}
