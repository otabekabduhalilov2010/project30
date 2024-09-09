
const obj1 = {
    name: 'Boss',
    surname: 'Valijon',
    age: 21,
    address: 'Tashkent'
}

const product = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Сумка для девущек',
    rate: 2.9,
    reviews: 150,
    oldPrice: 120000,
    newPrice: 14000,
    description: 'good'
}



const product2 = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Cup',
    rate: 5.0,
    reviews: 150,
    oldPrice: 110000,
    newPrice: 1400,
    description: 'good'
}



const product3 = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Home',
    rate: 1.9,
    reviews: 120,
    oldPrice: 170000,
    newPrice: 15000,
    description: 'good'
}



const product4 = {
    img: 'https://cdn.obag.filoblu.com/media/catalog/product/cache/25162cc576cf81151d28507649e6339b/O/B/OBAGBG10_ECSN6_936_NOTAG_UNICA_L2.jpg',
    title: 'Tie',
    rate: 4.7,
    reviews: 170,
    oldPrice: 130000,
    newPrice: 12000,
    description: 'good'
}


product3.rate = 4.8
product3.newPrice = 2000
product3.oldPrice = 1000

product3.stock = 52 + 'product'

delete product3.oldPrice

console.log(product['title'], product['newPrice']);
console.log(product2['title'], product2['newPrice']);
console.log(product3['title'], product3['newPrice'], product3['rate'], product3['stock']);
console.log(product4['title'], product4['newPrice']);














const cardsImg = document.querySelector('.cards img').src = product.img
const cardsTitle = document.querySelector('.cards h3').innerText = product.title
const cardsRating = document.querySelector('#rating').innerText = product.rate
const cardsReviews = document.querySelector('#reviews').innerText = product.reviews
const cardsOldPrice = document.querySelector('.cards s').innerText = product.oldPrice
const cardsNewPrice = document.querySelector('.cards b').innerText = product.newPrice




