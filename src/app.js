// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 10;
const NEG_INF = -1000000;

function createPop(arrayOfNumbers, itemToSearch) {
  let currentIndex = NEG_INF;
  let check = false;

  function findElement() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (itemToSearch === arrayOfNumbers[i]) {
        currentIndex = i;
        check = true;
        break;
      } else {
        check = false;
      }
    }
  }
  findElement();

  return function () {
    if (check === true) {
      return `The item is present and is at index ${currentIndex}`;
    } else {
      return `The item is not present and is at index ${currentIndex}`;
    }
  };
}

  // Progression 2: add 3 variables: title, currIndex, check

  // Progression 3: create a function "searchForElement" 

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
                    // to return the desired output.
