import React, { useState, useEffect } from 'react';

import {API, number1} from "./Game";



const Game2 = ({num}) => {
    const [hero, setHero] = useState([]);

    const getDraw = () => {
        fetch(API + "/" + num)
            .then(response => response.json())
            .then(data => setHero(data))
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        getDraw()
    }, [])



    return (
        <>

            <div className="card-game">
                <section>
                    <h1 className="name-hero" >{hero.name}</h1>
                    <img src={hero.photo} alt=""/>
                </section>
                <div className="card-stats">
                    <ul>
                        <li>Sila:<b>{hero.strong}</b></li>
                        <li>Magia:<b>{hero.magic}</b></li>
                        <li>Madrosc:<b>{hero.intelligence}</b></li>
                        <li>Szczescie:<b>{hero.luck}</b></li>
                        <li>Spryt:<b>{hero.flair}</b></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Game2;
