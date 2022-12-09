const bookForm = {
    form: document.getElementById("form-book"),
    titleField: document.getElementById("title"),
    editionYearField: document.getElementById("editionYear"),
    validate: function(){
        const title = this.titleField.value;
        const editionYear = Number(this.editionYearField.value);
        console.log("Validation", title, editionYear, title.length);
        return title && title.length > 3 && title.length < 50
            && editionYear >= 1900 && editionYear <= 2050;
    }
};

bookForm.form.addEventListener('submit', event => {
    if (!bookForm.validate()){
        event.preventDefault();
        return;
    }
});

window.localStorage.setItem("book","JavaScript");
window.localStorage.getItem("book");
window.localStorage.clear();
window.localStorage.removeItem("book");
