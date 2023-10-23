export default function orderByProps(object, order=[]) {
    let arr1 = [];
    let arr2 = [];
    order.forEach(el => {
        if(el in object) {
            arr1.push({key: el, value: object[el]});
        } 
    })

    for(const prop in object) {
        if(!order.includes(prop)) {
            arr2.push({key: prop, value: object[prop]});
            arr2.sort((a, b) => {
                if(a.key > b.key) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }
    }
    return [...arr1, ...arr2];
}
