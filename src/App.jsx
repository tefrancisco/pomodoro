import { useState, useRef } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [timeLeft, setTimeLeft] = useState(1500)
  const [isPaused, setIsPaused] = useState(false)

  let minutesLeft = Math.floor(timeLeft / 60)
  let secondsLeft = timeLeft % 60
  let interval = useRef()

  function startTimer() {
    interval.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    console.log(interval.current)
  }

  function pauseTimer() {
    if (isPaused) {
      startTimer()
    }

    else {
      clearInterval(interval.current)
    }
    
    setIsPaused((prev) => !prev)
  }

  function resetTimer() {
    setTimeLeft(1500)
    setIsPaused(false)
    clearInterval(interval.current)
  }

  return (
    <div id='main' className="font-mono w-screen h-screen bg-stone-800 text-stone-200 flex flex-col gap-3 justify-center items-center">
      <h1 className='text-6xl'>Pomodoro</h1>
      <main className='rounded-lg sm:w-[60%] md:w-103 md:h-72 w-[95%] h-[30%] flex justify-center items-center flex-col gap-3 bg-blue-900'>
        <h1 className='text-7xl'>{`${minutesLeft}:${String(secondsLeft).padStart('2', 0)}`}</h1>
        <section className='flex gap-5'>
          {timeLeft === 1500 && (
            <Button
            color='bg-green-500'
            onClick={() => startTimer()}
          >
            Start
          </Button>
          )}
          {timeLeft !== 1500 && ( 
            <>
            <Button
            color='bg-yellow-500'
            onClick={() => pauseTimer()}
          >
            {isPaused ? 'Resume' : 'Pause'}
          </Button>
          <Button
            color='bg-red-600'
            onClick={() => resetTimer()}
          >
            Reset
          </Button>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
