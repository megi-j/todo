import React from 'react';
import './Reset.css'
import './App.css';
import TodoBox from './TodoBox';
import {useState, useEffect} from 'react'

function App() {
  const [noteInputValue, setNoteInputValue] = useState<string>("")
  const [hours, setHours] =  useState<string>(new Date().toLocaleTimeString('en-US',{hour: '2-digit',
  minute: '2-digit',}))
  const [todos, setToDos] = useState<any>([{ text: "first todo", isDone: false, time: hours }])
  const [ClickedMark, setClickedMark] = useState(false);
  

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
  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setNoteInputValue(event.target.value)
  }
  function addNote(text:string, time: string){
    let newTodos = [...todos, {text, time}]
    setToDos(newTodos)
  }
 function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
  e.preventDefault()
  if(!noteInputValue)return;
  addNote(noteInputValue, hours)
  setNoteInputValue("")
 
 }
 function removeTodo(index:number){
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setToDos(newTodos)
 }
 function markTodo(index:number){
    let newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone;
    setToDos(newTodos)
  
 }
  return (
    <div className='container'>
      <h1 className='title'>Todo</h1>
      <TodoBox 
      noteInputValue={noteInputValue} changeNote={handleChange} handleSubmit={handleSubmit} todos={todos} removeTodo={removeTodo} changeDone={markTodo} hours={hours}
      />
    </div>
  );
}

export default App;
