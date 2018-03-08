"use strict";
(() => {
    const app = {
        btns: ["ballet", "swing", "blues", "jazz", "tango", "foxtrot", "waltz", "moonwalk", "break", "interpretive", "dog", "hula"],
        colors: ["red", "orange", "yellow", "olive", "green", "blue", "violet", "purple", "pink", "brown"],
        load: () => {
            app.makeBtns();
            $("#btnZone > .button").on("click", () => app.getGifs());
        },
        makeBtns: () => app.btns.forEach(dance => { $("#btnZone").append(`<button class="ui inverted ${app.randColor()} button" value="${dance}">${dance}</button>`) }),
        randColor: () => app.colors[Math.floor(Math.random() * app.colors.length)],
        getGifs: () => {
            // $.ajax({ url: "https://api.giphy.com/v1/gifs/search?api_key=qZKo14UVEsTDJkz1YpxVkj9cq7HxPC1N&limit=12&lang=en&q=dance" + $("input").val(), method: "GET" }).then(response => app.makeStills(response));
            console.log($(this).val())
        },
        makeStills: (res) => res.data.forEach((element) =>
            $("#gifZone").append(`
            <div class="ui card">
                <div class="image">
                    <img src=${element.images.original_still.url}>
                    <h2><i class="play circle outline icon"></i></h2>
                </div>
                <div class="content">
                    <div class="extra content"> Rating: </div>
                </div>
            </div>`)
        )
    }
    app.load();
})();