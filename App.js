import React, { useState } from 'react';
import './App.css';
import butcherPigImage from './assets/butcherPig.jpeg';

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  const myPigLatinCodeHere = () => {
    const arrayOfUserInput = userInput.split(" ")
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u")
        })
        const firstVowelIndex = eachWord.indexOf(vowelsArray[0]);
        const firstSyllable = (vowelsArray[0] === "u" && eachWord.indexOf("qu") !== -1)
          ? eachWord.slice(0, eachWord.indexOf("qu") + 2)
          : eachWord.slice(0, firstVowelIndex);
        const restOfWord = (vowelsArray.length === 0)
          ? eachWord
          : (vowelsArray[0] === "u" && eachWord.indexOf("qu") !== -1)
          ? eachWord.slice(eachWord.indexOf("qu") + 2)
          : eachWord.slice(firstVowelIndex);
        
        return (firstVowelIndex === 0)
          ? eachWord + "way"
          : restOfWord + firstSyllable + "ay"
        
    })
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)
    setInputTranslated(translatedWords)
  } 
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: boba team Yue Han & Bea</footer>
    </div>
  )
}

export default App
