const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "./img/notebook.jpg"},
    {id: 2, title: 'Mouse', price: 20, img: "./img/mouse.jpg"},
    {id: 3, title: 'Keyboard', price: 200, img: "./img/keyboard.jpg"},
    {id: 4, title: 'Gamepad', price: 50, img: "./img/gamepad.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => {
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <img src="${product.img}" alt="${product.title}">
                <p>${product.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = 
    (list.map(product => renderProduct(product))).join('');
};

renderPage(products);