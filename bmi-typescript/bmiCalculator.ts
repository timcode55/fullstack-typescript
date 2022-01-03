interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

const bmiCalculator = (a: number, b: number, printText: string) => {
  console.log(printText, b / (a / 100) ** 2);
  // console.log(79 / (1.85 * 1.85));
};

try {
  const { value1, value2 } = parseArguments(process.argv);
  const formula = value2 / (value1 / 100) ** 2;
  let string = "";
  if (formula < 18.5) {
    string = "Underweight";
  } else if (formula > 24.9) {
    string = "Overweight";
  } else {
    string = "Normal (healthy weight)";
  }
  bmiCalculator(value1, value2, `${string}`);
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
