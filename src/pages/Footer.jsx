/* eslint-disable no-unused-vars */
// creating a footer component with name and date
import React from 'react';
import './Footer.css'

export default function Footer () {
    const date = new Date();

    const result1 = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date);

    return <div className='footer'>
        <p> &copy; 2023 Samuel</p>
    {`${date.toLocaleDateString()} ${result1}`}
    </div>
}

