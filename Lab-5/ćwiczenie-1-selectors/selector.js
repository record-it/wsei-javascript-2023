window.onload = function(){
    const liCollection = document.getElementsByTagName('li');                 //kolekcja elementów z ta sama nazwa tag'a 
    const redClassCollection = document.getElementsByClassName('red');        //kolekcja elementów z tą sama klasą
    const sameNameCollection = document.getElementsByName('title');           //kolekcja elementów z tym samym atrybutem 'name'
    const ulElement = document.getElementById('people');                      //element o id

    console.log('all li', liCollection);                                                       
    console.log('elements with name = "title"',sameNameCollection);           //można pobrać liczbę elementów              
    console.log(liCollection.length);                                         //długość kolekcji
    console.log(liCollection[0]);                                             //można odwołać się do danego elementu
    try{
        liCollection.push();                                                  //nie można dodać do kolekcji ani wykonywa funkcji Array!
    }catch(e){
        console.log("Nie można zmieniać kolekcji uzyskanych przez getElementByXXX!!!");
    }
    //Na podstawie kolekcji można utworzyć tablicę, którą można swobodnie mutować
    const liArray = Array.from(liCollection);
    //Metoda querySelector zwraca jeden element. Gdy wiele elementów pasuje do selektora to zwracany jest pierwszy pasujący.
    //Selektory mają taką sama postać jak w plikach css.  
    //Metody querySelectorX najlepiej sprawdzają się, gdy wyszukujemy specyficzny element na podstawie wielu cech
    const h1Element = document.querySelector('h1');               //pierwszy element pasujący do selektora, w tym przypadku do taga h1
    const liElementWithRedClass = document.querySelector('ul li.red');       //pierwszy element li klasy 'red', który jest dzieckiem elementu ul
    const liWithId = document.querySelector('#title');                       //pierwszy i jedyny element o id 'title'
    const inputWithName = document.querySelector('input[name="title"]');     //pierwszy element typu input z atrybutem name równym 'title'
    console.log('Input with name', inputWithName);
    console.log('Elements li with red class %o', liElementWithRedClass);         
    //Metoda querySelectorAll zwraca listę węzłow pasujących do selektora
    const liElements = document.querySelectorAll('ul li');                      
    const liPeopleElements = document.querySelectorAll('li:nth-child(2)');     // lista elementów li, kóre są drugimi dziećmi
    console.log("Seconds li elements in every ul list", liPeopleElements);
    liPeopleElements.forEach(e => console.log(e.innerText));
    /**
     * Cwiczenie 1
     * do kolejnych zmiennych przypisz
     * collection1 - elementy z name 'title' typu li 
     * collection2 - elementy li klasy 'red' będące dziećmi elementu ul z klasą 'list'
     * collection3 - elementy klasy 'bold' typu li będące dziećmi elementu o id 'people'
     */

    /**
     * Ćwiczenie 2
     * Wybierz za pomoca selectorów
     * elementy input typu text
     * elementy ul występujące za h2
     * parzyste elementy li we wszystkich listach
     * elementy li klasy bold
     */
    let collection1 = [];
    let collection2 = [];
    let collection3 = [];
    let message = "TEST\n";
    if (collection1.length === 1 && collection1[0].tagName === 'LI' && collection1[0].getAttribute('name') === 'title'){
        message += 'Test11 passed\n';
    } else {
        message += 'Test11 failed\n';
    }
    if (collection2.length === 1 && collection2[0].tagName === 'LI' && collection2[0].classList.contains('red') && collection2[0].parentElement.classList.contains('list')){
        message += 'Test12 passed\n';
    } else {
        message += 'Test12 failed\n';
    }
    if (collection3.length === 1 && collection3[0].tagName === 'LI' && collection3[0].classList.contains('bold') && collection3[0].parentElement.getAttribute('id') === "people") {
        message += 'Test12 passed\n';
    } else {
        message += 'Test12 failed\n';
    }
}