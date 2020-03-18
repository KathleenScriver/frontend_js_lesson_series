const params = window.location.search
const searchParams = new URLSearchParams(params)
const id = searchParams.get('id')

fetch(`http://localhost:3000/authors/${id}`)
    .then(response => response.json())
    .then(author => showAuthor(author))

function showAuthor(author){
    const title = document.querySelector('#name')
    const newAuthor = document.createElement('h1')
    newAuthor.innerText = author.name
    title.append(newAuthor)

    showArticles(author.articles)
}

function showArticles(articles){
    const articleContainer = document.querySelector('#articles')

    articles.forEach(article => {
        const articleTitle = document.createElement('li')
        articleTitle.innerHTML =`<a href='showArticle.html?id=${article.id}'>${article.title}</a>`
        articleContainer.append(articleTitle)
    })
}