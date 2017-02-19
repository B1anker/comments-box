/**
 * Created by b1anker on 2017/02/17.
 */
import React, {Component} from 'react';
import Comment from './comment';

class CommentList extends Component {
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
}

export default CommentList;
