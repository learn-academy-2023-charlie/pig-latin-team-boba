import React, { useState } from 'react';
import './App.css';
import butcherPigImage from './assets/butcherPig.jpeg';

const App = () => {

  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent");
  const [inputTranslated, setInputTranslated] = useState("");

  const myPigLatinCodeHere = () => {
    const arrayOfUserInput = userInput.split(" ");
    const translatedWordsArray = arrayOfUserInput.map(word => {
      const eachWord = word[0];
      if (/[aeiou]/i.test(eachWord)) {
        return (word + "way");
      } else {
        return (word.substring(1) + eachWord + "ay");
      }
    });
    setInputTranslated(translatedWordsArray.join(" "));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    myPigLatinCodeHere();
  };
  
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="user-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Yue Han & Bea</footer>
    </div>
  );
};





  // const myPigLatinCodeHere = () => {

  //   const arrayOfUserInput = userInput.split(" ")
  //   console.log("arrayOfUserInput:", arrayOfUserInput)

  //   const translatedWordsArray = arrayOfUserInput.map(eachWord => {
  //     console.log("eachWord:", eachWord) 
  //     const vowelsArray = eachWord.split("").filter(vowel => {
  //       return (
  //         vowel === "a" || 
  //         vowel === "e" || 
  //         vowel === "i" || 
  //         vowel === "o" || 
  //         vowel === "u"
  //        })
  //     })
  //         console.log("vowelsArray:", vowelsArray)

  //           const firstVowel = vowelsArray.substring(0)
  //           const restofWords = eachWord.slice(eachWord.indexOf(firstVowel)) 
  //              if (/[aeiou]/i.test(firstVowel)) 
  //               return ((restofWords + firstVowel + "way").join(""))
  //               else {
  //                 return eachWord
  //              }
  //             }
  //           const translatedWords = setInputTranslated(translatedWordsArray.join(" "))
        
          // "string" "tring"
          // String.substring(1)

      // ACTION ITEM: your Pig Latin logic goes here!

      // vowel-function
      // - if the words beginning with a vowel, 
      //  return add "way" to the end.

  

      // consonant functionality
      // - if beginning with one or more consonants, 
      // return by moving all of the first consecutive consonants to the end 
      // return add "ay".

      // qu functionality
      // - If the first consonants include "qu", 
      // then move the "u" along with the "q". (Don't forget about words like "squeal" where "qu" doesn't come first!)

      // y functionality

    

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
  //     return eachWord
  //   })

  //   // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
  //   const translatedWords = translatedWordsArray.join(" ")
  //   console.log("translatedWords:", translatedWords)

  //   // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
  //   setInputTranslated(translatedWords)
  // }

  // // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  // const restartGame = () => {
  //   setUserInput("apple through queen squeal fry fluent")
  //   setInputTranslated("")
  // }

  // // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  // const setUpPreventDefault = (e) => {
  //   e.preventDefault()
  //   myPigLatinCodeHere()
  // }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
//   const handleInput = (e) => {
//     setUserInput(e.target.value)
//   } 
//   return (
//     <div className="page-container">
//       <div className="body-container">
//         <h1>Pig Latin Translator</h1>
//         <img
//           src={butcherPigImage}
//           alt="pig with butcher cut names in pig latin"
//           className="butcher-pig-image"
//         />

//         <div className="input-section">
//           <h4>Enter phrase to be translated:</h4>
//           <input
//             type="text"
//             className="user-input"
//             onChange={handleInput}
//             value={userInput}
//           />
//           <br />
//           <button onClick={setUpPreventDefault}>Submit</button>
//           <button onClick={restartGame}>Clear</button>
//         </div>
//         <p>{inputTranslated}</p>
//       </div>
//       <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
//     </div>
//   )
// }

export default App