import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment';
import ShowComment from './ShowComment/ShowComment';
import ShowMessage from './ShowMessage/ShowMessage';
import Message from './Message/Message';

class App extends Component {
  state = { 
    comments: [
      {id: 1, comment: "Honestly, am I the only person who’s ever bothered to read Hogwarts, A History?", name: "Hermonie Granger (hard-coded)"},
    ],
    messages: [
      {id: 1, commentId: 1, message: "You're the brightest witch of your age, H!", name: "Ginny Weasley (hard-coded)"}
    ]
  };

  render() {
    const commentss = (
      <div>
        {this.state.comments.map(com => {
          return <ShowComment 
          name={com.name}
          comment={com.comment}
          key={com.id}/>
        })};
      </div>
    )

    const messagess = (
      <div>
        {this.state.messages.map(mes => {
          return <ShowMessage 
          name={mes.name}
          message={mes.message}
          key={mes.id}/>
        })};
        <Message />
      </div>
      )

    return (
      <div className="App">
        <h1>Message Board</h1>
        <Comment />
        {commentss}
        {messagess}
      </div>
    );
  }
}

export default App;
