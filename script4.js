/**
 * Create function that takes in one argument that is passed through a conditional
 * statement with if, else ifs, and else. Return the result as an alert or
 * console.log. Test all of your conditions to make sure you can receive all
 * of your results back.
 */

function guessColor(choice) {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (choice == randomColor) {
    console.log(
      `It's a match! Your guess of ${choice} matched the random color.`
    );
  } else if (colors.includes(choice)) {
    console.log(
      `Close! You guessed ${choice}, but the random color was ${randomColor}.`,
    );
  } else {
    console.log('That color is not included in our list of colors 😱');
  }
}

guessColor('blue');
