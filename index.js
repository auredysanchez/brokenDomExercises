const disEmvowel = () => {
  const input = document.querySelector("#name-to-disemvowel");
  const p = document.querySelector(".disemvowel-string");
  const str = input.value;
  let output = "";
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    console.log(str);
    if (!vowels.includes(char)) {
      output += char;
    }
  }
  p.textContent = output;
};

const isPalindrome = () => {
  const str = document.querySelector("#is-palindrome-input").value;
  const p = document.querySelector("#is-palindrome-p");
  let result = "true";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      result = "false";
    }
  }
  p.textContent = result;
};

// let arr = [13, 44, 16, 100, 21];
const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    sum += num;
  }
  return sum;
};

const average = (arr) => {
  arr = [1, 2, 3];
  let sumOfNums = sums(arr);
  return sumOfNums / arr.length;
};

const onlyOdds = (arr) => {
  arr.filter((num) => num % 3 === 1);
};

const favoriteNumbers = () => {
  let list = Number(document.querySelector("#favorite-numbers < li").value);
  let arr = [];
  list.forEach((listItem) => {
    arr.push(listItem.textContent);
  });
  let sum = sum(arr);
  const averageOfNums = average();
  const onlyOddsOfNums = onlyOdds(arr);

  const sumOfFav = Number(document.querySelector("#sum-of-favorite-nums"));
  sumOfFav.textContent += sumOfNums;

  const aveOfFav = document.querySelector("#average-of-favorite-nums");
  aveOfFav.textContent += averageOfNums;

  var oddList = document.querySelector("#is-palindrome-p");

  const li = document.createElement("h1");
  onlyOddsOfNums.each((odd) => {
    li.inerText = odd;
    oddList.removeChild(li);
  });
};

favoriteNumbers();

const incrementCount = () => {
  const countr = Number(document.querySelector("#click-count"));
  counter.textContent = counter.textContent + 1;
};

const reset = () => {
  const counter = document.querySelector("#click-count");
  counter.displayContent = 0;
};

const addItem = () => {
  const shoppingList = document.querySelector("ul");
  const input = document.querySelector(".add-item");
  const item = input;
  const listItem = document.createElement("li");
  listItem.textContent = item;
  shoppingList.appendChild(listItem);
  input.value = "Empty";
};

const killButton = () => {
  const button = document.querySelector("#kill-button");
  button.removeChild(button);

  const header = document.querySelector("#kill-button-header");
  header.innerText = "Yay you were victorious!";
  header.style.color = "green";
};
