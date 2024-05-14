$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize
  app.route({
    view: "ajax",
    load: "ajax.html",
  });
  
  app.route({
    view: "highcharts",
    load: "highcharts.html",
  });

  app.route({
    view: "forms",
    load: "forms.html",
  });

  app.route({
    view: "select2",
    load: "select2.html",
  });

  // run app
  app.run();
});
