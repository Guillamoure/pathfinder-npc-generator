export const randomFromList = (list) => {
  let length = list.length;
  let rand = Math.floor(Math.random() * length);
  return list[rand];
};

export const pluser = (num) => {
  return num > -1 ? `+${num}` : `${num}`;
};
