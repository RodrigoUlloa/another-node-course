class Course {
  #price;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value > 0) {
      this.#price = value;
    }
  }

  getLengthPriceRatio() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}h, Price: ${this.price}`
    );
  }
}

// 1. Instantiate two courses and output them to the console
const course1 = new Course('JavaScript - The Complete Guide', 52, 49.99);
const course2 = new Course('Node.js - From Beginner to Advanced', 38, 39.99);

console.log(course1);
console.log(course2);

// 2. Call the new methods and output the results
console.log(course1.getLengthPriceRatio());
console.log(course2.getLengthPriceRatio());
course1.printSummary();
course2.printSummary();

// 3. Specialized subclasses
class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing course:', this.title);
  }
}

const angularCourse = new PracticalCourse(
  'Angular - The Complete Guide',
  34,
  49.99,
  10
);
const reactCourse = new TheoreticalCourse(
  'React - The Complete Guide',
  48,
  29.99
);

console.log(angularCourse);
console.log(angularCourse.numOfExercises);
console.log(angularCourse.getLengthPriceRatio());
angularCourse.printSummary();

reactCourse.publish();
console.log(reactCourse.price);
reactCourse.printSummary();
