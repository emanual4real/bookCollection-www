// register API call
export const register = ((user) => {
    const requestOptions = {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(user),
        redirect: 'follow'
        };

    //"http://localhost:8080/users/registration"
    return fetch("/users/registration/", requestOptions)
        .then(results => results.json())
        .catch(error => error);
})