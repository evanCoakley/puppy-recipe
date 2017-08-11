let dataDisplay = document.querySelector(".boxes");
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
                    `<a href="${data.href}"><img src ="${data.thumbnail}"><p>${data.title}</p></a>`
                document.querySelector(".boxes").innerHTML += dogchow;

            }
            // dataDisplay.addEventListener("click", function (event) {
            //     if (event.keyCode === enterKeyCode) {
            //         dataDisplay.innerHTML = '';
            //         let url = "http://recipepuppyproxy.herokuapp.com/api/?q=" + input.value;
            //         for (i = 0; i < response.data.results.length; i++) {
            //             let href = response.data.results[i];
            //             if (data.href) {
            //                 const doglink = `<a href="${data.href}"></a>`
            //                 document.querySelector(".boxes").innerHTML += doglink;
        })
    }
});









//if my keycode is enterKeyCode then it will modify url with(add to) what is in my input









//make an axios request
//that witll have a .then()
//inside the .then() you should have access to the response obj (tip: console log the response to see what it is)
//at some point, do a for loop to make the same template as many times as needed( or a for each loop'look up forEach method')

//key up or keydown events

// event.keyCode === enterKeyCode


