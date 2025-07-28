
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();

            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let result = "";
            let state = "";
            do {
                state = input;
                if (state != "w" || state != "d") {
                    result = `Please Enter w for Working and d for deadline. And  your Entered ${state} <br> Please Enter Again`

                }
            } while (state != "w" || state != "d")
            if (state == "w") {
                
                result = `State is Working and As You Entered ${state} <br>`
                document.getElementById('output').style.background = "green"
            }
            else {
                result = `State is Dead and As You Entered ${state} <br>`
                document.getElementById('output').style.background = "red"
            }

            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }