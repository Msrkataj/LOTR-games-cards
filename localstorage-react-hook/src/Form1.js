import { useState, useEffect } from "react";

const Form1 = (props) => {
    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name, setName]);

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                aria-label="fullname"
            />
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default Form1;