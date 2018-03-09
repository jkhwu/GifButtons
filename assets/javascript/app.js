"use strict";
(() => {
    const app = {

        btns: ["ballet", "blues", "carlton", "hula", "moonwalk", "swing", "tango", "waltz"],

        colors: ["red", "orange", "yellow", "olive", "green", "blue", "violet", "purple", "pink", "brown"],

        load: () => {
            app.makeBtns(app.btns);
            $("#submit").on("click", event => {
                event.preventDefault();
                app.addBtn($("#searchTerm").val());
                $("#searchTerm").val("");
            });
            $("#btnZone").on("click", ".danceBtn", app.getGifs);
            $("#gifZone").on("click", ".gif", app.playGif);
        },

        makeBtns: arr => arr.forEach(dance => app.addBtn(dance)),

        addBtn: text => $("#btnZone").append(`<button class="ui inverted ${app.randColor()} button danceBtn" value="${text}">${text}</button>`),

        randColor: () => app.colors[Math.floor(Math.random() * app.colors.length)],

        getGifs: function() {
            $.ajax(`https://api.giphy.com/v1/gifs/search?api_key=qZKo14UVEsTDJkz1YpxVkj9cq7HxPC1N&limit=12&lang=en&q=${$(this).val()}+dance`).then(response => app.makeStills(response));
            $(this).addClass("active");
        },

        makeStills: res => {
            $("#gifZone").empty();
            res.data.forEach(gif => { $("#gifZone").append(`<div class="ui medium rounded image gif"><a href="${gif.images.original.url}" class="ui ${app.randColor()} ribbon label"  target="_blank">${gif.rating.toUpperCase()}</a><img src=${gif.images.original_still.url}></div>`) });
        },

        playGif: function() {
            let url = $(this).children("img").attr("src");
            console.log("play/pause");
            url.endsWith("_s.gif") ? $(this).children("img").attr("src", url.replace("_s.gif", ".gif")) : $(this).children("img").attr("src", url.replace(".gif", "_s.gif"));
        }
    }
    app.load();
})();