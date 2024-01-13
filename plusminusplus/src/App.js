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
      setImg(data.urls.regular);
    });

  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <img className = "image" src={img} alt="random photo" />
    </div>
  );
}

export default App;
