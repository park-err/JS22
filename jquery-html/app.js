$("form").on("submit", function (e) {
    e.preventDefault();

    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var zip = $("#zip").val();

    $("#results").append(fname + " " + lname + " " + phone + " " + email + " " + zip);

    $("#fname").val("");
    $("#lname").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#zip").val("");
});

$("#dark").click(function() {
    $("body, button").addClass("dark");
})

$("#light").click(function() {
    $("body, button").removeClass("dark");
})

$("#increase").click(function() {
    $("body").css("font-size", "20px");
})

$("#decrease").click(function() {
    $("body").css("font-size", "15px");
})

// When the user clicks a button, get the information from the form field, display it on screen using the append fuction, 

// and set the form fields to be blank
