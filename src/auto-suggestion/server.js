const data = [
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
  { id: 3, name: "Three" },
  { id: 4, name: "Four" },
  { id: 5, name: "Five" },
  { id: 6, name: "Six" },
  { id: 7, name: "Seven" },
  { id: 8, name: "Eight" },
  { id: 9, name: "Nine" },
  { id: 10, name: "Ten" },
];

export const fetchSuggestions = () => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.floor(Math.random() * 10) > 5;
    setTimeout(() => {
      if (isSuccess) {
        resolve(data);
      } else {
        reject("Something went wrong");
      }
    }, 1000);
  });
};
