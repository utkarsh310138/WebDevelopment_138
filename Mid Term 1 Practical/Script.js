function checkNumber() {
    let number = Number(document.getElementById("num").value);

    if (number > 0) {
        document.getElementById("result").innerHTML = "Positive Number";
    } else if (number < 0) {
        document.getElementById("result").innerHTML = "Negative Number";
    } else {
        document.getElementById("result").innerHTML = "Zero";
    }
}