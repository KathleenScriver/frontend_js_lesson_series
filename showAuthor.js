const search = new URLSearchParams(window.location.search)
const id = search.get('id')

fetch(`http://localhost:3000/authors/${id}`)
    .then(response => response.json())
    .then(author => displayAuthor(author))

function displayAuthor(author){
    const title = document.querySelector('h1')

    const name = document.createElement('h3') 
    const age = document.createElement('p')

    name.innerText = author.name
    age.innerText = author.age

    title.append(name, age)

    displayArticles(author.articles)
}

function displayArticles(articles){
    const articleList = document.querySelector('#article-list')

    articles.forEach(article => {
        const articleTitle = document.createElement('p')
        articleTitle.innerHTML = `<a href='showArticle.html?id=${article.id}'>${article.title}</a>`
        articleList.append(articleTitle)
    })
}