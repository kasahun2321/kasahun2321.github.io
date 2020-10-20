/*eslint-disable*/
const alert = console.log;

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch (err) {
  if (err instanceof ValidationError) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    // alert(err.stack); // a list of nested calls with line numbers for each
  } else {
    /*...*/
  }
}