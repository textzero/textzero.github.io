const jsonurl = "https://raw.githubusercontent.com/textzero/textzero.github.io/main/json/books.json"
var jsonmain, index, l, n;
var book_id = location.href.split("?book=")[1];
$.getJSON(jsonurl, function(data) {
    jsonmian = data;
}).done(function() {
    n = jsonmian["books"].length;
    for (var i = 0; i < n; i++) {
        console.log(jsonmian);
        if (jsonmian["books"][i].id == book_id) {
            console.log(`${jsonmian["books"][i]['text']['p1']}`);
            index = i;
            l = jsonmian["books"][index]['text']['num'];
            break;
        }
    }
    for (j = 1; j <= l; j++) {
        console.log(j);
        $("#content").append(`
         <div id="p${j}">
         <textarea readonly>${jsonmian["books"][index]['text']['p'+j]}</textarea>
         </div>
     `);
    }
    $("#asdbajh").append(`${jsonmian["books"][index]["name"]}`)
});