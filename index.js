//ASSIGMENT2

function fibonacci(n) {
    let a=0;
    let b =1;
    let z;
    let i = 0;
    console.log('fibonacci series are:');
    for(i=0; i<=n; i++) {
        console.log(a);
        z = a + b;
        a=b;
        b=z;
    }
}
console.log(fibonacci(8));
