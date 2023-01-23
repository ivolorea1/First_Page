

const productConteiner = document.querySelector('.catalogo')


const products = fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => {

        data.forEach(product => {
            const div = document.createElement('div')
            div.innerHTML = `
                <div class="col p-0 ">
                    <div class="card px-3 pt-5">
                        <div class=' h-75 '>
                            <img src="${product.image}" class="card-img-top " alt="image${product.id}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <a href="#" class="btn btn-primary d-block text-center">$${product.price}</a>
                        </div>
                    </div>
                </div>
            ` 
            productConteiner.appendChild(div)
        })    
    }).catch(e => console.log(e))
    


