import bin from './images/Vector.png'
import arrow from './images/arrow.png'

type Props={
  noteInputValue: string;
  removeTodo: (text:any)=>void;
  changeDone: ()=>void;
  isDone: boolean;
  time: string
}
export default function ResultBox(props:Props) {
  return (
    <div className='result-box'>
      <div className="todo-info">
        <h4>{props.noteInputValue}</h4>
        <p>Today at {props.time}</p>
      </div>
      <div className='icon-box'>
        <div className="no-check" onClick={props.changeDone} style={{backgroundColor: props.isDone ? "#20EEB0" :  ""}}>
            <img src={arrow} alt="arrow" style={{display: props.isDone ? "block" : "none"}} />
        </div>
        <img onClick={(e)=>props.removeTodo(e)} src={bin} alt="bin" className='bin' />
      </div>   
    </div>
  )
}
