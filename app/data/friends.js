var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// my routing files
var apiRoute = require('./theAPIRoute');
var htmlRoute = require('./theHTMLRoute.js');

var userInfo = {
	"name":"",
	"scores":[].reduce(add, 0);
}

//	getting their score
function sum(input) {
	if(toString.call(input) != "[userInfo.scores]")
		return false;
		var total = 0;
		for(var i=0; i < input.length; i++) {
			if(isNaN(input[i])) {
				continue;
			}
			total += Number(input[i]);
		}
		return total;
}

if (sum.total > 0 && sum.total < 25) {
	$(".results").append("You're to cool for this site. Go find another site you freaking winner!");
} else if (sum.total >= 25 && < 50) {
	$(".results").append("You're ideal mate is just a moderate geek. He will enjoy doing all the non geeky thing you like!");
} else if (sum.total >= 50 && < 85) {
	$(".results").append("You're ideal mate is pretty freaking geeky. Good job fitting into the mass majority of geekdom!");
} else {
	$(".results").append("You're ideal mate is a total freaking looser. Excelent work comming to our site. You may be a virgin and this site will be ideal in getting you laid. We practically guarantee you're ideal mate is a virgin and is anxiously awaiting your company! This site will improve your life, but not the human race, dramaticly!");
};