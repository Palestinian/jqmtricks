$(document).on("pagebeforechange pagecontainerbeforetransition pagebeforecreate pagecreate", function(e) {
    /* timestamp */
    console.log(e.type + " " + Date(e.timeStamp));
}).on('pagecreate', "#demo", function() {
    /* change page btn */
    $("#foo").on("click", function(e) {
        $.mobile.pageContainer.pagecontainer("change", "http://jsfiddle.net/Palestinian/epg47/show", {
            transition: "flip"
        });
    });
    /* load page btn */
    $("#bar").on("click", function(e) {
        $.mobile.loading("show");
        $.mobile.pageContainer.pagecontainer("load", "http://jsfiddle.net/Palestinian/epg47/show");
    });
}).on("pagecontainerbeforeload pagecontainerload", function(e, ui) {
    /* timestamp & ui object */
    console.log(e.type + " " + Date(e.timeStamp));
    console.log(ui);
    /* confirmation popup */
    if (e.type == "pagecontainerload") {
        $.mobile.loading("hide");
        setTimeout(function() {
            $("#loaded").popup("open", {
                transition: "fade",
                history: false,
                positionTo: "window"
            });
        }, 300);
    }
}).on("pagecontainerloadfailed", function(e, ui) {
    /* timestamp & ui object */
    console.log(e.type + " " + Date(e.timeStamp));
    console.log(ui);
    /* override error msg */
    $.extend($.mobile, {
        pageLoadErrorMessage: "Uh Oh..!!",
        pageLoadErrorMessageTheme: "b"
    });
    /* reload current page after 1500ms */
    var activePage = $.mobile.pageContainer.pagecontainer("getActivePage");
    setTimeout(function() {
        $.mobile.pageContainer.pagecontainer("change", activePage, {
            allowSamePageTransition: true,
            transition: "fade"
        });
    }, 1500);
}).on("click", ".moveTo", function() {
    /* close popup and move to loaded page */
    $("#loaded").popup("close");
    setTimeout(function(e) {
        $.mobile.pageContainer.pagecontainer("change", "http://jsfiddle.net/Palestinian/epg47/show", {
            transition: "flip"
        });
    }, 250);
});
