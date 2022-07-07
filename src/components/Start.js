import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faRing } from '@fortawesome/free-solid-svg-icons'


const Start = () => {
    return (
        <div className="start">
            <span className="box"></span>
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
            <a href="">
                <FontAwesomeIcon icon="fas fa-ring" />
                <span></span>
                <p>START!</p>
            </a>
            </div>
            <div className="box box-2"></div>
        </div>
    )
}

export default Start;