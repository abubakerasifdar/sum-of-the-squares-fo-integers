
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();

            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            let count=0;
            for (let i = 0; i<input; i++){
                count = count + i + '<br>' ;
              
                console.log(count);
            }
           result = count;
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }