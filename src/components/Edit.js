import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import {API} from './List';

const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        strong: "",
        magic: "",
        intelligence: "",
        luck: "",
        flair: ""
    })

    useEffect(() => {
        fetch(API + "/" + id)
            .then(r => r.json())
            .then(hero => setValues({
                name: hero.name,
                strong: hero.strong,
                magic: hero.magic,
                intelligence: hero.intelligence,
                luck: hero.luck,
                flair: hero.flair
            }))
            .catch(err => console.warn(err))
    }, [])
    const handleChange = ({target: {name, value}}) => {
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const serializeData = ({name, brand, hp, type}) => ({
        name,
        brand,
        engine: {
            hp,
            type
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        fetch(API + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(serializeData(values))
        })
            .then(() => navigate("/"))
            .catch(err => console.warn(err))

    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input name="name" value={values.name} onChange={handleChange}/>
            </div>
            <div>
                <label>Brand</label>
                <input name="brand" value={values.brand} onChange={handleChange}/>
            </div>
            <div>
                <label>hp</label>
                <input name="hp" value={values.hp} onChange={handleChange}/>
            </div>
            <div>
                <label>type</label>
                <input name="type" value={values.type} onChange={handleChange}/>
            </div>
            <button type="submit">Edytuj samochód</button>
        </form>
    )
}

export default Edit;