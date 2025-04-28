let number = prompt("Enter a four-digit number:");
if (number.length === 4 && !isNaN(number)) {
    
    let digits = [number[3], number[2], number[1], number[0]];
    console.log(digits.join(" "));
} else {
    console.log("Please enter a valid four-digit number.");
}