var Handlebars = require('handlebars');

var articles =  [
  { "name": "Alan" },
  { "name": "Yehuda" }
];

var source = "<div>{{#each articles}}{{this.name}}{{/each}}</div>";

var template = Handlebars.compile(source);

var result = template(articles);

console.log(result);
