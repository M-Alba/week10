let image = document.getElementById("elem-img");

function clickNext() {
    image.src = './assets/images/cat2.jpg';
}

function clickPrevious() {
    image.src = './assets/images/cat1.jpg';
}

//Number 1
function showMessage() {
    console.log('Я учу JavaScript!');
}
showMessage();