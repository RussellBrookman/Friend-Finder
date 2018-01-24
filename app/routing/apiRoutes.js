var path = require('path');

var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var input = req.body;
		var answers = input.scores;

    var matchName;
    var matchMessage;    
    var matchImg;
		var diffInScore = 1000;

		console.log(answers);

		for(var i = 0; i < friends.length; i++) {
      var subtract = 0;			
			for(var x = 0; x < answers.length; x++) {
				subtract += Math.abs(friends[i].scores[x] - answers[x]);
			}
			if (subtract < diffInScore) {
				diffInScore = subtract;
        matchName = friends[i].name;
        matchMessage = friends[i].message;
        matchImg = friends[i].photo;
			}
		}
		friends.push(input);

    res.json({ status: 'OK', matchName: matchName, matchMessage: matchMessage, matchImg: matchImg });
	});
};
