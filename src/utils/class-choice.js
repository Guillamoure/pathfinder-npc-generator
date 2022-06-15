import classes from "../data/classes/classes.json";

export const classChoice = (choice) => {
  let klass;
  if (choice === "combat") {
    klass = classes.fighter;
  }

  return klass;
};
