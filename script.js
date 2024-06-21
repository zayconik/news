const API_KEY = "dd37a701f75a4c778a7d9a9443336b32"
// const API_KEY = "499d03534f224e8890dcd1f95376001c"
const url = "https://newsapi.org/v2/everything?q="



async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json()
    return data
}
fetchData("all").then(data => renderMain(data.articles))




let mobilemenu = document.querySelector("#mobnavid")
let menuBtn = document.querySelector(".mobilemenubtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",()=>{
    mobilemenu.classList.toggle("hidden")
})



//render news 
function renderMain(arr){
    let mainHTML = ''
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i].urlToImage){
        mainHTML += ` <div class="card">
                        <a href=${arr[i].url}>
                        <img src=${arr[i].urlToImage} lazy="loading" />
                        <h4>${arr[i].title}</h4>
                        <div class="details">
                            <p>${arr[i].source.name}</p>
                            <span>•</span>
                            <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${arr[i].description}
                        </div>
                        </a>
                     </div>
        `
        }
    }

    document.querySelector("main").innerHTML = mainHTML
}


const searchF = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")
const searchFmob = document.getElementById("searchFormMob")
const searchInputmob = document.getElementById("searchInputMob")


searchF.addEventListener("submit",async(e)=>{
    e.preventDefault()
    
    const data = await fetchData(searchInput.value)
    renderMain(data.articles)
   

})
searchFmob.addEventListener("submit",async(e)=>{
    e.preventDefault()
    
    const data = await fetchData(searchInputmob.value)
    renderMain(data.articles)
   

})




let srchbtn = document.querySelector("#searchbuttonPC")
srchbtn.addEventListener("click",async()=>{
    const data = await fetchData(searchInput.value)
    renderMain(data.articles)
})


let srchbtnmob = document.querySelector("#searchbuttonMob")
srchbtnmob.addEventListener("click",async()=>{
    const data = await fetchData(searchInput.value)
    renderMain(data.articles)
})

async function Search(query){
    const data = await fetchData(query)
    renderMain(data.articles)
}


