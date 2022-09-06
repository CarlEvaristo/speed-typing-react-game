import React from "react"


export default function App() {
  const [started, setStarted] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [count, setCount] = React.useState(0)
  const [timeRemaining, setTimeRemaining] = React.useState(10)
  const textarea = React.useRef(null);

  function handleChange(event) {
    setInput(event.target.value)
  }
  
  React.useEffect(()=>{
    textarea.current.focus();

    if (started && timeRemaining > 0) {
      setTimeout(()=>setTimeRemaining(prev=>prev-1), 1000)
    } else if (timeRemaining === 0) {
      setStarted(false)
      let words = input.trim().split(" ")
      words = words.filter(word => word !== "")
      setCount(words.length)
    }
  },[started, timeRemaining])

  function startGame() {
    setInput("")
    setTimeRemaining(10)
    setCount(0)
    setStarted(prev=>prev===false && true)
  }

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

