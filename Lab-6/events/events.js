const staszekLiElement = document.getElementById("people").children.namedItem("staszek");
const titleInput = document.getElementById("title");
titleInput.addEventListener('mouseover', e => titleInput.style.backgroundColor = '#FFAABB');
titleInput.addEventListener('mouseout', e => titleInput.style.backgroundColor = '#FFFFFF');

for (let item of document.getElementById("people").children) {
    staszekOnClick = event => {
        const name = event.target.textContent;
        console.log(event.button);
        console.log(event.type);
        event.target.textContent = event.target.textContent.toUpperCase();
    };
}
staszekLiElement.addEventListener('click', staszekOnClick);
function removeStaszekClick() {
    console.log("Removing event listener");
    const item = document.getElementById("people").children.namedItem("staszek");
    item.removeEventListener('click', staszekOnClick);
}