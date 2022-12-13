import React from 'react'
import ImageBox from './ImageBox'
import NoteBox from './NoteBox'
import ResultBox from './ResultBox';

type Props={
  noteInputValue: string;
  changeNote: (text: any)=>void;
  resultBox?: any;
  addNote?: ()=>void;
  handleSubmit: (text:any)=>void;
  todos?: any;
  removeTodo: (text:number)=>void;
  changeDone: (text:number)=>void
}
export default function TodoBox(props:Props) {
  
  return (
    <div className="todo-box">
      <ImageBox />
      <NoteBox noteInputValue= {props.noteInputValue} changeNote={props.changeNote} addNote={props.addNote} handleSubmit = {props.handleSubmit} />
      {props.todos.map((item:any, index:number)=>{
        return <ResultBox noteInputValue = {item.text} removeTodo={()=>props.removeTodo(index)} changeDone={()=>props.changeDone(index)} isDone={item.isDone} />
       })}
    </div>
  )
}
