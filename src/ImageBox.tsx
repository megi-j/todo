import flowers from './images/Rectangle 2.png'
import {useState, useEffect} from 'react'

type Props={
  hours: string
}
export default function ImageBox(props:Props) {
  const [day, setDay] = useState<string>(new Date().toLocaleString(
    'default', {weekday: 'short'}
  ))
  const [date, setDate] = useState<number>(new Date().getDate())
 
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
    <div className='img-box'>
        <img src={flowers} alt="flowers" />
        <h5>{day} {date}</h5>
        <h2>{props.hours}</h2>
    </div>
  )
}
