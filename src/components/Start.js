import React, { useState, useEffect } from 'react';
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

    // const saved = localStorage.getItem("active");


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
            <h1>WELCOME</h1>
            <p>
                The presented project is a simulation game with heroes from the Lord of the Rings universe.
            </p>
            <p>
                <br/>
                The game has 36 cards with characters from LOTR, each hero has his own specs of strength, magic, wisdom, luck and cunning. <br/>                <br/>
                After pressing the "RANDOM" button,
                the first card is drawn for player NR1, after pressing it again, the first card is drawn for player NR2, then after pressing the "FIGHT" button, a skirmish between two heroes is played.
                <br/>
                <br/>
                Before each battle, the conditions of the skirmish are drawn, i.e. how many percent of a given specification takes part in the fight, each battle will not be the same. After the fight is over, the points scored for the fight and the score are added up
                for the winning player.
                <br/>
                <br/>
                Good luck
            </p>
                <form>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your nickname..."
                        aria-label="fullname"
                    />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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

// PL
// Przedstawiony projekt jest gierką symulacyjną z bohaterami z uniwersum Lord of the Rings.
//
//
// Gra posiada 36 kart z postaciami z LOTR, każdy bohater posiada Swoja specyfikacje sily, magi, madrosci, szczescia oraz sprytu.
//
// Po nacisnieciu przycisku "LOSUJ", zostaje rozlosowana pierwsza karta dla gracza NR1, po kolejnym wcisnieciu zostaje rozlosowana pierwsza karta dla gracza NR2, nastepnie po nacisnieciu przycisku "WALCZ", zostaje rozegrana potyczka miedzy dwoma herosami.
//
// Przed kazda bitwa rozlosowane sa warunki potyczki tzn. ile procent danej spefikacji bierze udzial w walce, kazda bitwa nie będzie taka sama. Po zakonczonej walce sa podliczone zdobyte punkty danej walki i podliczony punkt dla gracza wygranego.
//
// Milej zabawy