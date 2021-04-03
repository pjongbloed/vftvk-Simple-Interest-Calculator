
//adding functionality to get future date based on days
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();

//main function
//gets all the values from the input elements
//then calculates the interest
//then formats the result & updates it dynamically on the calculator
function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    interest = principal * years * rate / 100;

    targetDate = date.addDays(years*365);
    targetYear = targetDate.getFullYear();

    formattedRate = (rate + "%");

    result1a = ("If you deposit ");
    result1b = (",");
    result2a = ("at an interest rate of ");
    result2b = (".");
    result3a = ("You will receive an amount of ");
    result3b = (",");
    result4a = ("in the year ");

    document.getElementById("result1a").innerHTML = result1a;
    document.getElementById("result2a").innerHTML = result2a;
    document.getElementById("result3a").innerHTML = result3a;
    document.getElementById("result4a").innerHTML = result4a;

    document.getElementById("number1").innerHTML = principal;
    document.getElementById("number2").innerHTML = formattedRate;
    document.getElementById("number3").innerHTML = interest;
    document.getElementById("number4").innerHTML = targetYear;

    document.getElementById("result1b").innerHTML = result1b;
    document.getElementById("result2b").innerHTML = result2b;
    document.getElementById("result3b").innerHTML = result3b;
}

//gets & formats the interest rate % to show next to the slider
function getRangeValue()
{
    rateValue = document.getElementById("rate").value;
    formattedValue = (rateValue + "%")
    document.getElementById("displayRate").innerText = formattedValue;
}

//validates the principal value is greater than 0 & positive
function validatePrincipal() {
  var x = document.getElementById("principal").value;
  if (x <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
  }
}