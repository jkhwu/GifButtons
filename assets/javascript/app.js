(() => {
    "use strict";
    const app = {
        btns: ["ballet", "swing", "blues", "jazz", "tango", "foxtrot", "waltz", "moonwalk", "break", "interpretive", "dog", "hula"],
        colors: ["red", "orange", "yellow", "olive", "green", "blue", "violet", "purple", "pink", "brown"],
        load: () => {
            app.makeBtns();
            $("#btnZone > .button").off("click").click(() => this.getGifs());
        },
        makeBtns: () => app.btns.forEach(dance => { $("#btnZone").append(`<button class="ui inverted ${app.randColor()} button" value="${dance}">${dance}</button>`) }),
        randColor: () => app.colors[Math.floor(Math.random() * app.colors.length)],
        getGifs: () => console.log("yay")



    }
    app.load();
})();