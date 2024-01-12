const peopleList = document.getElementById("people");
const item = document.createElement("li");                              //tworzenie elementu
item.innerText = "Roman";               
peopleList.appendChild(item);                                           //dodanie elementu do rodzica
const first = peopleList.children.item(1);               //pierwsze dziecko listy ul
const second = document.createElement("li");
second.innerText = "XXX"
first.after(second);                                                    //wstawienie za piewszym dzieckiem nowego elementu
peopleList.removeChild(                                                 //usunięcie elementu z rodzica    
    Array.from(peopleList.children)
    .find(item => item.textContent === "Staszek")
);
console.log('parent:', peopleList.parentElement);                       //rodzic listy 'people'
console.log('children:', peopleList.children);                          //kolekcja dzieci listy 'people'
console.log('nextSibling:', peopleList.nextElementSibling);             //następny sąsiad listy 'people'
console.log('previousSibling:', peopleList.previousElementSibling);
                                                                        //poprzedni sąsiad listy 'people'
/**
 * Cwiczenie 3
 * Zaimplementuj funkcję, która dla podanego elementu 'parent' typu `tbody` utworzy wiersze
 * tabeli `<tr>` z dwoma kolumnami '<td>' na dane z tabeli 'products': nazwę (name) i cenę (price). 
 */
function createTable(parent, products){
    throw "not implemented";
}

/**
 * Ćwiczenie 4
 * 1. Za Romanem dodaj imię Anna
 * 2. Przenieś Urszulę za Karolem
 * 3. Usuń imiona zaczynające się literą R
 */
//Przykład tabeli products
const products = [{name: "Masło", price: 8.5}, {name: "Bułka", price: 1.45}, {name: "Pomidory", price: 8.90}];
//Przykład wywołania products
createTable(document.getElementById('products'), products);
