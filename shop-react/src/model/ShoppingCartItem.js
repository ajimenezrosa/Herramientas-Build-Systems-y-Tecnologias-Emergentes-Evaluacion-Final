export default class ShoppingCartItem {
    
    product;
    quantity;

    subtotal() {
        return this.product.price * this.quantity;
    }

    constructor() { }

}