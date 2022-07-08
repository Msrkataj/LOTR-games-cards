import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Start = () => {

    const [isActive, setActive] = useState(true);

    const handleClick = () => {
        setActive(!isActive);
    };

    return (
        <div className={isActive ? 'start': "start2"}>
            <span className="box">
            </span>
            <div className="start-text">
            <h1>Witaj</h1>
            <p>Znajdujesz się w gierce symulacyjnej z bohaterami z uniwersum Lord of the Rings, gra została stworzona na podstawie popularnej gry karcjanej "Wojna"
                </p>
            <p>
                <br/>
                <br/>
                Gra posiada "" kart z postaciami z LOTR, każdy bohater posiada specyfikację sily, madrosci, zwinności, szczescia. <br/>Przed kazda tura, nastepuje losowanie
                w ilu procentach będą dzialały specyfikacje bohatera. <br/>Nastepnie gracz A losuje kartę ze stosu kart, nastepnie robi to samo gracz B, nastepuje walka,
                po stoczonej walce, zwyciezca zgarnia pule kart</p>
            <a onClick={handleClick}>
                <FontAwesomeIcon icon="fas fa-ring" />
                <span>
                </span>
                <p>START!</p>
            </a>
            </div>
            <div className="box box-2">
            </div>
        </div>
    )
}

export default Start;