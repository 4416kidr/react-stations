// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { useState } from 'react';
import Header1 from './Header.js'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/maltese/n02085936_16331.jpg");
  function changeImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result.message);
        }, 
        (error) => {
          setDogUrl("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_2324.jpg");
        }
      )
  }
  return (
    <div>
      <Header1 />
      <p class="description">犬の画像をランダムに表示します</p>
      <img src={dogUrl} alt="The image of dog"></img>
      <p><button type='button' onClick={changeImage}>画像を変える</button></p>
    </div>
  )
}
