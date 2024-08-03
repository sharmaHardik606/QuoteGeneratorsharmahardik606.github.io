const url = "https://api.quotable.io/random";
const quote = document.querySelector(".p");
const author = document.querySelector(".p1");
const newQuote = document.querySelector("#b1");
const tweet = document.querySelector("#b2");


const getQuote = async()=>{
    try{
    let response = await fetch(url);
    if(!response.ok){
        throw new Error("HTTP error! status: " + response.status);
    }
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = "-" + data.author;
    }
    catch(error){
        alert("Error fetching quote",error)
    }
}


getQuote()
newQuote.addEventListener("click",getQuote);


function twitter(){
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}

tweet.addEventListener("click",twitter);
