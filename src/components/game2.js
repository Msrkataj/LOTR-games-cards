import React, { useState, useEffect } from 'react';

import center from "./Center";
import {API} from "./Game";


export const number2 = Math.floor(Math.random() * (36 - 1)) + 1;

const Game2 = () => {
    const number = Math.floor(Math.random() * (36 - 1)) + 1;
    const [cars, setCars] = useState([]);

    const getDraw = () => {
        fetch(API + "/" + number2)
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        getDraw()
    }, [])



    return (
        <>

            <div className="card-game">
                <section>
                    <h1 className="name-hero" >{cars.name}</h1>
                    <img src={cars.photo} alt=""/>
                </section>
                <div className="card-stats">
                    <ul>
                        <li>Sila:<b>{cars.strong}</b></li>
                        <li>Magia:<b>{cars.magic}</b></li>
                        <li>Madrosc:<b>{cars.intelligence}</b></li>
                        <li>Szczescie:<b>{cars.luck}</b></li>
                        <li>Spryt:<b>{cars.flair}</b></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Game2;
