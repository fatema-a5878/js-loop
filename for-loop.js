// Some practice
for (let i = 1; i <= 10; i++){
    console.log(i, "i love you");
}

for (let i = 1; i <= 5; i++){
    console.log(i, "Bangladesh");
}

// ____________________ODD__________________________
for (let i = 1; i < 10; i += 2){
    console.log(i);
}
// ____________________EVEN__________________________
for (let i = 2; i <= 10; i += 2){
    console.log(i);
}
// ---------------------SUM-------------------------
let sum = 0;
for (let i = 1; i <= 10; i++){
    console.log(i);
    sum = sum + i;
}
console.log('Sum :', sum);





// ---------------------------FOR LOOP TASK----------------------------

// Task 1

for (let i = 1; i <= 60; i++){
    console.log(i, 'I will invest at least 6 hrs every single day for next 60 days!');
}

// Task 2


// ______________ODD______________
for (let i = 61; i < 100; i += 2){
    console.log(i);
}


// _____________EVEN____________
for (let i = 78; i <= 98; i += 2){
    console.log(i);
}


// Task 3

// __________________ODD________________________
for (let i = 91; i <= 129; i += 2){
    console.log(i);
}


// ________________EVEN____________________
for (let i = 52; i < 85; i += 2){
    console.log(i);
}


// Task 4

// Generate a multiplication table for number 9

let mainNum = 9;
for (let i = 1; i <= 10; i++){
    console.log(mainNum, "×", i, "=", mainNum*i);
}