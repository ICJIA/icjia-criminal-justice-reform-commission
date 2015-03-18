module.exports.register = function(Handlebars) {
  Handlebars.registerHelper('constructBreadCrumb2', function(dirname,
    title,
    assets) {
    var breadCrumb = '';
    breadCrumb = breadCrumb +
      '<ol class="breadcrumb" style="display: inline;">';
    breadCrumb = breadCrumb + '<li><a href="' + assets +
      '">Home</a></li>';
    if (assets !== './') {
      var parent = dirname.replace('out/', '');
      parent = parent.charAt(0).toUpperCase() + parent.slice(1);
      breadCrumb = breadCrumb + '<li><a href="' + dirname.replace('out',
          '..') +
        '">' +
        parent + '</a></li>';
    }
    breadCrumb = breadCrumb + '<li>' + title + ' </li>';
    breadCrumb = breadCrumb + '</ol>';
    return new Handlebars.SafeString(breadCrumb);
  });
};
