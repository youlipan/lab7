var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	projects["viewAlt"]=false;
  	res.render('index', projects);
  	
};

exports.viewAlt = function(request,response){
	project["viewAlt"]=true;
	res.render('index', projects);

};

