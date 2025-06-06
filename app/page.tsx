"use client";

import { useState } from "react";



function ButtonImage() {
  // Explicitly type the state as `string | undefined` (instead of `null`)
  const [image, setImage] = useState<string | undefined>();

  return (
    <div>
      {/* Fallback to empty string if `image` is undefined */}
      <img src={image || ""} style={{height:'500px'}}/>
      <button
        onClick={() => {
          setImage(
            "https://www.shutterstock.com/shutterstock/photos/587857943/display_1500/stock-vector-hand-gesture-fuck-you-symbol-middle-finger-sign-cartoon-vector-illustration-sticker-587857943.jpg"
          );
        }}
      >
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
