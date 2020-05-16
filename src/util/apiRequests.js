// get books API call
export const getBooks = ((book) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    //"http://localhost:8080/books"
    return fetch("/books/", requestOptions)
        .then(results => results.json())
        .catch(error => error);
})

export const addBook = (async (book) => {
    const raw = JSON.stringify(book);

    const requestOptions = {
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    body: raw,
    redirect: 'follow'
    };
    // "http://localhost:8080/books/"
    fetch("/books/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})