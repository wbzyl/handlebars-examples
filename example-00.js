var Handlebars = require('handlebars');

var source = "{{#this}}<div>{{> articles}}</div>\n{{/this}}";

Handlebars.registerPartial('articles', '{{#this}}<article>{{name}}</article>{{/this}}')

var template = Handlebars.compile(source);

var data = [[{"name": "Jimmy"}, {"name": "Sally"}], [{"name": "John"}]];
var result = template(data);

console.log(result);

var endArr = [],
    // arr = [ 1, 2, 3, 4, 5, 6, 7 ],
    arr = [{"name": "Jimmy"}, {"name": "Sally"}, {"name": "John"}];

while ( arr.length ) {
    endArr.push( arr.splice( 0, 2 ) );
}

console.log(endArr);

var _ = require('underscore');

var data = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a13"];

var n = 2;
var lists = _.groupBy(data, function(a, b) { return Math.floor(b/n); });

console.log(lists);
lists = _.toArray(lists); // added this to convert the returned object to an array.

console.log(lists);
