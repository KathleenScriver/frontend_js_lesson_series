const search = new URLSearchParams(window.location.search)
const id = search.get('id')

fetch(`http://localhost:3000/articles/${id}`)
    .then(response => response.json())
    .then(console.log)