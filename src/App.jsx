import { useState } from 'react'
import './App.css'
import data from "./data.json"
import replyIcon from "/images/icon-reply.svg"
import delet from "/images/icon-delete.svg"
import edit from "/images/icon-edit.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"

//components
import Comment from './comment.jsx';
import { UserReply, CurrentUserReply, AddReply } from './reply.jsx'
import AddComment from './addcomment.jsx'


const { currentUser, comments } = data;

//developement plan

/*

let's build now the add comment tap
let display our content from the json file


*/



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
      {
        comments.map((comment) => (
          <div key={comment.id} className='comment-container'>
            <Comment comment={comment} />
            {
              comment.replies.map((reply) => (
                <div key={reply.id} className='comment-container'>

                  {reply.user.username === currentUser.username ? <CurrentUserReply reply={reply} /> : <UserReply reply={reply} />}

                </div>)
              )}
          </div>)
        )}

      <AddComment/>
    </div>
  )
}



export default App
