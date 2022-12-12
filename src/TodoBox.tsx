import React from 'react'
import flowers from './images/Rectangle 2.png'
import {useState, useEffect} from 'react'

export default function TodoBox() {
  const [hours, setHours] =  useState<string>(new Date().toLocaleTimeString('en-US',{hour: '2-digit',
    minute: '2-digit',}))
  const [day, setDay] = useState<string>(new Date().toLocaleString(
    'default', {weekday: 'short'}
  ))
  const [date, setDate] = useState<number>(new Date().getDate())
  // let date = new Date()
  // const withPmAm = date.toLocaleTimeString('en-US', {
  //   // en-US can be set to 'default' to use user's browser settings
  //   hour: '2-digit',
  //   minute: '2-digit',
  // });
  function refreshClock(){
    setHours(new Date().toLocaleTimeString('en-US',{hour: '2-digit',
    minute: '2-digit',}))
  }
  useEffect(()=>{
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup(){
      clearInterval(timerId)
    }
  }, [])
  function refreshDay(){
    setDay(new Date().toLocaleString(
      'default', {weekday: 'short'}
    ))
  }
  useEffect(()=>{
     const dayTimer = setInterval(refreshDay, 86400000);
     return function clean(){
      clearInterval(dayTimer)
     }
  },[])
  function refreshDate(){
    setDate(new Date().getDate())
  }
  useEffect(()=>{
    const dateId = setInterval(refreshDate, 86400000)
    return function clearDate(){
      clearInterval(dateId)
    }
  },[])
  return (
    <div className="todo-box">
      <div className='img-box'>
         <img src={flowers} alt="flowers" />
         <h5>{day} {date}</h5>
         <h2>{hours}</h2>
      </div>
    </div>
  )
}
