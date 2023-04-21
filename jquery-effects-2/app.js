$("#up").click(function() {
    $("#obj").stop();
    $("#obj").animate({top: "20%"}, "slow", function() {
        $("#obj").animate({left: "46.3%"}, "slow").animate({top: "46.3%"}, "slow");
    });
})

$("#down").click(function() {
    $("#obj").stop();
    $("#obj").animate({top: "80%"}, "slow", function() {
        $("#obj").animate({left: "46.3%"}, "slow").animate({top: "46.3%"}, "slow");
    });
})

$("#left").click(function() {
    $("#obj").stop();
    $("#obj").animate({left: "20%"}, "slow", function() {
        $("#obj").animate({left: "46.3%"}, "slow").animate({top: "46.3%"}, "slow");
    });
})

$("#right").click(function() {
    $("#obj").stop();
    $("#obj").animate({left: "80%"}, "slow", function() {
        $("#obj").animate({left: "46.3%"}, "slow").animate({top: "46.3%"}, "slow");
    });
})