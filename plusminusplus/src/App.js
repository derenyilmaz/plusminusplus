import './App.css';
import React, { useEffect, useState } from "react";

const imageUrl = "https://api.unsplash.com/photos/random/?client_id=" + process.env.REACT_APP_ACCESS_KEY;

const sendRequest = false;
const percentage = 80;

var color = "#355e3b";


window.onresize = window.onload = function()
{
  resize();
}

function getWindowDimensions()
{
  var body = document.documentElement || document.body;
  
  return {
    x: window.innerWidth  || body.clientWidth,
    y: window.innerHeight || body.clientHeight
  }
}

function resize()
{
  // there must be a better way than getting the image element by tag name
  var img = document.getElementsByTagName('img')[0];
  var windowDimensions = getWindowDimensions();
  
  img.style.height = windowDimensions.y * (percentage/100) + "px";

  if (img.offsetWidth > windowDimensions.x)
  {
      img.style.height = null;
      img.style.width = windowDimensions.x * (percentage/100) + "px";
  }
}

function recolor()
{
  document.body.style.backgroundColor = color;
}

function App() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setImg(data.urls.regular);
      color = data.color.toString();
    });
  };

  const showStaticImage = () => {
    const img = require('./placeholder.png');
    setImg(img);
  }

  useEffect(() => {
    if (sendRequest){
      fetchImage();
    }
    else {
      showStaticImage();
    }
    recolor();
  }, []);

  return (
    <div>
      <img className = "image" src={img} alt="random photo" />
    </div>
  );
}

export default App;
