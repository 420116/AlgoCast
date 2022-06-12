const checkObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    console.log(false);
    return false;
  }
  console.log(Object.keys(obj1));
  let arr = Object.keys(obj1);
  for (let i = 0; i < arr.length; i++) {
    //string,number
    switch (typeof obj1[arr[i]]) {
      case "string":
        if (obj1[arr[i]] !== obj2[arr[i]]) {
          console.log(false);
          return false;
        }
        break;
      case "number":
        if (obj1[arr[i]] !== obj2[arr[i]]) {
          console.log(false);
          return false;
        }
        break;
      case "object":
        return checkObjects(obj1[arr[i]], obj2[arr[i]]);
        break;
    }
  }

  console.log(true);

  return;
};

const obj1 = {
  fruit: "apple",
  nutrients: {
    energy: "255kJ",
    name: "calcium",
    weight: [12, 45, 10],
  },
};

const obj2 = {
  fruit: "apple",
  nutrients: {
    energy: "255kJ",
    weight: [12, 45, 10],
    name: "calcium",
  },
};

checkObjects([1, 2], [1, 2]);
