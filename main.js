let dataDisplay = document.querySelector(".container");
let input = document.querySelector("input");
let url = ("http://recipepuppyproxy.herokuapp.com/api/?q=");
const enterKeyCode = 13;


input.addEventListener("keydown", function () {
    //if my keycode is enterKeyCode then it will modify url with(add to) what is in my input

});

axios.get(url).then(function (response) {
    let data = response.data.results;
    console.log(data)
});


//make an axios request
//that witll have a .then()
//inside the .then() you should have access to the response obj (tip: console log the response to see what it is)
//at some point, do a for loop to make the same template as many times as needed( or a for each loop'look up forEach method')

//key up or keydown events

// event.keyCode === enterKeyCode


