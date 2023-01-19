const inputnumber = document.getElementById("number")
const button = document.getElementById("button")
button.addEventListener("click", function(){
    const number = inputnumber.value
    console.log("The input number is:",number)
    if (number % 2 == 0)
    {
        console.log(number, "is an even number")
    }
    else
    {
        console.log(number, "is an odd number")
    }
});
