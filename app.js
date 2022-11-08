console.log("Hello World!\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);

        }
    
    }
let i = 1;
while(i < 100){
    if(i %2 !== 0){
        console.log(i);
    }
    i++;
}
let x = 1;
do{
    if(x % 2 !== 0){
        console.log(x);
    }
    x++;
} while(x < 100);


for (let i = 1; i <= 100; i++){
    let output = "";

if(i % 3 == 0){
    output = "FIZZ";
}

if( i % 5 == 0){
    output += "BUZZ";
}

console.log(`${i} ${output}`);    
}

let a = 1;

while(a <= 100){
    let output = "";

if(a % 3 == 0){
    output += "FIZZ";
}

if(a % 5 == 0){
    output += "BUZZ";
}

console.log(`${a} ${output}`);

a++;

}
let c = 1;

do {
    let output = ""; 

if (c % 3 == 0){
    output += "FIZZ";
}

if(c % 5 == 0){
    output += "BUZZ";
}


console.log(`${c} ${output}`);

c++;
} while (c <= 100);

let numberToFind = Math.round((Math.random() * 500));

let n = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 1; i <= n; i++){
    if(i == numberToFind){
        console.log(`Found ${numberToFind}!`);
        break;
    }
    if(i == n){
        console.log(`Did not find ${numberToFind}`);
    }
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++){
    let output = "";

    if(i % fizzDivisor == 0){
        output += "FIZZ"
    }

    if (i % buzzDivisor == 0){
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}
