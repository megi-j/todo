import React from 'react';
import './Reset.css'
import './App.css';
import TodoBox from './TodoBox';
import {useState, useEffect} from 'react'
import { TodoType } from './types';

function App() {
  const [noteInputValue, setNoteInputValue] = useState<string>("")
  const [hours, setHours] =  useState<string>(new Date().toLocaleTimeString('en-US',{hour: '2-digit',
  minute: '2-digit',}))
  const [todos, setToDos] = useState<TodoType[]>([{ text: "first todo", isDone: false, time: hours }])
  const [marked, setMarked] = useState<boolean>(false)
  

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
  function addNote(text:string, time: string, isDone: boolean){
    let newTodos = [...todos, {text, time, isDone}]
    setToDos(newTodos)
  }
 const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e)=>{
  e.preventDefault()
  if(!noteInputValue)return;
  addNote(noteInputValue, hours, marked)
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
 function changeMark(){
  setMarked(!marked)
 }
  return (
    <div className='container'>
      <h1 className='title'>Todo</h1>
      <TodoBox 
      noteInputValue={noteInputValue} changeNote={handleChange} handleSubmit={handleSubmit} todos={todos} removeTodo={removeTodo} changeDone={markTodo} hours={hours} changeMark={changeMark} marked={marked}
      />
    </div>
  );
}

export default App;
