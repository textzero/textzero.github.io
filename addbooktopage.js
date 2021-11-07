var book_id, book_name, book_author, book_classify;
var jsonmian;
var bookhtml = `
<div class="book" id="id_${book_id}">
<font class="booki">书名: </font>
<font class="Bookinfo">${book_name}</font>
<font class="booki"> | 作者: </font>
<font class="Bookinfo">${book_author}</font>
<font class="booki"> | 分类: </font>
<font class="Bookinfo">${book_classify}</font>
<button class="click" title="阅读" onclick="top.location='read.html?book=${book_id}'"><span class="material-icons-round s">auto_stories</span></button></div>
`

const jsonurl = "https://raw.githubusercontent.com/textzero/textzero.github.io/main/json/books.json"

$.getJSON(jsonurl, function(data) {
    jsonmian = data;
}).done(function() {
    if (window.innerWidth <= 1234) {

        for (var i = 0; i < jsonmian["books"].length; i++) {
            book_id = jsonmian["books"][i].id;
            book_name = jsonmian["books"][i].name;
            book_author = jsonmian["books"][i].auth;
            book_classify = jsonmian["books"][i].class;
            $("#booklist").append(`
            <div class="book" id="id_${book_id}">
            <font class="booki">书名: </font>
            <font class="Bookinfo">${book_name}</font>
            <button class="click" title="阅读" onclick="top.location='read.html?book=${book_id}'"><span class="material-icons-rounds">auto_stories</span></button></div>
        `);
        }
    } else {
        for (var i = 0; i < jsonmian["books"].length; i++) {
            book_id = jsonmian["books"][i].id;
            book_name = jsonmian["books"][i].name;
            book_author = jsonmian["books"][i].auth;
            book_classify = jsonmian["books"][i].class;
            $("#booklist").append(`
            <div class="book" id="id_${book_id}">
            <font class="booki">书名: </font>
            <font class="Bookinfo">${book_name}</font>
            <font class="booki"> | 作者: </font>
            <font class="Bookinfo">${book_author}</font>
            <font class="booki"> | 分类: </font>
            <font class="Bookinfo">${book_classify}</font>
            <button class="click" title="阅读" onclick="top.location='read.html?book=${book_id}'"><span class="material-icons-rounds">auto_stories</span></button></div>
        `);
        }
    }
})