$(document).ready(function () {
    var $container = $("<div>").css({ height: 1, overflow: "scroll" }).appendTo("body");
    var $child = $("<div>").css({ height: 2 }).appendTo($container);
    window.SCROLLBAR_WIDTH = $container.width() - $child.width();
    console.log( window.SCROLLBAR_WIDTH)
    $container.remove();

    $("#ubuntu-sidebar").css({
        right: SCROLLBAR_WIDTH
    });
});