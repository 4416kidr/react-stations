// DO NOT DELETE

import React from 'react';
import {useState, useEffect} from 'react';
import { BreedsSelect } from './BreedsSelect';

export function DogListContainer() {
    const [breeds, setBreeds] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((res) => res.json())
            .then(
                (result) => {
                    const keys = Object.keys(result.message);
                    setBreeds(keys);
                },
                (error) => {
                    setBreeds("error");
                }
            )
    }, [])
    return(
        <div>
            <p>犬種を選択</p>
            <BreedsSelect breeds={breeds}/>
        </div>
    )
}
