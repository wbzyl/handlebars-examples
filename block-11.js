var Handlebars = require('handlebars');

var source = "{{#list this}}{{firstName}} {{lastName}}{{/list}}";

// block => compiled template "{{firstName}} {{lastName}}"

Handlebars.registerHelper('list', function(context, block) {
  console.log('context:', context);
  console.log('block:', block);

  var arr = context.map(function(x) {
    return "  <li>" + block(x);
  });
  arr.unshift("<ul>");
  arr.push("</ul>");

  return arr.join('\n');
});

var template = Handlebars.compile(source);

var data = [
  {firstName: "Yehuda", lastName: "Katz"},
  {firstName: "Carl", lastName: "Lerche"},
  {firstName: "Alan", lastName: "Johnson"}
];

var result = template(data);

console.log(result);
