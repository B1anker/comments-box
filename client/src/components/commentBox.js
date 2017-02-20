/**
 * Created by b1anker on 2017/02/17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentList from './commentList';
import CommentForm from './commentForm';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		let xhr = new XMLHttpRequest();
		xhr.open("get", this.props.url, false);
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
					let data = JSON.parse(xhr.responseText);
					this.setState({
						data
					})
				} else {
					console.log(xhr.status);
				}
			}
		}
		xhr.send(null);
	}

	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm/>
			</div>
		)
	}
}

export default CommentBox;
