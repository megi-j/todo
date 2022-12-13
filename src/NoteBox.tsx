

type Props={
  noteInputValue: string;
  changeNote: (text: any)=>void;
  addNote?:()=>void;
  handleSubmit: (text: any)=>void
}
export default function NoteBox(props:Props) {
  return (
    <div className='note-box'>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder='Note' value={props.noteInputValue} onChange={(e)=>props.changeNote(e)} />
        <button type='submit'>
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17.5V9.5M9 9.5V1.5M9 9.5H17M9 9.5H1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>

        </button>
      </form>
      
    </div>
  )
}
