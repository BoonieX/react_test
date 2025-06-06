"use client";

import { useState } from "react";



function ButtonImage() {
  const [image, setImage] = useState();
  
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



export default function MyApp() {

    
  return (
    
    <div>
      <ButtonImage/>
    </div>
  );
}
