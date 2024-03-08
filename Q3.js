// lower case
var personname = "Maaz Sharif";
console.log("lowercase:", personname.toLowerCase());
// upper case
console.log("uppercase:", personname.toLocaleUpperCase());
// Title case
console.log("titlecase:", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
