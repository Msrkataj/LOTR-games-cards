import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Game, {API} from "./Game";
import Game2 from "./game2";
import {number1} from "./Game";
import {number2} from "./game2";


const Center = () => {
    const [randomStrong, setRandomStrong] = useState("")
    const [randomMagic, setRandomMagic] = useState("")
    const [randomIntelligence, setRandomIntelligence] = useState("")
    const [randomHappy, setRandomHappy] = useState("")
    const [randomThief, setRandomThief] = useState("")
    const [disabledDraw, setDisabledDraw] = useState(0)
    const [disabledFight, setDisabledFight] = useState(0)
    const [counter, setCounter] = useState(0)
    const [on, setOn] = useState(false)
    const [sumStrong, setsumStrong] = useState(0)
    const [sumMagic, setsumMagic] = useState(0)
    const [sumIntelligence, setsumIntelligence] = useState(0)
    const [sumLucky, setsumLucky] = useState(0)
    const [sumFlair, setsumFlair] = useState(0)
    const [sumStrong2, setsumStrong2] = useState(0)
    const [sumMagic2, setsumMagic2] = useState(0)
    const [sumIntelligence2, setsumIntelligence2] = useState(0)
    const [sumLucky2, setsumLucky2] = useState(0)
    const [sumFlair2, setsumFlair2] = useState(0)


    const [sumHeros, setsumHeros] = useState(0)
    const [sumHeros2, setsumHeros2] = useState(0)

    // let disabledOn = true
    // let disabledOff = false


    const [hero, setHero] = useState([]);
    const [hero2, setHero2] = useState([]);


    const getDraw = () => {
        fetch(API + "/" + number1)
            .then(response => response.json())
            .then(data => setHero(data))
            .catch(err => console.warn(err))
    }
    useEffect(() => {
        getDraw()
    }, [])

    const getDraw2 = () => {
        fetch(API + "/" + number2)
            .then(response => response.json())
            .then(data => setHero2(data))
            .catch(err => console.warn(err))
    }
    useEffect(() => {
        getDraw2()
    }, [])

    const handleClick = () => {
        setRandomStrong(prev =>
            randoms(),
        )
        setRandomMagic(prev =>
            randoms()
        )
        setRandomIntelligence(prev =>
            randoms()
        )
        setRandomHappy(prev =>
            randoms()
        )
        setRandomThief(prev =>
            randoms()
        )
    }


    const handleDraw = () => {
        setCounter(prev => counter === 2 ? counter === 1 : prev + 1)
        setDisabledDraw(true ? counter === 1 : null)
        // setCounter(prev => counter === 3 || false ? counter === 1 : prev +1 && on === true ? counter === 1 : prev +1)
        // setDisabledDraw(counter === 3 ? disabledOn : null || on === true ? disabledOff && counter === 1 : null)
    }

    const handlefight = () => {
        setOn(prev => on === true ? false : true)
        // setDisabledFight(on === true ? disabledOn : null || counter === 1 ? disabledOff : null)
        on === true ? setDisabledDraw(true) : setDisabledDraw(false)

        setsumStrong(prev =>
            randomStrong + hero.strong)
        setsumMagic(prev =>
            randomMagic + hero.magic)
        setsumIntelligence(prev =>
            randomIntelligence + hero.intelligence)
        setsumLucky(prev =>
            randomHappy + hero.luck)
        setsumFlair(prev =>
            randomThief + hero.flair)

        setsumStrong2(prev =>
            randomStrong + hero2.strong)
        setsumMagic2(prev =>
            randomMagic + hero2.magic)
        setsumIntelligence2(prev =>
            randomIntelligence + hero2.intelligence)
        setsumLucky2(prev =>
            randomHappy + hero2.luck)
        setsumFlair2(prev =>
            randomThief + hero2.flair)



            setsumHeros(prev => sumStrong + sumMagic + sumIntelligence + sumLucky + sumFlair)



            setsumHeros2(prev => sumStrong2 + sumMagic2 + sumIntelligence2 + sumLucky2 + sumFlair2)

    }

    const randoms = () => {
        const max = 100
        const min = 0
        return Math.floor(Math.random() * (max - 1) + min)
    }

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
                                <li>Sila:{randomStrong}</li>
                                <li>Magia:{randomMagic}</li>
                                <li>Madrosc:{randomIntelligence}</li>
                                <li>Szczescie:{randomHappy}</li>
                                <li>Spryt:{randomThief}</li>
                            </ul>
                        </div>
                        <div onClick={() => {
                            handleClick()
                        }} className="draw">
                            <i className="fa-solid fa-shuffle"></i>
                        </div>
                    </div>
                </div>
                <button className="fight" onClick={handlefight} disabled={disabledFight}>
                    <p>WALCZ</p>
                </button>
                <button className="center-up-mainCard" onClick={handleDraw} disabled={disabledDraw}>
                    <p>LOSUJ</p>
                </button>
            </div>
            <div className="content">
                <div className="card first-card">
                    {counter === 1 ? <Game/> : null || counter === 2 ? <Game/> : null}
                    <div className="card-points card-points-first">
                        <div className="sum">{}</div>
                        <p>1</p>
                    </div>
                </div>
                <div className="card second-card">
                    {counter === 2 ? <Game2/> : null}
                    <div className="card-points card-points-second">
                        <div className="sum">{}</div>
                        <p>1</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Center;