import React, { useState, useEffect } from 'react';

import center from "./Center";
import {API, number1} from "./Game";

const Num = () => {
    const number = () => (Math.floor(Math.random() * (36 - 1)) + 1)
    const [nr, setNr] = useState([]);

    setNr(prev => ([
        ...prev,
        prev + number])
    )
    console.log(nr)
    return nr
}