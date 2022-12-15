import ResultBox from "./ResultBox";

type Props = {
  // filterCompleted: () => void,
  // todos?: any,
  // removeTodo?: (text:number)=>void;
  // changeDone?:(text:number)=>void;
  changeCompleteFilterClicked: ()=>void;
  
};


export default function FilterBox(props: Props) {

  
  return (
    <div className="filter-box">
      <button>all</button>
      <button onClick={props.changeCompleteFilterClicked}>complete</button>
    </div>
  );
}
