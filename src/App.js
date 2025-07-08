import React from 'react';
import { useEffect, useState } from 'react';

const API_URL = '/api/fe/wordle-words';
const WORD_LENGTH = 5;


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
        <div className = "board">
            {
                guesses.map(guess => {
                    return (
                        <Line guess={guess ?? ''}/> // we pass in guess or an empty string
                    )
                })
            }
        </div>
    );
}


function Line({guess}){

    const tiles = []

    for (let i =0; i < WORD_LENGTH; i ++){
        const char = guess[i]; // now we have an individual character, unless
        tiles.push(<div key = {i} className='tile'>{char}</div>)
    }

    return (
        <div className='line'>
            {tiles}
        </div>
    )
}