module.exports.register = function(Handlebars) {
  Handlebars.registerHelper('constructCanonical', function(domain, root, dest) {
    var canonical = domain + root + dest.replace('out/', '');
    return new Handlebars.SafeString(canonical);
  });
};
