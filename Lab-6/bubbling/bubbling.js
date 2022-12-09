const btn = document.getElementById('open-button');
const div = document.getElementById('main-div');
btn.addEventListener('click', event => {
    console.log("green");
    event.target.style.background = '#00FF00';
    event.stopPropagation();
});
div.addEventListener('click', event => {console.log("red"); event.target.style.background = '#FF0000'}, false);