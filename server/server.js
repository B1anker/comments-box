const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpackDevConfig = require('../client/webpack.config.js');

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

const compiler = webpack(webpackDevConfig);

app.set('port', (process.env.PORT || 3000));

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackDevConfig.output.publicPath,
	noInfo: true,
	stats: {
		colors: true
	}
}));

app.use(webpackHotMiddleware(compiler));

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
	// Set permissive CORS header - this allows this server to be used only as
	// an API server in conjunction with something like webpack-dev-server.
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Disable caching so we'll always get the latest comments.
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

app.get('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

app.post('/api/comments', function(req, res) {
	fs.readFile(COMMENTS_FILE, function(err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		let comments = JSON.parse(data);
		// NOTE: In a real implementation, we would likely rely on a database or
		// some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
		// treat Date.now() as unique-enough for our purposes.
		let newComment = {
			id: Date.now(),
			author: req.body.author,
			text: req.body.text
		};
		comments.push(newComment);
		fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
			if (err) {
				console.error(err);
				process.exit(1);
			}
			res.json(comments);
		});
	});
});

const reload = require('reload');
const http = require('http');

const server = http.createServer(app);
reload(server, app);

server.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});
