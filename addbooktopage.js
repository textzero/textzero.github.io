var book_id, book_name, book_author, book_classify;
var jsonmian;

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
            <button class="click" title="阅读" onclick="top.location='read.html?book=${book_id}'"><img src="https://fonts.gstatic.com/s/i/materialiconsround/auto_stories/v13/24px.svg"></button></div>
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
            <button class="click" title="阅读" onclick="top.location='read.html?book=${book_id}'"><img src="https://fonts.gstatic.com/s/i/materialiconsround/auto_stories/v13/24px.svg"></button></div>
        `);
        }
    }
})