import ImageBox from './ImageBox'
import NoteBox from './NoteBox'
import ResultBox from './ResultBox';
import { TodoType } from './types';

// import FilterBox from './FilterBox'
type Props={
  noteInputValue: string;
  changeNote: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  // resultBox?: any;
  addNote?: ()=>void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>
  todos: TodoType[];
  removeTodo: (text:number)=>void;
  changeDone: (text:number)=>void;
  hours: string;
  changeMark:()=>void;
  marked: boolean;
}

export default function TodoBox(props:Props) {
  
  // const [completeFilterIsClicked, setCompleteFilterIsClicked] = useState<boolean>(false)

  
  // function filterCompleted() {
  //  console.log(completeFilterIsClicked)
  //   if(!completeFilterIsClicked){
      
  //     {props.todos.map((item:any, index:number)=>{

  //       return <ResultBox noteInputValue = {item.text} removeTodo={()=>props.removeTodo(index)} changeDone={()=>props.changeDone(index)} isDone={item.isDone} />
     
  //      })} 
  
  //   }else if(completeFilterIsClicked){
  //     props.todos.map((item: any, index: number) => {
  //       if (item.isDone === true) {
  //         return <ResultBox noteInputValue = {item.text} removeTodo={()=>props.removeTodo(index)} changeDone={()=>props.changeDone(index)} isDone={item.isDone} />;
         
  //       }else{
  //         return ""
  //       }
      
  //       // console.log(item)
  //     })}
      
  //   }
    
  
  // function changeCompleteFilterClicked(){
  //   setCompleteFilterIsClicked(true)
  // }
  return (
       <div className="todo-box">
          <ImageBox hours={props.hours} />
          <NoteBox noteInputValue= {props.noteInputValue} changeNote={props.changeNote} addNote={props.addNote} handleSubmit = {props.handleSubmit} changeMark={props.changeMark} marked={props.marked} />
          {/* <FilterBox /> */}
          {props.todos.map((item:any, index:number)=>{
            return <ResultBox noteInputValue = {item.text} removeTodo={()=>props.removeTodo(index)} 
            changeDone={()=>props.changeDone(index)} isDone={item.isDone} 
            time={item.time} key={index} />
            })}
          {/* {filterCompleted()} */}
       </div>
  )
}
