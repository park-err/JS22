

function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
    document.querySelector("#room2").style.display = "none";    
    document.querySelector("#room3").style.display = "none";
    document.querySelector("#rooms").value = "1";
}

function rm2() {
    let length = parseFloat(document.getElementById("rm2length").value);
    let width = parseFloat(document.getElementById("rm2width").value);
    let height = parseFloat(document.getElementById("rm2height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * 0.65);
    document.getElementById("rm2cost").value = cost;
    return cost;
}

function rm3() {
    let length = parseFloat(document.getElementById("rm3length").value);
    let width = parseFloat(document.getElementById("rm3width").value);
    let height = parseFloat(document.getElementById("rm3height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * 0.65);
    document.getElementById("rm3cost").value = cost;
    return cost;
}

function estimate() {
    var totalCost = 0;
    var rm = document.querySelector("#rooms").value;
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * 0.65);
    document.getElementById("rm1cost").value = cost;
    totalCost += cost;

    if (rm == "2") {
        totalCost += rm2();
    }
    if (rm == "3") {
        totalCost += rm3();
    }
    document.getElementById("estimate").innerHTML = (name + ", your estimate is: " + totalCost);
}


function showrm1() {
    document.querySelector("#room2").style.display = "none";    
    document.querySelector("#room3").style.display = "none";
}

function showrm2() {
    document.querySelector("#room2").style.display = "block";    
    document.querySelector("#room3").style.display = "none";
}

function showrm3() {
    document.querySelector("#room2").style.display = "block";    
    document.querySelector("#room3").style.display = "block";
}