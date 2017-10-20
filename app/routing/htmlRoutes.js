function theHTMLRoute() { 
	// epress app, data parsing handler
	app.use(bodyParser.json());
	// false: a simple algorithm for shallow parsing. true: complex algorithm for deep parsing and deal with nested objects
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	// specificaiton for how the client is requesting resourses (fetched or modified), and how the server should respond to my requests. 
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));
	// setting up a var for express 
	var app = express();

	app.set('port', 3000);

	app.use('/homePage', homePage);

	// used to dislay the json of all possible friends
	app.get("/public/survey.html", function(req, res) {
	// a default -use- route that leads to the html page
		res.sendFile(path.join(__public, "survey.html"));
	});

	// server start
	var server = app.listen(app.get('port'), function() {
		var port = server.address().port;
		console.log("Server listening on: http://localhost:%s", port);
	});
};

module.exports = theHTMLRoute;