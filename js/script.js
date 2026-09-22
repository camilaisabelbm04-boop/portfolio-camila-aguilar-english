document.addEventListener("DOMContentLoaded", function () {

    Fancybox.bind("[data-fancybox='portfolio']", {
        Thumbs: {
            type: "classic"
        },
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"]
            }
        }
    });

});