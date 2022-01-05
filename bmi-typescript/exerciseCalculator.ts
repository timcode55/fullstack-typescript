interface ExerciseFields {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: any;
}

const parseArgs = (args: Array<number | string>): ExerciseFields => {
  if (args.length < 4) throw new Error('Not enough arguments');
  console.log(args.slice(2), 'ARGS');
  const array = args.slice(2);
  const training = array.filter((item) => {
    return item !== '0';
  });
  const average = array.reduce((acc, val) => {
    return Number(acc) + Number(val);
  });
  const final = Number(average) / training.length;

  return {
    periodLength: Number(args.length - 3),
    trainingDays: Number(training.length),
    success: true,
    rating: Number(args[2]),
    ratingDescription: 'not bad',
    target: Number(args[2]),
    average: Number(final)
  };
};

try {
  const argsArray = parseArgs(process.argv);
  console.log(argsArray, 'ARGSARRAY');
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
