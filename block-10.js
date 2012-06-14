var Handlebars = require('handlebars');

var source = "{{#list people}}{{firstName}} {{lastName}}{{/list}}";

Handlebars.registerHelper('list', function(context, block) {
  var arr = context.map(function(x) {
    return "  <li>" + block(x);
  });
  arr.unshift("<ul>");
  arr.push("</ul>");

  return arr.join('\n');
});

var template = Handlebars.compile(source);

var data = {
  people: [
    {firstName: "Yehuda", lastName: "Katz"},
    {firstName: "Carl", lastName: "Lerche"},
    {firstName: "Alan", lastName: "Johnson"}
  ]
};

var result = template(data);

console.log(result);
