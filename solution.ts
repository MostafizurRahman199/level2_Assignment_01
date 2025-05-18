function formatString(input, toUpper) {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}

formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"

function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));



function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (acc, curr) { return acc.concat(curr); }, []);
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));






// Vehicle.ts
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

// Example usage
const myCar = new Car("Toyota", 2025, "Corolla");
console.log(myCar.getInfo());  
console.log(myCar.getModel()); 











// processValue.ts
function processValue(value: string | number): number {
    return typeof value === 'string' ? value.length : value * 2;
}

// Example usage
console.log(processValue("hello")); 
console.log(processValue(10));       













interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.length === 0 ? null : products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
}


const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));  










enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return day >= Day.Monday && day <= Day.Friday ? "Weekday" : "Weekend";
}


console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"










async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        return Promise.reject(new Error("Negative number not allowed"));
    }
    return new Promise(resolve => setTimeout(() => resolve(n * n), 1000));
}


squareAsync(4).then(console.log);        
squareAsync(-3).catch(console.error);    