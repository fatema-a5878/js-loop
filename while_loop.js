// Some practice
let num = 0;
while(num < 10){
    console.log(num, "Bangladesh");
    num++;
}

// ___________________________Even Number____________________________
let num = 2;
while(num <= 100){
    console.log(num);
    num += 2;
}

// ___________________________Odd Number____________________________
let num = 1;
while(num <= 100){
    console.log(num);
    num += 2;
}

// ___________________________Sum____________________________
let num = 1;
let sum = 0;
while(num <= 10){
    // console.log("Normal :", num);
    sum = sum + num;
    num++;
}

console.log("sum :", sum);


// ___________________________While loop tasks____________________________


// ------------------------------Task 1
let i = 0;
while(i <= 60){
    console.log(i, "I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}


// -------------------------------Task 2

// ------------ODD----------
let i = 61;
while(i < 100){
    console.log(i);
    i += 2;
}
// -----------EVEN----------
let i = 78;
while(i <= 98){
     console.log(i);
     i += 2;
}


// --------------------------------Task 3

// -----------ODD---------
let i = 81;
let sum = 0;
while(i <= 131){
    console.log(i);
    sum = sum + i;
    i += 2;
}
console.log('Sum :', sum);


// -------------EVEN--------------
let i = 206;
let sum = 0;
while(i < 311){
    console.log(i);
    sum = sum + i;
    i += 2;
}
console.log("Sum :", sum);

// ---------------------------------Task 4

let i = 1;
let mainNum = 5;
while(i <= 10){
    console.log(mainNum, '×', i, '=', mainNum*i);
    i++;
}

// -------------------------------------------------------------COUNT-DOWN TIMER-------------------------------------------------------
// Copied!!!!
function countdownTimer() {
    let count = 21;

    // Function to update the countdown display
    function updateCountdown() {
        console.log(count);
        count--;
        
        // Check if countdown reached 15
        if (count < 15) {
            clearInterval(timer);
        }
    }

    // Initial call to update countdown display
    updateCountdown();

    // Set interval to update countdown every second
    let timer = setInterval(updateCountdown, 1000);
}

// Start the countdown timer
countdownTimer();
