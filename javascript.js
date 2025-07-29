
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();

    }
})
function myFunction() {
    let input = Number(document.getElementById('input').value);
    let result = "";
    let count = 0;
    let oddProduct = 1;
    var oddNumber = '';
    for (let i = 0; i <= input; i++) {
        count = `${count + i},`;
    }
    let countarray = count.split(',');
    let len = countarray.length-1
    for (let i = 0; i < len; i++) {
         if (countarray[i] != 0 && countarray[i] % 2 != 0) { oddNumber = oddNumber + Number(countarray[i]) + ",";
            oddProduct = oddProduct * countarray[i];
        }
    }
    result = `You Entered ${input} and in this odd numbers: ${oddNumber} & Their Product is ${oddProduct}`;
    document.getElementById('output').style.display = "flex";
    document.getElementById('output').innerHTML = result;
}