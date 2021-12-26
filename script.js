function compute()
{
    //ensure Amount is greater than 0
    let eamount = document.getElementById("principal").value;
    if (eamount <= 0){
        alert("Amount must be greater than 0.");
        return false;
    }
    //display principal
    let eprincipal = document.getElementById("principal").value;
    document.getElementById("rprincipal").innerHTML = "$" + eprincipal;
    
    //display interest rate
    let erate = document.getElementById("rate").value;
    document.getElementById("rrate").innerHTML = erate + "%";

    //display final payoff year
    let eyears = document.getElementById("years").value;
    var todaysyear = new Date().getFullYear();
    var fyear = parseInt(eyears) + parseInt(todaysyear);
    document.getElementById('ryear').innerHTML = fyear;

    //calclate interest
    var einterest = "$" + ((parseInt(eprincipal) * (parseFloat(erate)/100) * parseInt(eyears))+parseInt(eprincipal));
    document.getElementById("ramount").innerHTML = einterest;

    //show results div
    let element = document.getElementById("result");
    element.removeAttribute("hidden");
}

function resetform()
{
    
    //hide results div
    let element = document.getElementById("result");
    element.setAttribute("hidden", "hidden");
    //clear results
    document.getElementById("principal").value = "0";
    document.getElementById("rate").value = "10.5";
    document.getElementById('rateslider').innerHTML=rate.value;
    document.getElementById("years").selectedIndex="0";
    
}