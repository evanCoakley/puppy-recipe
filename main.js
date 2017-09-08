let dataDisplay = document.querySelector(".container");
let input = document.querySelector("input");

const enterKeyCode = 13;


input.addEventListener("keydown", function (event) {
    if (event.keyCode === enterKeyCode) {
        dataDisplay.innerHTML = '';
        let url = "http://recipepuppyproxy.herokuapp.com/api/?q=" + input.value;

        axios.get(url).then(function (response) {

            for (i = 0; i < response.data.results.length; i++) {
                let data = response.data.results[i];
                if (data.thumbnail === '') {
                    data.thumbnail = "./17290460-hungry-dog-with-knife-and-fork-for-dinner-Stock-Photo-dog-food.jpg";
                }
                const dogchow =


                    `<div class="boxes">

            <a href="${data.href}"><img src ="${data.thumbnail}"><p>${data.title}</p></a></div>`
                document.querySelector(".container").innerHTML += dogchow;

            }

        })
    }
});












