// var a = ["sanjay","aman","karan","raman"];
// document.write(a + "<br>");
// a.sort();
// document.write(a + "<br>");
// a.reverse();
// document.write(a + "<br>");



var a = [5,7,9,8,10,3,2];
document.write(a + "<br>","<br>");
a.sort(function(a,b){return b - a});
document.write(a + "<br>","<br>");

// document.write(a + "<br>","<br>");
a.sort(function(a,b){return a - b});
document.write(a + "<br>");
