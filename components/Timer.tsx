'use client'

import React from 'react'
import { useTimer } from 'react-timer-hook'

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  })

  return (
    <div className='text-center'>
      <div className='text-5xl'>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <button onClick={start}>Start</button> */}
      <button className='border border-black mr-4' onClick={pause}>Pause</button>
      <button className='border border-black'onClick={resume}>Resume</button>
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date()
          time.setSeconds(time.getSeconds() + 300)
          restart(time)
        }}
      >
        Restart
      </button> */}
    </div>
  )
}

export default function Timer() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600) // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  )
}
