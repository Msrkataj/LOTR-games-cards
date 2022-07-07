import React, { useState, useEffect } from 'react';

const Form = ({ onAdd }) => {
    const [values, setValues] = useState({
        name: "",
        brand: "",
        hp: "",
        type: ""
    })

    const handleChange = ({ target: {name, value} }) => {
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const serializeData = ({ name, brand, hp, type }) => ({
        name,
        brand,
        engine: {
            hp,
            type
        }
    })

    const handleSubmit = e => {
        e.preventDefault()
        onAdd(serializeData(values))
    }

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input name="name" value={values.name} onChange={handleChange} />
            </div>
            <div>
                <label>Brand</label>
                <input name="brand" value={values.brand} onChange={handleChange} />
            </div>
            <div>
                <label>hp</label>
                <input name="hp" value={values.hp} onChange={handleChange} />
            </div>
            <div>
                <label>type</label>
                <input name="type" value={values.type} onChange={handleChange} />
            </div>
            <button type="submit">Dodaj nowy samochód</button>
        </form>
    )
}

export default Form;