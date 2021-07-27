import React from 'react';
import './TryAgain.css';
const TryAgain = ({words,characters,wpm,startAgain})=>{
    return(
        <div data-aos="fade-up" className="try-again-container">
            <h1 >Test Results</h1>
            <div className="results-container">
                <p>
                    <b>Characters: </b> {characters}
                </p>
                <p>
                    <b>Words: </b> {words}
                </p>
                <p>
                    <b>Speed: </b> {wpm} wpm
                </p>
            </div>
            <div>
                <button onClick ={()=>startAgain()} className="start-again-btn">Re-try</button>
            </div>
            
        </div>
    )
}
export default TryAgain;