import React, {useState, useEffect} from 'react';
import Game, {API} from "./Game";
import Game2 from "./game2";
// import {number2} from "./game2";
import { useLocalStorage } from "./game2";

const Center = () => {
    const [randomStrong, setRandomStrong] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("randomStrong");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [randomMagic, setRandomMagic] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("randomMagic");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [randomIntelligence, setRandomIntelligence] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("randomIntelligence");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [randomHappy, setRandomHappy] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("randomHappy");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [randomThief, setRandomThief] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("randomThief");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [disabledDraw, setDisabledDraw] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("disabledDraw");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [disabledFight] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("disabledFight");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [counter, setCounter] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("counter");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });
    const [counter2, setCounter2] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("counter2");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    });

    const [on, setOn] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("on");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    // const [sumStrong, setsumStrong] = useState("")
    // const [sumMagic, setsumMagic] = useState("")
    // const [sumIntelligence, setsumIntelligence] = useState("")
    // const [sumLucky, setsumLucky] = useState("")
    // const [sumFlair, setsumFlair] = useState("")
    //
    // const [sumStrong2, setsumStrong2] = useState("")
    // const [sumMagic2, setsumMagic2] = useState("")
    // const [sumIntelligence2, setsumIntelligence2] = useState("")
    // const [sumLucky2, setsumLucky2] = useState("")
    // const [sumFlair2, setsumFlair2] = useState("")
    //
    //
    // const [sumHeros, setsumHeros] = useState("")
    // const [sumHeros2, setsumHeros2] = useState("")
    //
    // const [ID, setID] = useState("")

    const [Win, setWin] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Win");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    const [Win2, setWin2] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("Win2");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    // let disabledOn = true
    // let disabledOff = false


    const [hero, setHero] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("hero");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    const [hero2, setHero2] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("hero2");
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    useEffect(() => {
        localStorage.setItem("hero", JSON.stringify(hero));
        localStorage.setItem("hero2", JSON.stringify(hero2));
    }, [hero, hero2]);




    const number = (Math.floor(Math.random() * (36 - 1)) + 1)

    const number2 = (Math.floor(Math.random() * (36 - 1)) + 1)


    const [key, setKey] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("key");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    // const number3 = () => {
    //     const number = (Math.floor(Math.random() * (36 - 1)) + 1)
    //     return number
    // }



    // const number4 = () => {
    //     while (true) {
    //         const newRand = Math.floor(Math.random() * (36 + 1));
    //         if (key.forEach(el => el) !== newRand) {
    //             return newRand;
    //         }
    //     }
    // }


    console.log(key)
    //
    // const dpp = key.forEach(el => el)
    //
    // console.log(number4())
    //
    // console.log(dpp)

    const [key2, setKey2] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("key2");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem("key", JSON.stringify(key));
        localStorage.setItem("key2", JSON.stringify(key2));

    }, [key, key2]);

    const getDraw = () => {
        fetch(API + "/" + number)
            .then(response => response.json())
            .then(data => setHero(data))
            .catch(err => console.warn(err))
            setKey(prev => ([
                ...prev,
                number
            ]))
    }

    const getDraw2 = () => {
        fetch(API + "/" + number2)
            .then(response => response.json())
            .then(data => setHero2(data))
            .catch(err => console.warn(err))
        setKey2(prev => ([
            ...prev,
            number2
        ]))
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


    const raa = ((randomStrong * hero.strong) /100 )
    const raa2 = ((randomMagic * hero.magic) /100)
    const raa3 = ((randomIntelligence * hero.intelligence) /100)
    const raa4 = ((randomHappy * hero.luck) /100)
    const raa5 = ((randomThief * hero.flair) /100)

    console.log(randomStrong)

    const strongHero2 = ((randomStrong * hero2.strong) /100)
    const magicHero2 = ((randomMagic * hero2.magic) /100)
    const intelligenceHero2  = ((randomIntelligence * hero2.intelligence) /100)
    const luckHero2  = ((randomHappy * hero2.luck) /100)
    const flairHero2  = ((randomThief * hero2.flair) /100)

    const [name2] = useLocalStorage("hero2", "");

    console.log(name2.name)

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
    useEffect(() => {
        // storing input name
        localStorage.setItem("randomStrong", JSON.stringify(randomStrong));
        localStorage.setItem("randomMagic", JSON.stringify(randomMagic));
        localStorage.setItem("randomIntelligence", JSON.stringify(randomIntelligence));
        localStorage.setItem("randomHappy", JSON.stringify(randomHappy));
        localStorage.setItem("randomThief", JSON.stringify(randomThief));
        localStorage.setItem("counter", JSON.stringify(counter));
        localStorage.setItem("counter2", JSON.stringify(counter2));
        localStorage.setItem("disabledFight", JSON.stringify(disabledFight));
        localStorage.setItem("disabledDraw", JSON.stringify(disabledDraw));
        localStorage.setItem("Win", JSON.stringify(Win));
        localStorage.setItem("Win2", JSON.stringify(Win2));

    }, [randomStrong, randomMagic, randomIntelligence, randomHappy, randomThief, counter, counter2, disabledFight, disabledDraw, Win, Win2]);

    const handlefight = () => {
        setCounter2(prev => counter2 === 1 ? counter2 === 0 : prev + 1)

        setOn(prev => true ? false : true)
        setDisabledDraw(prev => false)
        // eslint-disable-next-line no-unused-expressions
        on === false && counter2 !== 1 ? ran() : null

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


    return (
        <>
            <div className="logo-section">
                <div className="logo-section-down">
                    <div className="logo"></div>
                </div>
            </div>
            <div className="center-up">
                <div className="center-up-statistic">
                    <h1>Playing stats:</h1>
                    <div className="center-up-statistic-main">
                        <div className="stats">
                            <ul>
                                <li>Strong:<b>{randomStrong}</b></li>
                                <li>Magic:<b>{randomMagic}</b></li>
                                <li>Intelligence:<b>{randomIntelligence}</b></li>
                                <li>Luck:<b>{randomHappy}</b></li>
                                <li>Flair:<b>{randomThief}</b></li>
                            </ul>
                        </div>
                        <div className="draw">
                            <i className="fa-solid fa-shuffle"></i>
                        </div>
                    </div>
                </div>
                <button className="fight" onClick={handlefight} disabled={disabledFight} style={disabledDraw === false ? {transform: "scale(0.8)", cursor: "auto"} : null}>
                    <p>BATTLE</p>
                </button>
                <button className="center-up-mainCard" onClick={handleDraw} disabled={disabledDraw} style={disabledDraw === true ? {transform: "scale(0.8)", cursor: "auto"} : null}>
                    <p>DRAW</p>
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