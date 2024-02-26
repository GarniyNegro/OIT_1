
function calculateSum() {
    let number = document.getElementById("number1").value;
    let sum = 0;
    
    for (let digit of number) {
        if (!isNaN(parseInt(digit))) {
            sum += parseInt(digit);
        }
    }
    
    document.getElementById("sum-result").innerText = "Сума цифр: " + sum;
}


function calculateProduct() {
    let number = document.getElementById("number2").value;
    let product = 1;
    
    for (let digit of number) {
        if (!isNaN(parseInt(digit))) {
            product *= parseInt(digit);
        }
    }
   
    document.getElementById("product-result").innerText = "Добуток цифр: " + product;
}


function showAuthorInfo() {
    document.getElementById("author-info").style.display = "block";
}


function hideAuthorInfo() {
    document.getElementById("author-info").style.display = "none";
}
