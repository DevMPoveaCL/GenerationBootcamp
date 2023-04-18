function recursivo(num){
    if (num == 1 ) {
        return 1;
    } else {
        console.log(num)
        console.log(num + recursivo(num-1))
        return num + recursivo(--num) ;
    }
}
console.log(recursivo(5));

function suma(num){
    let total = 0
    for (let i = 0; i <= num; i++) {
        total = total + i;
        console.log(i)
        console.log(total)
    }
    return total
}

console.log(suma(5));