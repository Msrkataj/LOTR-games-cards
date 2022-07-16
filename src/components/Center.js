import React, {useState, useEffect} from 'react';
import Game, {API} from "./Game";
import Game2 from "./game2";
import {number2} from "./game2";


const Center = () => {
    const [randomStrong, setRandomStrong] = useState("")
    const [randomMagic, setRandomMagic] = useState("")
    const [randomIntelligence, setRandomIntelligence] = useState("")
    const [randomHappy, setRandomHappy] = useState("")
    const [randomThief, setRandomThief] = useState("")
    const [disabledDraw, setDisabledDraw] = useState("")
    const [disabledFight, setDisabledFight] = useState("")
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const [on, setOn] = useState(false)

    const [sumStrong, setsumStrong] = useState("")
    const [sumMagic, setsumMagic] = useState("")
    const [sumIntelligence, setsumIntelligence] = useState("")
    const [sumLucky, setsumLucky] = useState("")
    const [sumFlair, setsumFlair] = useState("")

    const [sumStrong2, setsumStrong2] = useState("")
    const [sumMagic2, setsumMagic2] = useState("")
    const [sumIntelligence2, setsumIntelligence2] = useState("")
    const [sumLucky2, setsumLucky2] = useState("")
    const [sumFlair2, setsumFlair2] = useState("")


    const [sumHeros, setsumHeros] = useState("")
    const [sumHeros2, setsumHeros2] = useState("")

    const [ID, setID] = useState("")

    const [Win, setWin] = useState(0)
    const [Win2, setWin2] = useState(0)

    let disabledOn = true
    let disabledOff = false


    const [hero, setHero] = useState("");
    const [hero2, setHero2] = useState("");


    const number = (Math.floor(Math.random() * (36 - 1)) + 1)

    const number2 = (Math.floor(Math.random() * (36 - 1)) + 1)


    const getDraw = () => {
        fetch(API + "/" + number)
            .then(response => response.json())
            .then(data => setHero(data))
            .catch(err => console.warn(err))
    }


    const getDraw2 = () => {
        fetch(API + "/" + number2)
            .then(response => response.json())
            .then(data => setHero2(data))
            .catch(err => console.warn(err))
    }



    const ran = () => {
        const ranSt = Math.floor(Math.random() * (100 - 1) + 1)
        const ranMa = Math.floor(Math.random() * (100 - 1) + 1)
        const ranIn = Math.floor(Math.random() * (100 - 1) + 1)
        const ranHap = Math.floor(Math.random() * (100 - 1) + 1)
        const ranThi = Math.floor(Math.random() * (100 - 1) + 1)

        setRandomStrong(prev => (
            ranSt))
        setRandomMagic(prev => (
            ranMa))
        setRandomIntelligence(prev => (
            ranIn))
        setRandomHappy(prev => (
            ranHap))
        setRandomThief(prev => (
            ranThi))
    }

    const totalSum = () => {

    }

    // const totalSUm2 = () => {
    //
    //     setsumStrong2(prev =>
    //         randomStrong * hero2.strong / 100)
    //     setsumMagic2(prev =>
    //         randomMagic * hero2.magic / 100)
    //     setsumIntelligence2(prev =>
    //         randomIntelligence * hero2.intelligence / 100)
    //     setsumLucky2(prev =>
    //         randomHappy * hero2.luck / 100)
    //     setsumFlair2(prev =>
    //         randomThief * hero2.flair / 100)
    //
    // }

    // const heroID= () => {
    //     setID(prev =>(
    //         hero.id)
    //     )
    // }
    const raa = ((randomStrong * hero.strong) /100 )
    const raa2 = ((randomMagic * hero.magic) /100)
    const raa3 = ((randomIntelligence * hero.intelligence) /100)
    const raa4 = ((randomHappy * hero.luck) /100)
    const raa5 = ((randomThief * hero.flair) /100)

    console.log(hero.magic)

    const strongHero2 = ((randomStrong * hero2.strong) /100)
    const magicHero2 = ((randomMagic * hero2.magic) /100)
    const intelligenceHero2  = ((randomIntelligence * hero2.intelligence) /100)
    const luckHero2  = ((randomHappy * hero2.luck) /100)
    const flairHero2  = ((randomThief * hero2.flair) /100)

    console.log(hero.strong)
    console.log(hero2.strong)

    const handleDraw = () => {
        setCounter(prev => counter === 2 ? counter === 1 : prev + 1)
        setDisabledDraw(prev => counter === 1 ? true : false)
        // eslint-disable-next-line no-unused-expressions
        counter === 2 ? getDraw() : null
        // eslint-disable-next-line no-unused-expressions
        counter === 2 ? getDraw2() : null

        // eslint-disable-next-line no-unused-expressions
        counter === 2 ?  setCounter2(prev => counter2 === 0) : null

        // setCounter === 2 ? setDisabledFight(true) : setDisabledFight(false)
        // setCounter(prev => counter === 3 || false ? counter === 1 : prev +1 && on === true ? counter === 1 : prev +1)
        // setDisabledDraw(counter === 3 ? disabledOn : null || on === true ? disabledOff && counter === 1 : null)
    }

    const handlefight = () => {
        // setDisabledFight(on === true ? disabledOn : null || counter === 1 ? disabledOff : null)
        setCounter2(prev => counter2 === 1 ? counter2 === 0 : prev + 1)

        setOn(prev => true ? false : true)
        setDisabledDraw(prev => false)
        // eslint-disable-next-line no-unused-expressions
        on === false && counter2 != 1 ? ran() : null


        // setsumMagic(prev =>
        //     randomMagic * hero.magic / 100)
        // setsumIntelligence(prev =>
        //     randomIntelligence * hero.intelligence / 100)
        // setsumLucky(prev =>
        //     randomHappy * hero.luck / 100)
        // setsumFlair(prev =>
        //     randomThief * hero.flair / 100)


        setWin(prev => (
            total > total2 ? Win+1 : Win
        ))

        setWin2(prev =>
            total < total2 ? Win2+1 : Win2)
    }
    const total = Math.round((raa + raa2 + raa3 + raa4 + raa5))
console.log(total)
    const total2 = Math.round((strongHero2 + magicHero2 + intelligenceHero2 + luckHero2 + flairHero2))
console.log(total2)

    // const plus = () => {
    //     setWin(prev => (
    //         total > total2 ? prev+ 1 : null
    //     ))
    // }

//     const plus2 = () => {
//         setWin2(prev =>
//             total < total2 ? Win+1 : null)
//     }

    const randoms = () => {

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
                                <li>Sila:<b>{randomStrong}</b></li>
                                <li>Magia:<b>{randomMagic}</b></li>
                                <li>Madrosc:<b>{randomIntelligence}</b></li>
                                <li>Szczescie:<b>{randomHappy}</b></li>
                                <li>Spryt:<b>{randomThief}</b></li>
                            </ul>
                        </div>
                        <div className="draw">
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
                    {counter === 1 ? <Game num={hero.id}/> : null || counter === 2 ? <Game/> : null}
                    <div className="card-points card-points-first">
                        <div className="sum">{counter2 === 1 ? total : null}</div>
                        <p>{Win}</p>
                    </div>
                </div>
                <div className="card second-card">
                    {counter === 2 ? <Game2 num={hero2.id}/> : null}
                    <div className="card-points card-points-second">
                        <div className="sum">{counter2 === 1 ? total2 : null}</div>
                        <p>{Win2}</p>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Center;