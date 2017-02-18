import React from 'react';
import Comment from './comment';
const CommentList = React.createClass({
	render() {
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
			</div>
		);
	}
});

export default CommentList;
