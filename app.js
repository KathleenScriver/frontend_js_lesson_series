fetch("http://localhost:3000/authors")
    .then(response => response.json())
    .then(authors => showAuthors(authors))

const showAuthors = (authors) => {
    const authorSection = document.querySelector('#authors')

    authors.forEach(author => {
        const newAuthor = document.createElement('h4')
        newAuthor.innerText = author.name
        authorSection.append(newAuthor)
    })
}




