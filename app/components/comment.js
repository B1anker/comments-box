/**
 * Created by b1anker on 2017/02/17.
 */
import React from 'react';
import Remarkable from 'remarkable';
const Comment = React.createClass({
	rawMakeup() {
		const md = new Remarkable();
		let rawMarkup = md.render(this.props.children.toString());
		return {__html: rawMarkup};
	},
	render() {
		const md = new Remarkable();
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMakeup()}></span>
			</div>
		);
	}
});

export default Comment;
