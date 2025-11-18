function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string"){
        return value.toUpperCase();
    }else if (typeof value === "number"){
        return value*10;
    }else{
        return !value;
    }

}



const getLength = (value: string | any[]): number =>{
    if(typeof value === "string"){
        return value.length;
    }else if(Array.isArray(value)){
        return value.length;
    }else{
        return 0
    }
}




class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    getDetails(): string {
        return `"Name:  ${this.name}, Age:  ${this.age}"`;
    }

}




type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[]{
    return items.filter((item)=> item.rating >= 4)
}





type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user)=> user.isActive === true);
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void =>{
    const availability = book.isAvailable ? "Yes" : "NO";

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}




const getUniqueValues = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] =>{

    const result: (number | string)[] = [];

    const exists = (value: number | string, array: (number | string)[]) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    };

    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i], result)) {
            result.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!exists(arr2[j], result)) {
            result.push(arr2[j]);
        }
    }

    return result;
}




type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number{
    if(products.length === 0) return 0;

    return products.map((product)=> {
        const total = product.price * product.quantity;
        if(product.discount){
            return total * (1 - product.discount / 100);
        }
        return total;
    }).reduce((acc, curr)=> acc + curr, 0);
}

