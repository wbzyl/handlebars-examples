// npm install handlebars

var Handlebars = require('handlebars');

var source = "<ul>{{#colors}}\n  <li>{{name}}{{/colors}}\n</ul>";

var template = Handlebars.compile(source);

var data = { "colors": [
  { "name": "green" },
  { "name": "green" },
  { "name": "blue" }
]};

var result = template(data);

console.log(result);
