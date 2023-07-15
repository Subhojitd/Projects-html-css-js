const accessKey = "Z_W5AZlPtBmAed7PDerNg9b15YaGQyctGT5UrcPX4dk"

const formEl = document.querySelector("form")  
const inputEl = document.getElementById('search-text')
const searchResults = document.querySelector('.search-results')
const showMore = document.getElementById('show-more-btn')

let inputData =""
let page = 1;

async function searchImages(){
    inputData =inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page == 1){
        searchResults.innerHTML = ""
    }

    results.forEach((result)=>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('search-result')
        const image = document.createElement('img');
        image.src = result.urls.small

        imageWrapper.appendChild(image)
        searchResults.appendChild(imageWrapper)
    })
    page++;
    if(page > 1){
        showMore.style.display = 'block';
    }
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    page = 1
    searchImages()
})
showMore.addEventListener('click', () => {
    searchImages()
})