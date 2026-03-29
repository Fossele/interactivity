import { useState } from 'react'
import './App.css'
import data from "./data.json"
import reply from "/images/icon-reply.svg"
import delet from "/images/icon-delete.svg"
import edit from "/images/icon-edit.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"


const { currentUser, comments } = data;

//developement plan

/*

let's build now the add comment tap
let display our content from the json file


*/



const Comment = ({ text, setWriting, setUpdate }) => {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(true);
  const [del, setDelete] = useState(false);
  //to get the exact comment to delete we will create a state called comment id
  const [commentId, setCommentId] = useState([]);

  return (
    <>
      {!del && <div className='comment-container'>
        <div className='counter'>
          <button onClick={() => { setCount(count + 1) }}> <img src={plus} /> </button>
          <p>{count}</p>
          <button onClick={() => { if (count > 0) { setCount(count - 1) } }}> <img src={minus} /> </button>
        </div>
        <div className='comment'>
          <div className='comment-info'>
            <div className='infos'>
              <div className='user'>
                <img src={currentUser.image.png.replace('.', '')} alt="error"/>
                <p>name</p>
              </div>
              <p className='comment-date'>3weeks</p>
            </div >

            {hello ? <span>
              <button className='reply'>
              <img src={reply} /> <p>reply</p>
            </button> 
            </span>: <span>
              <button onClick={() => { setWriting(true); setUpdate(true) }}>  <img src={edit} /> <p>edit </p></button>
              <button onClick={() => setDelete(true)}><img src={delet} /><p> delete </p></button>
            </span>}

          </div>
          <div className='comment-content'>{text}<p>Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to 
            dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!</p> </div>
        </div>
      </div>
      }
    </>
  );
}


const Reply = () => {

  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false)
  const [writing, setWriting] = useState(true);


  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <div className='reply-field'>
      {writing ? <>
        <img src={plus} />
        <input onChange={handleInput} value={text} />

        {update ? <>
          <button onClick={() => { setWriting(false); setUpdate(false) }}>
            <img src={edit} />Update
          </button>
          <button onClick={() => { setWriting(false); setUpdate(false) }}>
            <img src={del} /> Delete
          </button>
        </> : <button onClick={() => setWriting(false)}>
          REPLY
        </button>}
      </> : <Comment text={text} setWriting={setWriting} setUpdate={setUpdate} />}
    </div>


  );
}

function Addcomment() {
  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value);
  
  }

  return (
    <div className='add-comment'>
      <img src={currentUser.image.png.replace('.', '')} alt="error"/>
      <textarea onChange={handleInput} value={text} placeholder='add a comment...'></textarea>
      <button>SEND</button>
    </div>
  )
}

const Confirmation = () => {

  return (
    <div className='modal'>
      <h1>Delete Comment</h1>
      <p>Are you sure you want to delete this comment? This will delete this comment and can't be undone.</p>
      <div>
        <button>NO, CANCEL</button>
        <button>YES, DELETE</button>
      </div>
    </div>);
}




function App() {
  //console.log(copyData.comments[0].id+ "hey");
  const array = structuredClone(data.comments);
  console.log(currentUser);
  console.log(comments);

  return (
    <div className='app'>
     {/*<img src={data.currentUser.image.png.replace('.', '')} />
      <div>
        {
          comments.map((elt) => (
            <div key={elt.id}>
              <img src={currentUser.image.png.replace('.', '')} alt="error"/><p>{elt.content}</p>
              {!(elt.replies.length == 0) && <p>not cool</p>}
             <b>working</b>
            </div>
          ))
        }
      </div>*/}
      <Comment/>
      <Addcomment />
    </div>
  )
}

export default App
