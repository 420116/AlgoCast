const fn = async () => {
  const firstName = "Ashish";
  let lastName = await surname();
  console.log(firstName + " " + lastName);
};

const surname = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Baghel");
    }, 5000);
  });
};

fn();
// .then((result) => console.log(result));
