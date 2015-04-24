module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('escapeString', function(str) {
		var result = str.replace(/'/g, "\\'");
		return new Handlebars.SafeString(result);
	});
};
