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
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    render() {

    }
}

class CartItem {
    render() {
        
    }
}