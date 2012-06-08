var Handlebars = require('handlebars');

var source = "{{#list this}}{{firstName}} {{lastName}}{{/list}}";

Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>\n";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "  <li>" + options.fn(items[i]) + "\n"
  }

  return out + "</ul>\n";
});

var template = Handlebars.compile(source);

var data =  [
  {firstName: "Yehuda", lastName: "Katz"},
  {firstName: "Carl", lastName: "Lerche"},
  {firstName: "Alan", lastName: "Johnson"}
];

var result = template(data);

console.log(result);
