var panel = '<div data-role="panel" id="mypanel" data-position="right" data-display="push" data-theme="a">' +
    '<div data-role="header"><h1>Panel</h1></div>' +
    '<ul data-role="listview" data-inset="true"><li><a>Listview</a></li></ul></div>';

$(document).one('pagebeforecreate', function() {
    $.mobile.pageContainer.prepend(panel);
    $("#mypanel").panel().enhanceWithin();
});