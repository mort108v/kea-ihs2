//Breadcrumbs based on URL location
if ($('#siteBreadcrumb ol.breadcrumb')) {
  var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);

  var parts = [{
    "text": 'Home',
    "breadlink": '/'
  }];

  for (var j = 0; j < here.length; j++) {
    var part = here[j];
    var pageName = part.toLowerCase();
    pageName = part.charAt(0).toUpperCase() + part.slice(1);
    var breadlink = '/' + here.slice(0, j + 1).join('/');
    $('#siteBreadcrumb ol.breadcrumb').append('<li><a href="' + breadlink + '">' + pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '') + '</a></li>');
    parts.push({
      "text": pageName,
      "breadlink": breadlink
    });
  }
}
