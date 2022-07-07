import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Poka listę samochodów</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;