module.exports.register = function(Handlebars) {
	Handlebars.registerHelper('constructCanonicalEncoded', function(domain, root,
		dest) {
		var canonical = domain + root + dest.replace('out/', '');
		return new Handlebars.SafeString(encodeURIComponent(canonical));
	});
};
