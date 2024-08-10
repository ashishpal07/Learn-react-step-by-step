import React, { useEffect, useState } from 'react'

export const Timer = () => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [totalSeconds, setTotalSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setTotalSeconds(hours * 60 * 60 + minutes * 60 + seconds * 60)
  }, [hours, minutes, seconds])

  useEffect(() => {
    let timer
    if (isRunning && totalSeconds > 0) {
      timer = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds - 1)
      }, 1000)
    } else if (totalSeconds == 0) {
      setIsRunning(false)
    }

    return () => clearInterval(timer)
  }, [isRunning, totalSeconds])

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
  };

  function formatTime(time) {
    const hrs = Math.floor(time/3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 3600 % 60;

    return `${hrs.toString().padStart(2, 0)}:${mins.toString().padStart(2, 0)}:${secs.toString().padStart()}`
  }

  return (
    <div>
      <div>
        <label>
          Hours :
          <input
            type='Number'
            value={hours}
            onChange={e => setHours(e.target.value)}
            disabled={isRunning}
          />
        </label>
      </div>

      <div>
        <label>
          Minutes :
          <input
            type='Number'
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
            disabled={isRunning}
          />
        </label>
      </div>

      <div>
        <label>
          Seconds :
          <input
            type='Number'
            value={hours}
            onChange={e => setSeconds(e.target.value)}
            disabled={isRunning}
          />
        </label>
      </div>
      <div>
        <button onClick={startTimer} disabled={isRunning || totalSeconds === 0}>Start</button>
      </div>
      <div>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      </div>
      <div>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        <h1>{formatTime(totalSeconds)}</h1>
      </div>
    </div>
  )
}
