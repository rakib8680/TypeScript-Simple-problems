


// Problem-1  ......................................
type Params = string | number;
const getResult = (param: Params): number => {
    if (typeof param === 'string') {
        return param.length;
    } else {
        return param * param;
    }
};




// Problem-2  ......................................
interface Person {
    address: {
        city: string;
        street: string;
    };
    phone: number
};

const person1: Person = {
    address: {
        city: 'Feni',
        street: "SSK Road"
    },
    phone: 3784384
}

const getAddressCity = (person: Person): string => {
    return person?.address?.city;
};






// Problem-3 ......................................
class Cat {
    constructor(public name: string, public color: string, public sound: string) { }
};

const isCat = (cat: Cat) => {
    if (cat instanceof Cat) {
        return console.log('Yes, it is a cat');
    } else {
        return console.log('No, it is not a cat');
    }
};





// Problem-4 ......................................
type MixedValue = string | number;
const mixedData: MixedValue[] = [6, 'mango', 2, 8, 'x', 7, 'go', 'think', 3];

const getTotal = (arr: MixedValue[]): number => {
    let total = 0;
    arr.forEach(item => {
        if (typeof item === 'number') {
            total += item;
        }
    })
    return total;
};






// Problem-5 ......................................
interface Car {
    make: string,
    model: string,
    year: number,
};

interface Driver {
    name: string,
    licenseNumber: number,
};


const getAllDetails = (car: Car, driver: Driver) => {
    const result = { ...car, ...driver };
    return result;
};





// Problem-6 ......................................
const getSum = (arr: unknown) => {
    if (Array.isArray(arr) && arr.every(num => typeof num === 'number')) {
        const sum: number = arr.reduce((acc, num) => acc + num, 0)
        console.log(sum)
    } else {
        console.log('Please Provide Number Array');

    }

};





// Problem-7 ......................................
const findFirstOccurrence = <T>(arr: T[], param: T) => {
    const result: number = arr.indexOf(param);
    return result !== -1 ? result : -1;
};

const numbers: number[] = [6, 3, 8, 2, 9, 1];
const targetNum = 9;
const strings: string[] = ["a", "b", "c", "d", "e"];
const targetStr = "d";

const res1 = findFirstOccurrence<number>(numbers, targetNum);
const res2 = findFirstOccurrence<string>(strings, targetStr);

console.log('Index of Target Number is: ', res1);
console.log('Index of Target String is: ', res2);




// Problem-8 ......................................
interface Product {
    name: string;
    price: number;
    quantity: number;
};

const totalPrice = (arr: Product[]): number => {
    let totalCost: number = 0;
    for (const product of arr) {
        totalCost += product.price * product.quantity;
    }
    return totalCost;
};




{
    /*
 Problem 1:
Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.


Problem 2:
Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.


Problem 3:
Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."


Problem 4:
You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.
To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.
Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.


Problem 5:
Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.


Problem 6:
Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.


Problem 7:
Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.


Problem 8:
Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.
     */
}