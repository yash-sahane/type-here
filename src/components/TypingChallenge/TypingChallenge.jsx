import React, { useRef } from 'react'
import './typingChallenge.css'
import TestLetter from '../TestLetter/TestLetter';
import { v4 as uuidv4 } from 'uuid';

const TypingChallenge = ({ info, inputChangeHandler }) => {
    const textArea = useRef(null);

    const onInputChange = (e) => {
        inputChangeHandler(e);
    }

    return (
        <div className="typing-challenge">
            <div className="time-challenge">
                <p className="timer">00 : {info.timeRemaining >= 10 ? info.timeRemaining : `0${info.timeRemaining}`}</p>
                <p className="timer-info">{!info.timerStarted && 'Start typing to start the test'}</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea text-paragraph" onClick={() => textArea.current.focus()} onKeyDown={() => textArea.current.focus()}>
                        {info.selectedPara.map((eachLetterInfo) => <TestLetter eachLetterInfo={eachLetterInfo} key={uuidv4()} />)}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea cols="0" rows="0" className="textarea" placeholder='start typing here' ref={textArea} onChange={onInputChange}>

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge