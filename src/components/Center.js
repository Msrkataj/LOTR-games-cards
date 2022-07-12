import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Center = () => {

    return (
        <>
            <div className="logo-section">
                <div className="logo">
                </div>
            </div>
    <div className="center-up">
        <div className="center-up-statistic">
            <h1>Grajace statystyki</h1>
            <div className="center-up-statistic-main">
                <div className="stats">
                    <ul>
                        <li>Sila:</li>
                        <li>Magia:</li>
                        <li>Madrosc:</li>
                        <li>Szczescie:</li>
                        <li>Spryt:</li>
                    </ul>
                </div>
                <div className="draw">
                    <i className="fa-solid fa-shuffle"></i>
                </div>
            </div>
        </div>
        <div className="center-up-mainCard">
        </div>
    </div>
            <div className="content">
        <div className="card first-card">
            <div className="card-points card-points-first"></div>
        </div>
        <div className="card second-card">
            <div className="card-points card-points-second"></div>
        </div>
            </div>

        </>

)
}

export default Center;