var Handlebars = require('handlebars');

Handlebars.registerHelper('link_to', function(title, context) {
  return "<a href='" + context.url + "'>" + title + "</a>"
});

var context = { posts: [{url: "/hello-world", body: "Hello World!"}] };
var source = '<ul>{{#posts}}<li>{{{link_to "Post!" this}}}</li>{{/posts}}</ul>'

var template = Handlebars.compile(source);
var result = template(context);

console.log(result);
