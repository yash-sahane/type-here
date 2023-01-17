import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './challengeSection.css'


const ChallengeSection = ({ info, inputChangeHandler }) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a Speed Test Now!
            </h1>
            <TestContainer info={info} inputChangeHandler={inputChangeHandler} />
        </div>
    )
}

export default ChallengeSection