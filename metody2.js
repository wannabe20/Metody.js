// Metoda pro výpočet faktoriálu
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
  
  // Metoda pro generování náhodného čísla v určitém rozsahu
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Metoda pro odstranění duplicitních prvků z pole
  function removeDuplicatesFromArray(arr) {
    return Array.from(new Set(arr));
  }
  
  // Metoda pro zjištění, zda je číslo prvočíslo
  function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  // Metoda pro konverzi teploty z Celsius na Fahrenheit
  function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
  }
  
  // Metoda pro reverzování řetězce
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Metoda pro filtrování sudých čísel z pole
  function filterEvenNumbersFromArray(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // Metoda pro spojení dvou polí
  function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  // Metoda pro zjištění délky objektu (počet klíčů)
  function getObjectLength(obj) {
    return Object.keys(obj).length;
  }
  
  // Metoda pro vyhledání největšího prvku v poli
  function findMaxInArray(arr) {
    return Math.max(...arr);
  }
  
  // Metoda pro generování náhodných čísel, dokud uživatel nezadá číslo menší než 5
  function generateRandomNumbersWhile() {
    let userInput = 5;
    while (userInput >= 5) {
      userInput = prompt("Zadejte číslo menší než 5:");
      userInput = parseInt(userInput);
    }
  }
  