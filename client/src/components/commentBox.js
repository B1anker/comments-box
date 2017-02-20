/**
 * Created by b1anker on 2017/02/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentList from './commentList';
import CommentForm from './commentForm';

class CommentBox extends Component {
	render() {
		return (
			<div className="commentBox">
				<h1>Comments1</h1>
				<CommentList data={this.props.data}/>
				<CommentForm/>
			</div>
		)
	}
}

export default CommentBox;
