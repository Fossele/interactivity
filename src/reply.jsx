/*there are replies created by the main(our) user and reply created by other user*/
//also note that a reply is first of all a comment but with modifications
import deleteIcon from "/images/icon-delete.svg"
import editIcon from "/images/icon-edit.svg"
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";
import replyIcon from "/images/icon-reply.svg"
import { useState } from 'react'

const { currentUser, comments } = data;

const Counter = ({ setCount, count }) => {
    return (
        <div className='counter'>
            <button onClick={() => { setCount(count + 1) }}> <img src={plus} /> </button>
            <p>{count}</p>
            <button onClick={() => { if (count > 0) { setCount(count - 1) } }}> <img src={minus} /> </button>
        </div>);

}

export const UserReply = ({ reply }) => {

    const [count, setCount] = useState(0);

    return (
        <>
            <Counter setCount={setCount} count={count} />
            <div className='comment'>
                <div className='comment-info'>

                    <div className='user-infos'>
                        <div className='user'>
                            <img src={reply.user.image.png.replace('.', '')} alt="error" />
                            <p>{reply.user.username}</p>
                        </div>
                        <p className='comment-date'>
                            {reply.createdAt}
                        </p>
                    </div>

                    <span>
                        <button className='reply'>
                            <img src={replyIcon} />
                            <p>reply</p>
                        </button>
                    </span>
                </div>
                <div className='content'><p>@{reply.replyingTo}</p>{reply.content}</div>
            </div>
        </>
    );
}

export const CurrentUserReply = ({ reply }) => {

    const [count, setCount] = useState(0);
    const [editing, setEdit] = useState(false);
    const [text, setText] = useState("");

    function handleInput(e) {
        setText(e.target.value);
    }

    return (
        <>
            <Counter setCount={setCount} count={count} />
            <div className='comment'>
                <div className='comment-info'>

                    <div className='user-infos'>
                        <div className='user'>
                            <img src={reply.user.image.png.replace('.', '')} alt="error" />
                            <p>{reply.user.username}</p>
                            <p>YOU</p>
                        </div>
                        <p className='comment-date'>
                            {reply.createdAt}
                        </p>
                    </div>

                    <span>
                        <button className='delete'>
                            <img src={deleteIcon} />
                            <p>Delete</p>
                        </button>
                        <button className='edit' onClick={() => setEdit(true)}>
                            <img src={editIcon} />
                            <p>Edit</p>
                        </button>
                    </span>
                </div>

                {/*when not editing it shows the content of the reply */}
                {!editing ? <div className='content'><p>@{reply.replyingTo}</p>{reply.content} </div> : <>

                    <input onChange={handleInput} value={text} />
                    <button onClick={()=>{
                        reply.content = text;
                        setEdit(false);
                    }}>Update</button>
                </>
                }
            </div>
        </>
    );
}

function AddReply() {
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

/*


const AddReply = () => {

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
*/