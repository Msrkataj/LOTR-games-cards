import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Start = () => {

    const [isActive, setActive] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("active");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(name));

    }, [name]);

    useEffect(() => {
        // storing input name
        localStorage.setItem("active", JSON.stringify(isActive));
    }, [isActive]);

    const saved = localStorage.getItem("active");


    const handleClick = () => {
        setActive(prev => true)
    };

    return (
        <>
        <div className="name">{isActive === true ? name : null}</div>
    <div className={isActive  === true ? "start2" : "start"}>
            <span className="box">
            </span>
            <div className="start-text">
            <h1>Witaj</h1>
            <p>
                Przedstawiony projekt jest gierką symulacyjną z bohaterami z uniwersum Lord of the Rings.
                </p>
            <p>
                <br/>
                Gra posiada 36 kart z postaciami z LOTR, każdy bohater posiada Swoja specyfikacje sily, magi, madrosci, szczescia oraz sprytu. <br/>
                <br/>
                Po nacisnieciu przycisku "LOSUJ",
                zostaje rozlosowana pierwsza karta dla gracza NR1, po kolejnym wcisnieciu zostaje rozlosowana pierwsza karta dla gracza NR2, nastepnie po nacisnieciu przycisku "WALCZ", zostaje rozegrana potyczka miedzy dwoma herosami.
                <br/>
                <br/>
                Przed kazda bitwa rozlosowane sa warunki potyczki tzn. ile procent danej spefikacji bierze udzial w walce, kazda bitwa nie będzie taka sama. Po zakonczonej walce sa podliczone zdobyte punkty danej walki i podliczony punkt
                dla gracza wygranego.
                <br/>
                <br/>
                Milej zabawy
            </p>
                <form>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Podaj Swoją Nazwę"
                        aria-label="fullname"
                    />
                    <a onClick={handleClick}>
                        <FontAwesomeIcon icon="fas fa-ring" />
                        <span>
                </span>
                        <p>START!</p>
                    </a>
                </form>
            </div>
            <div className="box box-2">
            </div>
        </div>
        </>
    )
}

export default Start;