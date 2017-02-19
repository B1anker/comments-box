/**
 * Created by b1anker on 2017/02/17.
 */
import React, {Component} from 'react';
import Remarkable from 'remarkable';

class Comment extends Component{
	rawMakeup() {
		const md = new Remarkable();
		let rawMarkup = md.render(this.props.children.toString());
		return {__html: rawMarkup};
	}
	
	render() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMakeup()}></span>
			</div>
		);
	}
}

export default Comment;
