fetch("https://jsonplaceholder.typicode.com/photoss", {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => {
        if(response.ok) {
           return response.json()
        }
        throw "no content";
    })
    .then(json => {
        console.dir(json)
    })
    .catch(e => {
        console.log(e);
    });