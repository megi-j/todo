import bin from './images/Vector.png'
import arrow from './images/arrow.png'
type Props={
  noteInputValue: string;
  removeTodo: (text:any)=>void;
  changeDone: ()=>void;
  isDone: boolean
}
export default function ResultBox(props:Props) {
  return (
    
    <div className='result-box'>
       <p>{props.noteInputValue}</p>
       <div className="no-check" onClick={props.changeDone} style={{backgroundColor: props.isDone ? "#20EEB0" : ""}}>
          <img src={arrow} alt="arrow" style={{display: props.isDone ? "block" : "none"}} />
       </div>
       {/* <div className="check" onClick={props.changeDone} style={{opacity: props.isDone ? 1 : 0}}> */}
        
       {/* </div> */}
       <img onClick={(e)=>props.removeTodo(e)} src={bin} alt="bin" />
       
    </div>
  )
}
