function compute() {
     
    var pr = parseFloat(document.getElementById("pr").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = pr * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    
	
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + pr + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}


function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}



function validateAmount() {
    var pr = document.getElementById("pr").value;
    var biggerThanZero = parseInt(pr) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("pr").focus();
    }

}