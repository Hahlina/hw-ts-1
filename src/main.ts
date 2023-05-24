interface IProduct {
    name: string;
    price: number;
}

interface IPurchase {
    id: string;
    amount: number;
    product: IProduct;
}

class Product {
    constructor(public name: string, public price: number) {}

    displayInfo(): void {
        const product = {
            name: this.name,
            price: this.price,
        };
        console.log('Product =>', product.name, 'info =>', product);
    }
}

class Cart {
    purchases: IPurchase[];

    constructor() {
        this.purchases = [];
    }

    add(product: IProduct, amount: number): void {
        const existingPurchase = this.purchases.find((purchase) => purchase.product.name === product.name);

        if (existingPurchase) {
            existingPurchase.amount++;
            console.log('Cart:', this.purchases);
        } else {
            const purchase: IPurchase = {
                id: product.name,
                product,
                amount,
            };
            this.purchases.push(purchase);
            console.log('Purchase added:', purchase);
            console.log('Cart:', this.purchases);
        }
    }

    delete(product: IProduct): void {
        const purchaseIndexToDelete = this.purchases.findIndex((purchase) => purchase.product.name === product.name);

        if (purchaseIndexToDelete !== -1) {
            if (this.purchases[purchaseIndexToDelete].amount > 1) {
                this.purchases[purchaseIndexToDelete].amount--;
            } else {
                this.purchases.splice(purchaseIndexToDelete, 1);
            }
        }

        console.log('Purchase deleted:', this.purchases);
    }

    calculateTotalSum(): number {
        const totalSum = this.purchases.reduce((sum, purchase) => {
            return sum + purchase.product.price * purchase.amount;
        }, 0);

        console.log('Total sum of cart:', totalSum);

        return totalSum;
    }
}

const apple = new Product('apple', 5);
apple.displayInfo();

const juice = new Product('juice', 40);

const cart = new Cart();
cart.add(apple, 3);
cart.add(juice, 1);
cart.delete(apple);
cart.calculateTotalSum();
