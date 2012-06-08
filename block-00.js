var Handlebars = require('handlebars');

var source = "<ul>{{#people}}<li>{{#link}}{{name}}{{/link}}</li>{{/people}}</ul>";

Handlebars.registerHelper('link', function(context, fn) {
  return '<a href="/people/' + this.id + '">' + this.name + '</a>';
});

var template = Handlebars.compile(source);

var data = { "people": [
    { "name": "Alan", "id": 1 },
    { "name": "Yehuda", "id": 2 }
  ]};

var result = template(data);

console.log(result);
