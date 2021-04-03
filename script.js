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

    principal = principal.classList.add('numbers');
    rate = rate.classList.add('numbers');
    interest = interest.classList.add('numbers');
    targetYear = targetYear.classList.add('numbers');

    result1 = ("If you deposit " + principal + ",");
    result2 = ("at an interest rate of " + rate + "%.");
    result3 = ("You will receive an amount of " + interest + ",");
    result4 = ("in the year " + targetYear);

    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;
    document.getElementById("result4").innerHTML = result4;
}

function getRangeValue()
{
    rateValue = document.getElementById("rate").value;
    formattedValue = (rateValue + "%")
    document.getElementById("displayRate").innerText = formattedValue;
}
        