fetch("https://jsonplaceholder.typicode.com/photos", {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())
    .then(json => {
        console.dir(json)
    })
    .catch(e => {
        console.log("error");
    });