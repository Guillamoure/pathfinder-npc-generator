import { randomFromList } from "./functions";
export const statSpread = (style, ancestry) => {
  let randomAbilityChoice = [
    "basicArray",
    "heroicArray",
    "3d6",
    "4d6lowest",
    "heroic",
    "d20",
  ];
  let choice = randomFromList(randomAbilityChoice);
  let array = abilities(choice);
  console.log(choice, array);
  return array;
};

let abilities = (choice) => {
  let d6 = () => Math.ceil(Math.random() * 6);
  if (choice === "basicArray") {
    return [13, 12, 11, 10, 9, 8];
  } else if (choice === "heroicArray") {
    return [15, 14, 13, 12, 10, 8];
  } else if (choice === "3d6") {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(d6() + d6() + d6());
    }
    return arr;
  } else if (choice === "4d6lowest") {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      let arr2 = [];
      arr2.push(d6());
      arr2.push(d6());
      arr2.push(d6());
      arr2.push(d6());
      arr2.sort();
      arr.shift();
      arr.push(arr2[0] + arr2[1] + arr2[2]);
    }
    return arr;
  } else if (choice === "heroic") {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(d6() + d6() + 6);
    }
    return arr;
  } else if (choice === "d20") {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(Math.ceil(Math.random() * 20));
    }
    return arr;
  }
};
