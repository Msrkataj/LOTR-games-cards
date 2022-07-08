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
                </div>
            </div>
        </div>
        <div className="center-up-mainCard">
        </div>
    </div>
        <div className="center-first-card">
        </div>
        <div className="center-second-card">
        </div>

        </>

)
}

export default Center;