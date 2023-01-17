import React from 'react'
import './testContainer.css'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'

const TestContainer = ({ info, inputChangeHandler }) => {
    return (
        <div className="test-container">
            {
                info.timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer info={info} inputChangeHandler={inputChangeHandler} />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain info={info} />
                    </div>
                )
            }
        </div>
    )
}

export default TestContainer