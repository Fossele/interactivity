import data from "./data.json"
import deleteIcon from "/images/icon-delete.svg"
import editIcon from "/images/icon-edit.svg"
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";
import replyIcon from "/images/icon-reply.svg"
import { useState } from 'react'

const { currentUser, comments } = data;

function AddComment() {
  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value);

  }

  return (
    <div className='add-comment'>
      <img src={currentUser.image.png.replace('.', '')} alt="error" />
      <textarea onChange={handleInput} value={text} placeholder='add a comment...'></textarea>
      <button>SEND</button>
    </div>
  )
}


export default AddComment;
