

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