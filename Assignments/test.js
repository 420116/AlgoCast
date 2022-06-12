const sendCall = () => {
  let queue = [1, 2, 3, 4, 5];
  let results = [];
  const Q1 = taskSchedule(queue.pop()).then((res) => {
    results.push(res);
    return sendData(queue, results);
  });
  const Q2 = taskSchedule(queue.pop()).then((res) => {
    results.push(res);
    return sendData(queue, results);
  });
  //console.log(results)
  Promise.allSettled([Q1, Q2]).then((items) => {
    console.log(items);
  });
};

const sendData = async (queue, results) => {
  if (queue.length === 0) {
    return results;
  }
  let data = await taskSchedule(queue.pop());
  results.push(data);
  return sendData(queue, results);
};

const taskSchedule = async (id) => {
  console.log(`${id}-executed`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id * 100);
      console.log(`${id}--successful`);
    }, id * 1000);
  });
};

sendCall();
