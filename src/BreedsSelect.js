// DO NOT DELETE
import React, { useEffect } from 'react';
import { useState } from 'react';

export function BreedsSelect(props) {
    var option = null;
    if (props.breeds == null) {
        option = <option key='loading'>loading...</option>
        return;
    }
    const [selectedBreed, setSelectedBreed] = useState('akita');
    const [breedsImageList, setBreedsImageList] = useState(null);
    option = props.breeds.map((data, index) => <option value={data} key={index}>{data}</option>)
    useEffect(() => {clickHandler()}, [])
    function clickHandler(e) {
        const url = 'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/4';
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    setBreedsImageList(result.message);
                },
                (error) => {
                    setBreedsImageList('error');
                }
            )
    }
    return (
        <div>
            <select value={selectedBreed} name='breeds' id='breeds-select' onChange={(e) => {
                setSelectedBreed(e.target.value);
            }}>
                {option}
            </select>
            <button type='button' onClick={clickHandler}>表示</button>
            <BreedsImageListContainer images={breedsImageList}/>
        </div>

    );
}

export function BreedsImageListContainer(props) {
    if (props.images == null) return (<li>not defined</li>);
    const breedsImageLi = props.images.map((data, index) => <li key={index}><img src={data}/></li>);
    return (
        <ul>
            {breedsImageLi}
        </ul>
    )
}


