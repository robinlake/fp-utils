const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
  return acc.concat(fn(item, index, arr));
}, []);
