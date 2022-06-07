const products = [
    {id: 1, title: 'Notebook', price: 2000, img: "./img/notebook.jpg"},
    {id: 2, title: 'Mouse', price: 20, img: "./img/mouse.jpg"},
    {id: 3, title: 'Keyboard', price: 200, img: "./img/keyboard.jpg"},
    {id: 4, title: 'Gamepad', price: 50, img: "./img/gamepad.jpg"},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${img}" alt="${title}">
                <p>${price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title,item.price,item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);