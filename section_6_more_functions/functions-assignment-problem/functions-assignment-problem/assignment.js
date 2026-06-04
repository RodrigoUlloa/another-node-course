const phrase = "Hi";
const name = "ana";

const sayHello = (phrase = "Hi", name) => {
  console.log(phrase + name);
};

sayHello("ana");

const greet = () => console.log("Hi, Ana");

const sayHelloReturn = (phrase = "Hi", name) => phrase + name;

const checkInput = (callback, ...strings) => {
  const allValid = strings.every((str) => str !== "");
  if (allValid) {
    callback();
  }
};

