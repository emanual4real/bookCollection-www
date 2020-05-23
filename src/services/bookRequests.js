// get books API call
export const getBooks = (async (book) => {
    const requestOptions = {
        method: 'GET',
        headers: {"Content-Type":"application/json"},
        redirect: 'follow'
        };

    //"http://localhost:8080/books"
    return fetch("/books/", requestOptions)
        .then(results => results.json())
        .catch(error => error);
})

export const addBook = (async (book) => {
    const requestOptions = {
    method: 'POST',
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(book),
    redirect: 'follow'
    };
    // "http://localhost:8080/books/"
    return fetch("/books/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})