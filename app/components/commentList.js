import React from 'react';
import Comment from './comment';
const CommentList = React.createClass({
	render() {
		let commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

export default CommentList;
