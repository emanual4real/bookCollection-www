# bookCollection-www

## This is the frontend of my book collection webapp.

- Database - Mongo on a linux box with Docker
- [Backend](https://github.com/emanual4real/bookcollection-api) - Node with express (Dockerize it in the future)
- [Frontend](https://github.com/emanual4real/bookcollection-www) - Node and React (later Dockerize with NGINX). I decided against redux. Using sagas/thunk for async processes seems like a real pain.

_NOTE: Technically, I'm a professional programmer because I'm paid at work to write code but I'm still learning. I'll welcome any feedback/comments/questions_

## TODO List

- Home Page
- Login Page
  - Choose an authentication option
- Book Page
  - GET books - complete
  - ADD books - complete
  - UPDATE books
  - DELETE books
  - SORT books - complete
  - FILTER books - in progress
  - REARRANGE columns
- Collection Page
  - Create Collection page
  - Add book to collection
  - Remove from collection
