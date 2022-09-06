import React from "react"
import useWordCount from "./useWordCount"

export default function App() {
  const {textarea, handleChange, input, started, timeRemaining, startGame, count} = useWordCount()

  return(
    <main>
       <h1>Speed Typing Game</h1>
       <textarea ref={textarea} onChange={handleChange} value={input} disabled={!started} />
       <h4>Time remaining: {timeRemaining}</h4>
       <button onClick={startGame} disabled={started}>Start Game</button>
       <h1>Word Count: {count}</h1>
    </main>
  )
}

