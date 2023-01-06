const changeColorBtn = document.getElementById('color-btn');
let color = '#'
document.body.addEventListener('click', function (e){
    const children  = e.target.parentNode.children;
    for(let i = 0 ; i < children.length; i++){
        if (children[i] === e.target){
            e.target.innerText = `${Math.trunc(i / 3)}, ${i % 3}`;
            e.target.style.background = '#FF1111';
            return;
        }
    }
    //e.preventDefault();
}, true);
changeColorBtn.addEventListener('click', function(e){
    const parent = e.currentTarget.parentNode;
    const colorInput = parent.children.namedItem("color");
    e.preventDefault();
} )