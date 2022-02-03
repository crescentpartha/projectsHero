
// 01. Write a function which take Three parameter of three different length of a triangle and calculate the area of a triangle.

// way - 1 | S = (a+b+c)/2 | A = sqrt(s(s-a)(s-b)(s-c)) | (Heron's Formula - Best Formula)
// way - 2 | A = (height * base) / 2
// way - 3 | a=b=c | A = (sqrt(3)/4)*pow(s,2);
// way - 4 | A = (1/2)*a*b*sin(30deg)

function calculateArea (a, b, c) {
    const s = (a+b+c)/2;
    console.log('s =', s);
    const A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    // console.log('A =', A);
    return A;
}

const area = calculateArea(9, 10, 11);
console.log('Triangle Area =', area);

// 02. Write a function which check a number is prime or not.

function isPrime (num) {
    if(num < 2){
        return false;
    }
    else {
        for (let i = 2; i<num; i++){
            if(num%i == 0){
                return false;
            }
        }
        return true;
    }
}

for (let i=0; i<100; i++){
    const prime = isPrime(i);
    if(prime){
        console.log(i, 'is a prime number');
    }
    else{
        // console.log(i, 'is not a prime number');
    }
}
