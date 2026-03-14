import { useState } from 'react'
import './App.css'
import data from "./data.json"
import reply from "./images/icon-reply.svg"
import del from "./images/icon-delete.svg"
import edit from "./images/icon-edit.svg"
import plus from "./images/icon-plus.svg"
import minus from "./images/icon-minus.svg"

const Comment = ({text, setWriting, setUpdate}) => {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(false);
  //to get the exact comment to delete we will create a state called comment id
  const [commentId, setCommentId] = useState([]);

  return (
    <div className='comment-container'>

      <div className='counter'>
        <button onClick={()=>{setCount(count+1)}}> <img src={plus}/> </button>
        {count}
        <button onClick={()=>{if(count>0) {setCount(count-1)}}}> <img src={minus}/> </button>
      </div>
      <div>
        <div className='comment-info'>
          <div className='infos'>
            <div className='user'>
            <img src='hello' alt="empty" /> 
            <p>name</p>
            </div>
            <p className='comment-date'></p>
          </div >

        {hello ? <button className='reply'>
           <img src={reply}/> 
            </button> :<div>
          <button onClick={()=>{setWriting(true); setUpdate(true)}}>  <img src={edit}/> edit</button>
          <button><img src={del}/> delete</button>
          </div>}
        </div>
        <div className='comment-content'>{text}</div>
      </div>
    </div>);
}


const Reply=()=>{

const [text, setText] = useState("");
const [update, setUpdate] = useState(false)
const [writing, setWriting] = useState(true);


function handleInput(e){
 setText(e.target.value);
}

  return(
    <div>
  
      {writing ?<><img src={plus}/><input onChange={handleInput} value={text}/> {update? <button onClick={()=>{setWriting(false); setUpdate(false)}}>Update</button>: <button onClick={()=>setWriting(false)}>REPLY</button>}</>:<Comment text={text} setWriting = {setWriting} setUpdate={setUpdate}/>}

    </div>
  );
}


const Confirmation = () => {

  return (
    <div>
      <h1>Delete Comment</h1>
      <p>Are you sure you want to delete this comment? This will delete this comment and can't be undone.</p>
      <div>
        <button>NO, CANCEL</button>
        <button>YES, DELETE</button>
      </div>
    </div>);
}




function App() {
  console.log(data.comments);
  return (
    <>
      <Reply/>
    </>
  )
}

export default App
