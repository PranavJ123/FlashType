import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({selectedParagraph,timerStarted,timeRemaining,words,characters,wpm,testInfo,onInputChange})=>{
    return(
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="WPM" cardValue={wpm} />
            </div>
            <div className="typewriter-container">
                <TypingChallenge timerStarted={timerStarted} timeRemaining={timeRemaining} selectedParagraph={selectedParagraph} testInfo={testInfo} onInputChange={onInputChange} />
            </div>
        </div>
    )
}

export default TypingChallengeContainer;