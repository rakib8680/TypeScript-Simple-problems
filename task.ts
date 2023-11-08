

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
}

