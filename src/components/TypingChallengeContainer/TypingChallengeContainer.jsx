import React from 'react'
import './typingChallengeContainer.css'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'

const TypingChallengeContainer = ({ info, inputChangeHandler }) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName='Words' cardValue={info.words} />
                <ChallengeDetailsCard cardName='Characters' cardValue={info.characters} />
                <ChallengeDetailsCard cardName='Speed' cardValue={info.wpm} />
            </div>
            <div className="typewriter-container">
                <TypingChallenge info={info} inputChangeHandler={inputChangeHandler} />
            </div>
        </div>
    )
}

export default TypingChallengeContainer