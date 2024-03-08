// lower case
let personname: string = "Maaz Sharif"
console.log("lowercase:", personname.toLowerCase());


// upper case
console.log("uppercase:", personname.toLocaleUpperCase());

// Title case
console.log("titlecase:", personname.replace(/\bw/g,c => c.toUpperCase()));
