const data = [
  {
    day: "01-01-2016",
    balance: 0,
    change: 0
  },
  {
    day: "01-02-2016",
    balance: -2000,
    change: -2000
  },
  {
    day: "01-03-2016",
    balance: 6000,
    change: 8000
  },
  {
    day: "01-04-2016",
    balance: 3500,
    change: -2500
  },
  {
    day: "01-05-2016",
    balance: 25000,
    change: 21500
  },
  {
    day: "01-06-2016",
    balance: 38000,
    change: 16500
  },
  {
    day: "01-07-2016",
    balance: 17550,
    change: -20450
  },
  {
    day: "01-08-2016",
    balance: 16500,
    change: -1050
  },
  {
    day: "01-09-2016",
    balance: 16500,
    change: 0
  },
  {
    day: "01-10-2016",
    balance: 28000,
    change: 11500
  },
  {
    day: "01-11-2016",
    balance: 32000,
    change: 4000
  },
  {
    day: "01-12-2016",
    balance: 27500,
    change: -4500
  }
];

/**
 * Nieco później omówimy, czym jest Promise
 */
export default new Promise(resolve => {
  setTimeout(() => {
    resolve(data);
  }, Math.floor(Math.random() * 2000 + 3000));
});
