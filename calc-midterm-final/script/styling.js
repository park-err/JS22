$(".clear").mouseover(function() {
    $("#clear1").css("background-color", "var(--hover)");
    $("#clear2").css("background-color", "var(--hover)");
    $("#clear3").css("background-color", "var(--hover)");
    $("#clear4").css("background-color", "var(--hover)");
    $("#clear2").css("color", "#000000");
})

$(".clear").mouseleave(function() {
    $("#clear1").css("background-color", "var(--color3)");
    $("#clear2").css("background-color", "var(--color3)");
    $("#clear3").css("background-color", "var(--color3)");
    $("#clear4").css("background-color", "var(--color3)");
    $("#clear2").css("color", "#ffffff");
})