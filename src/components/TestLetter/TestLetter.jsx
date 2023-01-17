import React from 'react'
import './testLetter.css'

const TestLetter = ({ eachLetterInfo }) => {
    const { status } = eachLetterInfo;

    const statusClass = {
        correct: 'test-letter-correct',
        incorrect: 'test-letter-incorrect',
        notAttempted: 'test-letter-not-attempted'
    }[status];

    return (
        <span className={`test-letter ${statusClass}`}>{eachLetterInfo.testLetter}</span>
    )
}

export default TestLetter