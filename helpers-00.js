var Handlebars = require('handlebars');

Handlebars.registerHelper('link_to', function(context) {
  return "<a href='" + context.url + "'>" + context.body + "</a>";
});

var context = { posts: [{url: "/hello-world", body: "Hello World!"}] };
var source = "<ul>{{#posts}}<li>{{{link_to this}}}</li>{{/posts}}</ul>"

var template = Handlebars.compile(source);
var result = template(context);

console.log(result);
