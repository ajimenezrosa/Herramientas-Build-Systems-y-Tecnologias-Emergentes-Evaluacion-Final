
export default class ShoppingCartService {

    static instance = null;

    shoppingCartItems = []

    static getInstance() {
        if (this.instance == null) {
            this.instance = new ShoppingCartService();
        }
        return this.instance;
    }

    addProduct(product, quantity) {

        const found = this.shoppingCartItems.find(sci=> sci.id == product.id)

        this.shoppingCartItems.push(product);
    }
}