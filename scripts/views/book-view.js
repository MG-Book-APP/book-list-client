'use strict';

var source   = document.getElementById("container").innerHTML;
var template = Handlebars.compile(source);

Handlebars.registerHelper('list', function(items, options) {
    var out = "<ul>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i] + "</li>")
    }

    return out + "</ul>";
});