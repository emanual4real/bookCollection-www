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