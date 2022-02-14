const asyncAction = () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100) + 1;

    setTimeout(() => {
      if (random <= 50) {
        resolve({
          value: random,
          status: "OK"
        });
      } else {
        reject({
          value: random,
          status: "ERROR",
          errorMsg: "Value is greater then 50"
        });
      }
    }, 1250);
  });
};

/**
 * Tutaj wpisz swój kod
 */

