var Handlebars = require('handlebars');

var source = '<ul>{{#each items}}\n  <li>{{agree_button}}{{/each}}\n</ul>';

var context = {
  items: [
    {name: "Handlebars", emotion: "love"},
    {name: "Mustache", emotion: "enjoy"},
    {name: "SproutCore", emotion: "want to learn"}
  ]
};

Handlebars.registerHelper('agree_button', function() {
  return new Handlebars.SafeString(
    "<button>I agree. I " + this.emotion + " " + this.name + "</button>"
  );
});

var template = Handlebars.compile(source);
var result = template(context);

console.log(result);
