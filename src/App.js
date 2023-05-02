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
      if (firstVowelIndex === 0) {
        return eachWord + "way";
      } else if (eachWord[0] === "q" && eachWord[1] === "u"){
        return eachWord.substring(2) + "quay"
      } else {
        const beginningConsonants = eachWord.slice(0, firstVowelIndex);
        const restOfWord = eachWord.slice(firstVowelIndex);
        return restOfWord + beginningConsonants + "ay";
      }
    });
    const translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords)
    setInputTranslated(translatedWords);
  };

  // // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
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
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App