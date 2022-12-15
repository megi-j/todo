import arrow from './images/arrow.png'
type Props={
  noteInputValue: string;
  changeNote: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  addNote?:()=>void;
  handleSubmit:  React.FormEventHandler<HTMLFormElement>;
  // changeDone: ()=>void;
  // isDone: boolean;
  changeMark: ()=>void;
  marked: boolean;
}
export default function NoteBox(props:Props) {
  return (
    <div className='note-box'>
      <form onSubmit={props.handleSubmit}>
        <div className='input-box'>
          <div className="no-check" onClick={props.changeMark} style={{backgroundColor: props.marked ? "#20EEB0" :  ""}}>
            <img src={arrow} alt="arrow" style={{display: props.marked ? "block" : "none"}} />
          </div>
          <input type="text" placeholder='Note' value={props.noteInputValue} onChange={(e)=>props.changeNote(e)} />
        </div>
        
        <button type='submit'>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17.5V9.5M9 9.5V1.5M9 9.5H17M9 9.5H1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </form>   
    </div>
  )
}
