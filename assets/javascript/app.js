"use strict";
(() => {
    const app = {

        btns: ["ballet", "swing", "blues", "jazz", "tango", "foxtrot", "waltz", "moonwalk", "break", "interpretive", "dog", "hula"],

        colors: ["red", "orange", "yellow", "olive", "green", "blue", "violet", "purple", "pink", "brown"],

        load: () => {
            app.makeBtns(app.btns);
            $("#submit").on("click", (event) => {
                event.preventDefault();
                app.addBtn($("#searchTerm").val());
                $("#searchTerm").val("");
            });
            $("#btnZone").on("click", ".danceBtn", function() { console.log($(this).val()) });
        },

        makeBtns: (arr) => arr.forEach(dance => app.addBtn(dance)),

        addBtn: (text) => $("#btnZone").append(`<button class="ui inverted ${app.randColor()} button danceBtn" value="${text}">${text}</button>`),

        randColor: () => app.colors[Math.floor(Math.random() * app.colors.length)],

        getGifs: (btn) => {
            // $.ajax({ url: "https://api.giphy.com/v1/gifs/search?api_key=qZKo14UVEsTDJkz1YpxVkj9cq7HxPC1N&limit=12&lang=en&q=dance" + $("input").val(), method: "GET" }).then(response => app.makeStills(response));
            console.log(btn);
        },

        makeStills: (res) => res.data.forEach((element) =>
            $("#gifZone").append(`<div class="ui medium rounded image"><a href="#" class="ui red ribbon label">Rating</a><img src=${element.images.original_still.url}><h2><i class="play circle outline icon"></i></h2></div>`)
        )
    }
    app.load();
})();