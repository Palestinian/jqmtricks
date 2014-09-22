$(document).on("pagecreate", function () {
    $("#load").one("click", function () {
        /* for demo */
        $(this).remove();
        $.mobile.loading("show", {
            theme: "b",
            text: "Loading panel..",
            textVisible: true,
            textonly: false
        });
        /* load panel then open it */
        $.get("external-panel.html", function (data) {
            $.mobile.pageContainer.append(data);
            $("[data-role=panel]").panel().enhanceWithin();
        }, "html").done(function () {
            $.mobile.loading("hide");
            $("[data-role=panel]").panel("open");
        });
    });
});
