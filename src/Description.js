// DO NOT DELETE
import React from 'react'
import { useState } from 'react';
import {DogImage} from './DogImage';

export function Description() {
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
        <p className="description">犬の画像をランダムに表示します</p>
        <DogImage url={dogUrl}/>
        <div><button type='button' onClick={() => changeImage()}>画像を変える</button></div>
    </div>
    );
}
