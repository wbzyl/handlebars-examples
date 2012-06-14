var Handlebars = require('handlebars');

var source = "{{#list people}}{{firstName}} {{lastName}}{{/list}}";

Handlebars.registerHelper('list', function(context, block) {
  var out = "<ul>\n";

  for(var i=0, l=context.length; i<l; i++) {
    out = out + "  <li>" + block(context[i]) + "\n"
  }

  return out + "</ul>";
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
