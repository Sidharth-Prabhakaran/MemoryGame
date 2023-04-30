import './App.css'
import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src" : "/img/helmet-1.png",mathced  : false},
  {"src" : "/img/potion-1.png",mathced  : false},
  {"src" : "/img/scroll-1.png",mathced  : false},
  {"src" : "/img/shield-1.png",mathced  : false},
  {"src" : "/img/sword-1.png",mathced  : false},
  {"src" : "/img/ring-1.png",mathced  : false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const[choice1, setChoice1] = useState(null)
  const[choice2, setChoice2] = useState(null)
  const[disabled, setDisabled] = useState(false)

const shuffleCards = () => {
  const shuffledCards = [...cardImages,...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))

  setChoice1(null)
  setChoice2(null)
  setCards(shuffledCards)
  setTurns(0)
}

const handleChoice = (card) => {
  choice1 ? setChoice2(card) : setChoice1(card)
}

useEffect(() => {
  
  if(choice1 && choice2) {
    setDisabled(true)
    if(choice1.src === choice2.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if(card.src === choice1.src) {
            return {...card, matched: true}
          }else {
            return card
          }
        })
      })
      resetTurn()
    } else {
      setTimeout(resetTurn, 1000)
    }
  }

},[choice1, choice2])

// console.log(cards)

const resetTurn = () => {
setChoice1(null)
setChoice2(null)
setTurns(prevTurns => prevTurns + 1)
setDisabled(false)
}

useEffect(() => {
  shuffleCards()
},[])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button className='btn btn-success' onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id} card={card}
          handleChoice = {handleChoice}
          flipped={card === choice1 || card === choice2 || card.matched}
          disabled = {disabled}/>
          ))}
      </div>
      <p>Turns : {turns}</p>
    </div>
  );
}

export default App