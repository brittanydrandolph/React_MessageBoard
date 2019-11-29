import React, { useState } from 'react';
import '../App.css';

// Using a functional component for Comment instead of a class based component -- adds comment to the Comment state array, but won't rerender the page to show it
const Comment = (props) =>{
const [ commentsState, setCommentsState] = useState({
    comments: [
    {id: 1, comment: "Honestly, am I the only person who’s ever bothered to read Hogwarts, A History?", name: "Hermonie Granger (hard-coded)"},
    ]
});

    console.log(commentsState);

    const onSubmit = (event) => {
        event.preventDefault();
        const name = commentsState.name.value;
        const comment = commentsState.comment.value;
        const newComment = {comment: comment, name: name};
        const comments = [...commentsState.comments, newComment];
        setCommentsState({
            comments: comments
        });
    }

    const commentStyle = {
        padding: '5px',
        border: '1px solid black',
        boxShadow: '3px 3px 4px #eee',
        width: '98%',
        marginTop: '5px',
        height: '50px',
    }
    const nameStyle= {
        padding: '5px',
        border: '1px solid black',
        boxShadow: '2px 2px 3px #eee',
    }

    return (
        <div className="comment">
            <form onSubmit={onSubmit}>
                <input 
                style={nameStyle} 
                type="text" 
                placeholder="Your name..."
                ref={input => commentsState.name = input}
                />

                <br />

                <textarea 
                style={commentStyle} 
                placeholder="Type your comment here..."
                ref={input => commentsState.comment = input}/>

                <br />

                <button 
                type="submit"
                onClick={props.onSubmit}> Submit Comment</button>
            </form>
        </div>
    );
}

export default Comment;