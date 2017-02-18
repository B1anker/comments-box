/**
 * Created by b1anker on 2017/02/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './commentList';
import CommentForm from './commentForm';


const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

export default CommentBox;
