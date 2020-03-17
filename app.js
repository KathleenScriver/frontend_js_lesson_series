fetch("http://localhost:3000/authors")
    .then(response => response.json())
    .then(authors => showAuthors(authors))

function showAuthors(authors){
    const authorSection = document.querySelector('#authors')

    authors.forEach(author => {
        const newAuthor = document.createElement('h4')
        newAuthor.innerHTML = `<a href='showAuthor.html?id=${author.id}'>${author.name}</a>`
        authorSection.append(newAuthor)
    })
}




