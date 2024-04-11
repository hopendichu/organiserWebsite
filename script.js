
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
        const articles=data.articles;
        articles.forEach(article=>{
            const card=document.createElement('div');
            card.classList.add('card');
            card.style.borderRadius='8px';
            card.style.padding='16px';
            card.style.marginBottom='16px';
            card.style.border='1px solid #ccc';
            card.style.flexWrap='wrap';
            card.style.justifyContent='center';
            card.style.display='flex'

            const title=document.createElement('h2');
            title.textContent=article.title;
            title.style.fontweight='bold';
            title.style.marginBottom='8px';

            const description=document.createElement('p');
            description.textContent=article.description;
            description.style.marginBottom='8px'

            const link=document.createElement('a');
            link.textContent='Read More';
            link.href=article.url;
            link.target='_blank';
            link.style.color='palevioletred';
            link.style.textDecoration='none';

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(link);

            blog.appendChild(card);

        });
    })

    .catch(error=>{
        console.error('Error:',error);
    });

    
    function addToCart(productId){
        let cart=JSON.parse(localStorage.getItem('cart')) ||[];
    

    let productExists=cart.some(product=> product.id=== productId);

    if(productExists){
        cart=cart.map(product=>{
            if(product.id===productId){
                return{
                    ...product, quantity:product.quantity + 1
                };

            }

            return product;
        });
    }else{
        cart.push({
            id:productId, quantity:1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    alert('Added to cart')
}

 
    function displayCartItems(){
        let cart=JSON.parse(localStorage.getItem('cart')) || [];

        console.log(cart);

        document.getElementById('cart-icon').addEventListener('click', displayCartItems)
    }
