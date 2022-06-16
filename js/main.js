// const products = [
//     {id: 1, title: 'Notebook', price: 2000, img: "./img/notebook.jpg"},
//     {id: 2, title: 'Mouse', price: 20, img: "./img/mouse.jpg"},
//     {id: 3, title: 'Keyboard', price: 200, img: "./img/keyboard.jpg"},
//     {id: 4, title: 'Gamepad', price: 50, img: "./img/gamepad.jpg"},
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (product) => {
//     return `<div class="product-item">
//                 <h3>${product.title}</h3>
//                 <img src="${product.img}" alt="${product.title}">
//                 <p>${product.price} $</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };

// const renderPage = list => {
//     document.querySelector('.products').innerHTML = 
//     (list.map(product => renderProduct(product))).join('');
// };

// renderPage(products);

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/"

class ProductList {
    constructor (container = ".products") {
        this.container = container;
        this.goods = [];
        this._fetchProducts(); // метод вызывается в текущем классе
        this.render(); //вывод товара на страницу
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: "./img/notebook.jpg"},
            {id: 2, title: 'Mouse', price: 20, img: "./img/mouse.jpg"},
            {id: 3, title: 'Keyboard', price: 200, img: "./img/keyboard.jpg"},
            {id: 4, title: 'Gamepad', price: 50, img: "./img/gamepad.jpg"},
        ]
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());    
        }
    }

    getSum() {
        let s = 0;
        for(let product of this.goods) {
            s += product.price;
        }
    }

    
};

class ProductItem {
    constructor (product) {
        this.title = product.title;
        this.img = product.img;
        this.price = product.price;
        this.id = product.id;
    }
    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <img src="${this.img}" alt="${this.title}">
                <p>${this.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();



class Cart {
    constructor(container=".cart-elm") {
        this.container = container;
        this.goods = [];

        this._clickCart();
        this._getCartItem()
        .then(data => {
            this.goods = data.contents;
            this.render();
        })
    }

    _getCartItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                alert(Error);
            })
    }

   
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new CartItem();

            block.insertAdjacentHTML('beforeend', productObj.render(product));
        }
    }

    _clickCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
        document.querySelector(this.container).classList.toggle('invisible')});
    }

}

class CartItem {
    render(product, img='https://via.placeholder.com/50x50') {
        return `<div class="cart-item" data-id="${product.id_product}">
                    <div class="cart-block1">
                        <div class=cart-item1>
                            <img src="${img}" alt="${product.product_name}">
                        </div>
                        <div class="cart-item2">
                            <p class="product-tittle">${product.product_name}</p>
                            <p class="product-quantity">Колличество: ${product.quantity}</p>
                            <p class="product-single-price">Цена: ${product.price}$</p>
                        </div>
                        <div class="cart-item3">delete</div>
                    </div>
                    <div class="cart-block2">
                        <div class="countGoods"></div>
                        <div class="amount"></div>
                    </div>               
                </div>`
    }
}

let obj = new Cart();