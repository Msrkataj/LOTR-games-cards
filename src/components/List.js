import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './Form';

export const API = "http://localhost:3005/cars"



const List = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    // const {data, pending, errors} = useFetch(API)

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(err => console.warn(err))
    }, [])

    const handleAdd = data => {
        fetch(API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(car => setCars(prev => ([
                ...prev,
                car
            ])))
            .catch(err => console.warn(err))
    }

    const handleSell = id => {
        fetch(API + "/" + id, {
            method: "DELETE"
        })
            .then(() => setCars(prev => prev.filter(el => el.id !==id)))
            .catch(err => console.warn(err))
    }

    const handleEdit = id => {
        navigate(`/edit/${id}`)
    }

    return (
        <>
            {/* <p>{pending && "Ładowanie danych"}</p> */}
            <Form onAdd={handleAdd}/>
            <ul>
                {cars?.map(el => (
                    <li key={el.id}>
                        <p><b>{el.name} - {el.brand}</b></p>
                        <i>Engine: {el.engine.type} | {el.engine.hp}</i>
                        <button onClick={() => handleSell(el.id)}>Sprzedaj</button>
                        <button onClick={() => handleEdit(el.id)}>Edutyj</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;