// 25 line of code
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunction();

    }
})
function myFunction() {
    let input = Number(document.getElementById('input').value);
    let result = "";
let count = '';
    for (let i = 1; i <= input; i++) {
        count += `${(i/2)}, `;
        console.log(i);
    }
    arraycount = count.split(",")
    len = arraycount.length;
    var Sum = 0;
    var Series = "";
    for (let j =0; j<len-1; j++){
      Series += arraycount[j] + "<br>"
      Sum += Number(arraycount[j])
      console.log(Sum, "Sum is Started");
    }
    result = `Your Entered: ${input} & <br> Series Upto ${input} is Following:<br> ${Series} The Total Sum of This Series is:${Sum}`;
    document.getElementById('output').style.display = "flex";
    document.getElementById('output').innerHTML = result;
}