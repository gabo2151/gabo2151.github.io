var app = new Vue({
    el: '#app',
    data: {
        product: 'Helado',
        image: './images/helado.jpg',
        altText: 'Nom nom nom nom nom',
        width: '250px',
        height: '250px',
        inStock: true,
        details: ['bueno', 'rico', 'barato'],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart
        }
    }
})