const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const carShoppinIcon = document.querySelector('.navbar-shopping-cart');
const carShoppinDetails = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobilepMenu);
carShoppinIcon.addEventListener('click',toggleCarShopping)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
}

function toggleCarShopping(){
    carShoppinDetails.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:"Console",
    price:120.00,
    image:'https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name:"Mouse",
    price:120.00,
    image:'https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name:"Pc",
    price:120.00,
    image:'https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p')
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src','./Icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}