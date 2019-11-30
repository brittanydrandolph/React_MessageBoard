import React, { useState } from 'react';

const Message = (props) => {
    const [ messageState, setMessageState] = useState ({
        messages: [
            {id: 1, commentId: 1, message: "You're the brightest witch of your age, H!", name: "Ginny Weasley (hard-coded)"},
        ]
    });

    console.log(messageState);

    const onSubmit = (event) => {
        event.preventDefault();
        const name = messageState.name.value;
        const message = messageState.message.value;
        const newMessage = {message: message, name: name};
        const messages = [...messageState.messages, newMessage];
        setMessageState({
            messages: messages
        });
    }

    const messageStyle = {
        padding: '5px',
        border: '1px solid black',
        boxShadow: '3px 3px 4px #eee',
        width: '40%',
        marginTop: '5px',
        height: '20px',
        display: 'inline-block',
    }
    const nameStyle= {
        padding: '5px',
        border: '1px solid black',
        boxShadow: '2px 2px 3px #eee',
        marginTop: '5px',
        marginRight: '5px',
        verticalAlign: 'top',
        height: '20px',
    }

    return (
        <div className="message">
            <form onSubmit={onSubmit}>
                <input  
                style={nameStyle} 
                type="text" 
                placeholder="Your name..."
                ref={input => messageState.name = input}/>

                <textarea
                style={messageStyle} 
                placeholder="Type your message reply here..."
                ref={input => messageState.message = input}/>
                
                <button 
                type="submit"
                onClick={props.onSubmit}> Submit message</button>
            </form>
        </div>
    )
}

export default Message;