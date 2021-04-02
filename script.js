Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();

function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    interest = principal * years * rate / 100;

    targetDate = date.addDays(years*365);
    targetYear = targetDate.getFullYear();

    result = ("If you deposit " + principal + ", " +
              "at an interest rate of " + rate + "%. " +
              "You will receive an amount of " + interest + ", " +
              "in the year " + targetYear);
    document.getElementById("result").innerHTML = result;
}

function getRangeValue()
{
    rateValue = document.getElementById("rate").value;
    formattedValue = (rateValue + "%")
    document.getElementById("displayRate").innerText = formattedValue;
}
        