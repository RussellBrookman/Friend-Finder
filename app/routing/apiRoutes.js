function theAPIRoute() { 
	// epress app, data parsing handler
	app.use(bodyParser.json());
	// false: a simple algorithm for shallow parsing. true: complex algorithm for deep parsing and deal with nested objects
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	// specificaiton for how the client is requesting resourses (fetched or modified), and how the server should respond to my requests. 
	app.use(bodyParser.json({ type: "application/vnd.api+json" }));
	// setting up a var for express 
	var app = express();
	var homePage = require("home.html");

	app.set('port', 3000);

	// route that sends the user to the survey
	app.get("/api/friends", function(req, res) {
	// a use route that leads to the html page
		res.sendFile(path.join(__public, "package.json"));
	});

// 1. A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// 2. A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
	app.get("/api/friends", function(req, res) {   
		var chosen = req.params.people;   
		if (chosen) {     
			console.log(chosen);     
			for (var i = 0; i < people.length; i++) {       
				if (chosen === people[i].routeName) {         
					return res.json(people[i]);       
				}     
			}     
			return res.json(false);   
		}   
		return res.json(people); 
	});
	app.post('/login', function(req, res) {
		var user_name=req.body.user;
		console.log("user name = "+user_name);
		res.end("yes");
	});
	// server start
	var server = app.listen(app.get('port'), function() {
		var port = server.address().port;
		console.log("Server listening on: http://localhost:%s", port);
	});
};

module.exports = theAPIRoute;