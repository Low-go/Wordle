import React from 'react';
import { useEffect, useState } from 'react';

const API_URL = '/api/fe/wordle-words';


export default function App(){

    const [solution, setSolution] = useState('');
    const [guesses, setGuesses]  = useState(Array(6).fill(null)); // array of strings of each guess

    useEffect(() => {

        const fetchWord = async () => { // outer function cannot be async

           
            const response = await fetch(API_URL); // but inner function can
            const words = await response.json();
            console.log('fetchWord function called');

            const randomWord = words[Math.floor(Math.random() * words.length)]
            setSolution(randomWord);
            console.log(randomWord)
        };

        fetchWord();

    }, []); // an empty array means once on mount

    return (
        <div className = "App">
            {
                guesses.map(guess => {
                    return (
                        <Line/>
                    )
                })
            }
        </div>
    );
}


function Line(){
    return <div/>
}