import React from 'react';
import './Reset.css'
import './App.css';
import TodoBox from './TodoBox';
import {useState} from 'react'

function App() {
  const [noteInputValue, setNoteInputValue] = useState<string>("")
  const [todos, setToDos] = useState<any>([{ text: "first todo", isDone: false }])
  const [ClickedMark, setClickedMark] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
    setNoteInputValue(event.target.value)
  }
  function addNote(text:string){
    let newTodos = [...todos, {text}]
    setToDos(newTodos)
  }
 function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
  e.preventDefault()
  if(!noteInputValue)return;
  addNote(noteInputValue)
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
      noteInputValue={noteInputValue} changeNote={handleChange} handleSubmit={handleSubmit} todos={todos} removeTodo={removeTodo} changeDone={markTodo}
      />
      
    
    </div>
  );
}

export default App;
