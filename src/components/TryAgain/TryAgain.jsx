import React from 'react'
import './tryAgain.css'

const TryAgain = ({ info }) => {
    return (
        <div data-aos="fade-up" className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p><b>Character : </b>{info.characters}</p>
                <p><b>Words : </b>{info.words}</p>
                <p><b>WPM : </b>{info.wpm} wpm</p>
            </div>
            <div>
                <button className="end-buttons start-again-btn">Re-try</button>
                <button onClick={() => {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam", "width=800, height=600");
                }} className="end-buttons share-btn">Facebook</button>
                <button onClick={() => {
                    window.open("https://twitter.com/intent/tweet?text=yashsahane.com", "widht=800, height=600");
                }} className="end-buttons tweet-btn">Share</button>
            </div>
        </div>

    )
}

export default TryAgain