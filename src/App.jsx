import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [timeLeft, setTimeLeft] = useState(1500)

  let minutesLeft = Math.floor(timeLeft / 60)
  let secondsLeft = timeLeft % 60

  function startTimer() {
    let interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)
  }

  function pauseTimer() {
    clearTimeout(interval)
  }

  return (
    <div className="w-screen h-screen bg-stone-800 text-stone-200 flex flex-col gap-3 justify-center items-center">
      <h1 className='text-6xl'>Pomodoro</h1>
      <main className='w-[80%] h-[40%] flex justify-center items-center flex-col gap-3 bg-blue-400'>
        <h1 className='text-8xl'>{`${minutesLeft} : ${secondsLeft}`}</h1>
        <section className='flex gap-5'>
          <Button
            color='bg-green-500'
            onClick={() => startTimer()}
          >
            Start
          </Button>
          <Button color='bg-yellow-500'>Pause</Button>
          <Button color='bg-red-600'>Reset</Button>
        </section>
      </main>
    </div>
  )
}

export default App
