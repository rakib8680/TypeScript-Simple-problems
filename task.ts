
// Problem-1  ......................................
type Params = string | number;
const getResult = (param: Params): number => {
    if (typeof param === 'string') {
        return param.length;
    } else {
        return param * param;
    }
};






