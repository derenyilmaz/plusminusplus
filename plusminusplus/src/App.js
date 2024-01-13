import './App.css';
import React, { useEffect, useState } from "react";

const imageUrl = "https://api.unsplash.com/photos/random/?client_id=" + process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(process.env);
      setImg(data.urls.regular);
    });

    //const imageBlob = await res.blob();
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="random photo" />
    </>
  );
}

export default App;
