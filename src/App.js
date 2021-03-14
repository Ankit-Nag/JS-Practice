import "./styles.css";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState();
  // const [input2, setInput2] = useState();
  // const [input3, setInput3] = useState();

  // function oddOrEven() {
  //   if (input % 2 === 0) {
  //     setResult("Even");
  //   } else {
  //     setResult("Odd");
  //   }
  // }

  // function maxMin() {
  //   if (input > input2) {
  //     setResult("Max= " + input + " Min= " + input2);
  //   } else if (input2 > input) {
  //     setResult("Max= " + input2 + " Min= " + input);
  //   } else {
  //     setResult("Both are equal");
  //   }
  // }

  // function maxOfThree() {
  //   if (input > input2) {
  //     input > input3
  //       ? setResult("Max: " + input)
  //       : setResult("Max: " + input3);
  //   } else if (input2 > input) {
  //     input2 > input3
  //       ? setResult("Max: " + input2)
  //       : setResult("Max: " + input3);
  //   }
  // }

  // function minOfThree() {
  //   if (input < input2) {
  //     input < input3
  //       ? setResult("Min: " + input)
  //       : setResult("Min: " + input3);
  //   } else if (input2 < input) {
  //     input2 < input3
  //       ? setResult("Max: " + input2)
  //       : setResult("Max: " + input3);
  //   }
  // }

  // function daysInAMonth() {
  //   console.log(parseInt(input[(4, 6)]));
  //   let month = parseInt(input[(4, 6)]);
  //   let month31 = [1, 3, 5, 7, 8, 10, 12];
  //   if (month31.includes(month)) {
  //     setResult("This month has 31 days");
  //   } else if (month === 2) {
  //     setResult(
  //       "This month has 29 days in leap years or 28 days in non-leap years"
  //     );
  //   } else {
  //     setResult("This month has 30 days");
  //   }
  // }

  // function starPattern() {
  //   let output = "";
  //   for (let i = 0; i < parseInt(input); i++) {
  //     for (let j = 0; j < i + 1; j++) {
  //       output += "*";
  //     }
  //     output += "\n";
  //   }
  //   console.log(output);
  // }

  // function factorial(x) {
  //   if (parseInt(x) === 0) {
  //     return 1;
  //   } else {
  //     return parseInt(x) * factorial(parseInt(x) - 1);
  //   }
  // }

  return (
    <div className="App">
      <h1>Javascript Basics</h1>
      <h2>Javascript practice exercises for neogcamp</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input"
      />
      <p>{result}</p>
      <button>Show result </button>
    </div>
  );
}
