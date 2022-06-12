var a = { 1: 1, 2: { 3: 23, 4: 34 }, 5: [1, 2, 3, 4] };

const copy = (obj, result) => {
  if (Object.keys(obj).length === 0) {
    return result;
  }

  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    switch (typeof obj[keys[i]]) {
      case "object":
        if (obj[keys[i]].length) {
          result[keys[i]] = copy(obj[keys[i]], []);
        } else {
          result[keys[i]] = copy(obj[keys[i]], {});
        }
        break;
      default:
        if (!result[keys[i]]) {
          result[keys[i]] = obj[keys[i]];
        }
        break;
    }
  }

  return result;
};

console.log(copy(a, {}));

// let state = {
//   initialState: {},
// };
