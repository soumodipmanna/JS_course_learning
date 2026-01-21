// 1. Check if Integer
function is_integer(num) {
    return num % 1 === 0;
}
console.log("Q1:Is 4 integer?", is_integer(4));

// Q2: Sum of array elements using forEach
function add_all(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}
console.log("Q2: Sum of [1, 2, 3, 4] is:", add_all([1, 2, 3, 4]));
//Q3: Celsius to ferenheit and vise versa
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}
function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}
console.log("Q3: 60°C in Fahrenheit is:",celsiusToFahrenheit(60));
console.log("Q3: 45°F in Celsius is:", fahrenheitToCelsius(45));
//Q4:factorial
function factorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result = result * i;
    }
    return result;
}
console.log("Q4: Factorial of 5 is:", factorial(5));

// Q5: Convert Amount to Coins
function convert_to_coins(amount) {
    const coins = [25, 10, 5, 2, 1];
    let remaining = amount;
    let result = [];

    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        while (remaining >= coin) {
            result.push(coin);
            remaining -= coin;
        }
    }
    console.log("Q5: Coins for " + amount + ":", result.join(" "));
}
convert_to_coins(87);
// Q6: Reverse String Function
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log("Q1 Reverse 'Hello':", reverse("Hello"));
// 2. Comparator to Sort by Radius

var circles = [{radius: 5}, {radius: 9}, {radius: 2}];
circles.sort(function(a, b) {
    return a.radius - b.radius;
});
console.log("Q2 Sorted Circles:", JSON.stringify(circles));
function length_of_array(arr) {
    let count = 0;
    arr.forEach(function(element) {
        count++;
    });
    return count;
}

// Test for Q3 (Sparse Array Logic)
let testArr = [10, 20]; 
testArr[5] = undefined; // Index 2,3,4 are empty holes. Index 5 is explicit undefined.
// Native .length would say 6. Our function should say 3 (10, 20, undefined).
console.log("Q3 Native Length:", testArr.length); // Prints 6
console.log("Q3 Calculated Length:", length_of_array(testArr)); // Prints 3

console.log("--- Assignment 2 Completed ---");
//1. Find Largest String (using reduce)
function findLargestString(strings) {
    return strings.reduce(function(longest, current) {
        return (current.length > longest.length) ? current : longest;
    }, "");
}
console.log("Q1 Largest String:", findLargestString(["apple", "banana", "kiwi", "watermelon"]));
// 2. Sum of Squares (using map & reduce)
function sumOfSquares(numbers) {
    return numbers.reduce(function(sum, current) {
        return sum + (current * current);
    }, 0);
}
console.log("Q2 Sum of Squares [1,2,3]:", sumOfSquares([1, 2, 3])); // Should be 14

// 3. Filter Even Numbers
function filterEvens(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}
console.log("Q3 Even Numbers:", filterEvens([1, 2, 3, 4, 5, 6]));

// 4. Custom Inverse Filter (The "Reject" Function)

function filterNot(arr, criteriaFn) {
    return arr.filter(function(element) {
        return !criteriaFn(element);
    });
}

// Test for Q4: Return elements that are NOT > 5
let numbers = [3, 4, 5, 6, 7, 8];
let isGreaterThanFive = function(n) { return n > 5; };

console.log("Q4 Filter Not > 5:", filterNot(numbers, isGreaterThanFive)); // Should be [3, 4, 5]

// Assignment 4
console.log(" Assignment 4 ");

// 1. Rectangle Constructor
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.area = function() {
    return this.width * this.height;
};

Rectangle.prototype.perimeter = function() {
    return 2 * (this.width + this.height);
};

var myRect = new Rectangle(5, 10);
console.log("Q1 Rectangle Area:", myRect.area());       // 50
console.log("Q1 Rectangle Perimeter:", myRect.perimeter()); // 30


// 2. Point Constructor (Distance Calculation)
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.distanceFrom = function(otherPoint) {
    let dx = this.x - otherPoint.x;
    let dy = this.y - otherPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
};
let p1 = new Point(0, 0);
let p2 = new Point(3, 4);
console.log("Q2 Distance:", p1.distanceFrom(p2)); 


// 3. Extending the String Object (isPalindrome)
String.prototype.isPalindrome = function() {
    var original = this.toString();
    var reversed = original.split("").reverse().join("");
    return original === reversed;
};
console.log("Q3 'Soumodip' is palindrome?", "xyx".isPalindrome()); 
console.log("Q3 'manna' is palindrome?", "hello".isPalindrome()); 

console.log("--- Assignment 4 Completed ---");