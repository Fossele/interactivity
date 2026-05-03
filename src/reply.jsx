/*there are replies created by the main(our) user and reply created by other user*/ 
//also note that a reply is first of all a comment but with modifications
import deleteIcon from "/images/icon-delete.svg"
import editIcon from "/images/icon-edit.svg"
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";
import replyIcon from "/images/icon-reply.svg"
import { useState } from 'react'

const Counter = ({ setCount, count }) => {
    return (
        <div className='counter'>
            <button onClick={() => { setCount(count + 1) }}> <img src={plus} /> </button>
            <p>{count}</p>
            <button onClick={() => { if (count > 0) { setCount(count - 1) } }}> <img src={minus} /> </button>
        </div>);

}

export const UserReply =({reply})=>{
        
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
    
export const CurrentUserReply =({reply})=>{
        
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
                                    <button className='reply'>
                                        <img src={editIcon} />
                                        <p>Update</p>
                                    </button>
                                </span>
                            </div>
                            <div className='content'><p>@{reply.replyingTo}</p>{reply.content} </div>
                        </div>
                </>
            );
        }
    
