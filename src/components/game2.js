import React, { useState, useEffect } from 'react';

import {API, number1} from "./Game";

function getStorageValue(hero2, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(hero2);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (hero2, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(hero2, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(hero2, JSON.stringify(value));
    }, [hero2, value]);

    return [value, setValue];
};

const Game2 = ({num}) => {
    const [hero2, setHero] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("hero2");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    const getDraw = () => {
        fetch(API + "/" + num)
            .then(response => response.json())
            .then(data => setHero(data))
            .catch(err => console.warn(err))
        localStorage.setItem("hero2", JSON.stringify(hero2));

    }

    useEffect(() => {
        getDraw()
    }, [])

    const [Game2hero, setGame2hero] = useLocalStorage("hero2", "");

    return (
        <>

            <div className="card-game">
                <section>
                    <h1 className="name-hero" >{Game2hero.name}</h1>
                    <img src={Game2hero.photo} alt=""/>
                </section>
                <div className="card-stats">
                    <ul>
                        <li>Sila:<b>{Game2hero.strong}</b></li>
                        <li>Magia:<b>{Game2hero.magic}</b></li>
                        <li>Madrosc:<b>{Game2hero.intelligence}</b></li>
                        <li>Szczescie:<b>{Game2hero.luck}</b></li>
                        <li>Spryt:<b>{Game2hero.flair}</b></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Game2;
