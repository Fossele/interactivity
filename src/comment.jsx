


import { useState } from "react";
import reply from "/images/icon-reply.svg";
import edit from "/images/icon-edit.svg"
import plus from "/images/icon-plus.svg"
import minus from "/images/icon-minus.svg"
import "./App.css"

import { AddReply } from "./reply.jsx";

const Counter = ({ setCount, count }) => {
    return (
        <div className='counter'>
            <button onClick={() => { setCount(count + 1) }}> <img src={plus} /> </button>
            <p>{count}</p>
            <button onClick={() => { if (count > 0) { setCount(count - 1) } }}> <img src={minus} /> </button>
        </div>);

}


//takes one comment object as input to generate a comment field
const Comment = ({ comment }) => {

    const [count, setCount] = useState(0);
    const [createReply, setCreateReply] = useState(false);
    /*const [hello, setHello] = useState(true);
    const [del, setDelete] = useState(false);
    //to get the exact comment to delete we will create a state called comment id
     const [commentId, setCommentId] = useState([]);
     <img src={currentUser.image.png.replace('.', '')} alt="error"/>
  */
    return (
        
        <>     
                <Counter setCount={setCount} count={count} />   
                <div className='comment'>
                    <div className='comment-info'>

                        <div className='user-infos'>
                            <div className='user'>
                                <img src={comment.user.image.png.replace('.', '')} alt="error" />
                                <p>{comment.user.username}</p>
                            </div>
                            <p className='comment-date'>
                                {comment.createdAt}
                            </p>
                        </div>

                        <span>
                            <button className='reply' onClick={()=>setCreateReply(true)}>
                                <img src={reply} />
                                <p>reply</p>
                            </button>
                        </span>
                    </div>
                    <div className='content'>{comment.content} </div>
                </div>
                {
                    createReply && <AddReply />
                }
        </>
        
    );
}


export default Comment;