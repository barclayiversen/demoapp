module.exports = function(app) {
var request = require('request');
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.use(function(req, res, next) {
		console.log('does this get hit again')
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.use('/api', function(req, res, next) {
		request('http://hey-guy.softledger.com/?key=8bfffb50-2182-11e7-93ae-92361f002672', function(error, response, body) {
			console.log(response);
			if (!error && response.statusCode === 200) {
				console.log(body);
				res.status(200)
					.json({
						body
					})
			}
		})
	})

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
