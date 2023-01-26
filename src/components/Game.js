import React, { useState, useEffect } from 'react';


export const API = "http://localhost:3005/hero"

function getStorageValue(hero, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(hero);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

const useLocalStorage = (hero, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(hero, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(hero, JSON.stringify(value));
    }, [hero, value]);

    return [value, setValue];
};

const Game = ({num}) => {
    const [hero, setHero] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("hero");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });


    const getDraw = () => {
            fetch(API + "/" + num)
                .then(response => response.json())
                .then(data => setHero(data))
                .catch(err => console.warn(err))
        localStorage.setItem("herossss", JSON.stringify(hero));
    }

    useEffect(() => {
        getDraw()
    }, )


    const [name, setName] = useLocalStorage("hero", "");

    console.log(setName)

    return (
        <>

            <div className="card-game">
                <section>
                    <h1 className="name-hero" >{name.name}</h1>
                    <img src={name.photo} alt=""/>
                </section>
                <div className="card-stats">
                    <ul>
                        <li>Strong:<b>{name.strong}</b></li>
                        <li>Magic:<b>{name.magic}</b></li>
                        <li>Intelligence:<b>{name.intelligence}</b></li>
                        <li>Luck:<b>{name.luck}</b></li>
                        <li>Flair:<b>{name.flair}</b></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Game;
