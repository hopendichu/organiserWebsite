// const slides=document.querySelectorAll(".slides img");
// let slideIndex=0;
// let intervalId=null;

// // initializeSlider();
// document.addEventListener("DOMContentLoaded",initializeSlider);
// function initializeSlider(){
//     slides[slideIndex].classList.add("displaySlide");
//    intervalId=setInterval(nextSlide,1000);

// }

// function showSlide(index){
//     if(index >= slides.length){
//         slideIndex=0;

//     }else if(index < 0){
//         slideIndex = slides-1;

    
//     slides.forEach(slide=>{
//         slide.classList.remove("displaySlide")
//     });
//     slides[slideIndex].add("displaySlide");}

// }

// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);

// }

// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);

// }

const apiKey='85d0b236e525cb936aa270e45e85f69a';
const apiUrl="https://gnews.io/api/v4/search?q=home+organising&apikey=85d0b236e525cb963aa270e45e85f69a"
const blog=document.getElementById('blog')

  fetch(apiUrl)
    .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not okay');
        }return response.json();
    })
    .then(data=>{
        data.articles.forEach(article=>{
            const articleElement=document.createElement('div');
            articleElement.innerHTML=`
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read More </a>`

            blog.appendChild(articleElement);
        });
    });


    // function createCard(article){
    //     const card=document.createElement("div");
    //     card.classList.add("card");

    //     const image=document.createElement("img");
    //     image.src=article.image;
    //     image.alt="Article Image";

    //     image.classList.add("card-image");
    //     card.appendChild(image);

    //     const content=document.createElement("div");

    //     content.classList.add("card-content");

    //     const title=document.createElement("h2");

    //     title.classList.add("card-title");
    //     title.textContent=article.title;
    //     content.appendChild("title");

    //     const description=document.createElement("p");
    //     description.classList.add("card-description");
    //     description.textContent=article.description;

    //     content.appendChild(description);

    //     const readMoreLink=document.createElement("a");

    //     readMoreLink.classList.add("read-more");
    //     readMoreLink.href=article.url;
    //     readMoreLink.textContent="Read More";

    //     content.appendChild(readMoreLink);
    //     card.appendChild(content);

    //     card.addEventListener("click" , ()=>{
    //         window.open(article.url, "_blank");
    //     });
    //     return card;
    // }

    //  function displayArticles(){
    //     const articlesContainer=document.getElementById("blog");
    //     const articles=

    //    articles.forEach(article=>{
    //         const card=createCard(article);

    //         blog.appendChild(card);
    //     });
    // }

    // displayArticles();

    