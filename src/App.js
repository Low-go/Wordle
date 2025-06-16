import React from 'react';
import { useEffect, useState } from 'react';

const API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words'


export default function App(){

    const [solution, setSolution] = useState('');

    useEffect(() => {

        const fetchWord = async () => { // outer function cannot be async
            const response = await fetch(API_URL); // but inner function can
            const words = await response.json();
            const randomWord = words[Math.floor(Math.random() * words.length)]
            setSolution(randomWord);
        };

        fetchWord();

    }, []); // an empty array means once on mount

    return (
        <div className = "App">
            {solution}
        </div>
    );
}