import React, { useState } from 'react';
import './app.css'
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Data from './Data';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';

function App() {
  // Data = (() => {})
  // para = return of Data ie array[]
  // and para[0] = 1st element of array

  // code for splitting each letter and map info obj for extra info
  const [para, setPara] = useState(Data);
  const getPara = para[Math.floor(Math.random() * para.length)].para;
  const paraDetails = getPara.split('').map(letter => {
    return {
      testLetter: letter,
      status: 'notAttempted'
    }
  })

  const totalTime = 10;
  const [info, setInfo] = useState({
    selectedPara: paraDetails,
    timerStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0
  })

  const startTimer = () => {
    setInfo(info => {
      return {
        ...info,
        timerStarted: true,
      }
    });

    const timer = setInterval(() => {
      if (info.timeRemaining < 5) {
        console.log('time remaining is ', info.timeRemaining);
      }
      if (info.timeRemaining > 0) {
        console.log('time remaining: ', info.timeRemaining);
        console.log('words : ', info.words);
        const timeSpent = totalTime - info.timeRemaining;
        console.log('time spent :', timeSpent);
        const wpm = timeSpent > 0 ? (info.words / timeSpent) * totalTime : 0;
        console.log(wpm);
        setInfo(info => {
          return ({
            ...info,
            timeRemaining: info.timeRemaining - 1,
            wpm: parseInt(wpm),
          })
        });
      } else {
        clearInterval(timer);
      }
    }, 1000)
  }

  const inputChangeHandler = (e) => {
    if (!info.timerStarted) {
      startTimer();
    }

    const characters = e.target.value.length;
    const words = e.target.value.split(' ').length;
    const index = characters - 1;

    // underflow condition
    if (index < 0) {
      setInfo(info => ({
        selectedPara: {
          testLetter: info.selectedPara[0].testLetter,
          status: 'notAttempted',
        },
        ...info.selectedPara.slice(1),
        words: words,
        characters: characters,
        ...info,
      }
      ))
      return;
    }

    // overflow condition
    // console.log(info.selectedPara.length);
    if (index >= info.selectedPara.length) {
      setInfo(info => {
        return {
          ...info, words: words, characters: characters
        }
      })
      return;
    }

    // make a copy of selectedPara
    const testInfo = info.selectedPara;
    if (!(index === info.selectedPara.length - 1)) {
      testInfo[index + 1].status = 'notAttempted';
    }

    // check for the correct typed letter
    const isCorrect = e.target.value[index] === testInfo[index].testLetter;

    // update the testInfo
    testInfo[index].status = isCorrect ? 'correct' : 'incorrect';

    // set State
    setInfo(info => {
      return {
        selectedPara: testInfo,
        ...info
      }
    })
  }

  return (
    <div className="App">
      <Nav />
      <Landing />
      <ChallengeSection info={info} inputChangeHandler={inputChangeHandler} />
    </div>
  );
}

export default App;
