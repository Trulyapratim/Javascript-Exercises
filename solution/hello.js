import { hello } from "./hello-world.js";

function greeting(){
  return hello();
}
let greet = greeting();
console.log(greet); // Hello! World