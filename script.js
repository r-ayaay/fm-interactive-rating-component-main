
var rating = 0;

var buttons = document.getElementsByClassName('rating');


console.log(buttons);

function resetClass() {
    for (let button of buttons) {
        button.className = "rating";
    }
}

function rate(rate) {
    resetClass();
    buttons[rate - 1].className += " selected";
    rating = rate;
}