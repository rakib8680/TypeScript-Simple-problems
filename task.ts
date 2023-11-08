
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

