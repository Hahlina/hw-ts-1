class Address {
    constructor(
        public street: string,
        public city: string,
        public postalCode: string
    ) {}
}

class Customer {
    constructor(
        public name: string,
        public age: number,
        public address: Address
    ) {}

    displayInfo(): void {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Адреса: ${this.address.street}, ${this.address.city}, ${this.address.postalCode}`);
    }
}

interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(public radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Store {
    private products: string[] = [];

    constructor(public name: string) {}

    addProduct(product: string): void {
        this.products.push(product);
    }

    removeProduct(product: string): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    displayProducts(): void {
        console.log(`Товари у магазині "${this.name}":`);
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product}`);
        });
    }
}

const address = new Address('Вулиця 1', 'Місто 1', '12345');


const customer = new Customer('Іван', 25, address);
customer.displayInfo();

const rectangle = new Rectangle(5, 10);
const circle = new Circle(3);

console.log('Площа прямокутника:', rectangle.calculateArea());
console.log('Площа кола:', circle.calculateArea());

const store = new Store('Моя Магазин');
store.addProduct('Товар 1');
store.addProduct('Товар 2');
store.displayProducts();
store.removeProduct('Товар 1');
store.displayProducts();
