function generateRandomNumber() {
    let min = prompt("Zadejte minimální hodnotu:");
    let max = prompt("Zadejte maximální hodnotu:");
    min = parseInt(min);
    max = parseInt(max);
  
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    alert(`Náhodné číslo v rozsahu ${min} až ${max} je: ${getRandomNumber(min, max)}`);
  }
  

function Factorial() {
    let n = prompt("Zadejte číslo pro výpočet faktoriálu:");
    n = parseInt(n);
    
    function factorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      } else {
        return num * factorial(num - 1);
      }
    }
  
    alert(`Faktoriál čísla ${n} je: ${factorial(n)}`);
  }
  

  function removeDuplicates() {
    let inputArray = prompt("Zadejte prvky pole oddělené čárkami:").split(",");
  
    function removeDuplicatesFromArray(arr) {
      return Array.from(new Set(arr));
    }
  
    alert(`Pole bez duplicitních prvků: ${removeDuplicatesFromArray(inputArray)}`);
  }
  

  function checkPrimeNumber() {
    let num = prompt("Zadejte číslo pro ověření, zda je prvočíslo:");
    num = parseInt(num);
  
    function isPrime(num) {
      for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
      return num !== 1;
    }
  
    alert(`Číslo ${num} ${isPrime(num) ? "je" : "není"} prvočíslo.`);
  }

  
  function convertCelsiusToFahrenheit() {
    let celsius = prompt("Zadejte teplotu ve stupních Celsia:");
    celsius = parseFloat(celsius);
  
    function celsiusToFahrenheit(celsius) {
      return celsius * 9/5 + 32;
    }
  
    alert(`Teplota ve stupních Fahrenheit: ${celsiusToFahrenheit(celsius)}`);
  }

  
  function reverseString() {
    let str = prompt("Zadejte řetězec k reverzování:");
  
    function reverseString(str) {
      return str.split('').reverse().join('');
    }
  
    alert(`Reverzovaný řetězec: ${reverseString(str)}`);
  }

  
  function filterEvenNumbers() {
    let inputArray = prompt("Zadejte prvky pole oddělené čárkami:").split(",").map(Number);
  
    function filterEvenNumbersFromArray(arr) {
      return arr.filter(num => num % 2 === 0);
    }
  
    alert(`Sudá čísla v poli: ${filterEvenNumbersFromArray(inputArray)}`);
  }

  
  function concatenateArrays() {
    let array1 = prompt("Zadejte prvky prvního pole oddělené čárkami:").split(",");
    let array2 = prompt("Zadejte prvky druhého pole oddělené čárkami:").split(",");
  
    function concatenateArrays(arr1, arr2) {
      return arr1.concat(arr2);
    }
  
    alert(`Spojené pole: ${concatenateArrays(array1, array2)}`);
  }
  

  function generateRandomNumbersWhile() {
    let userInput = 0;
  
    while (userInput >= 5) {
      userInput = prompt("Zadejte číslo menší než 5:");
      userInput = parseInt(userInput);
  
      if (userInput < 5) {
        alert(`Zadal(a) jste číslo menší než 5. Konec programu.`);
      } else {
        alert(`Zadal(a) jste číslo 5 nebo větší. Zkuste to znovu.`);
      }
    }
  }
  

  
  function findMax() {
    let inputArray = prompt("Zadejte prvky pole oddělené čárkami:").split(",").map(Number);
  
    function findMax(arr) {
      return Math.max(...arr);
    }
  
    alert(`Největší prvek v poli: ${findMax(inputArray)}`);
  }
  