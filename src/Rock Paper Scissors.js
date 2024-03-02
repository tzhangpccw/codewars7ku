// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/typescript

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const function rps(p1, p2) => {
const map={
  "scissors" :"paper",
  "rock":"scissors",
  'paper': 'rock'
}

return p1=== p2 ? 'Draw!' :
p2 === map[p1] ? "Player 1 won!" :
"Player 2 won!"
  
};

export function rps(p1: string, p2: string): string{
  const map: { [key: string]: string }={
  "scissors" :"paper",
  "rock":"scissors",
  'paper': 'rock'
}

// if(p1=== p2) return 'Draw!'
// if(p2 === map[p1]) return "Player 1 won!"
// return "Player 2 won!"
  return p1=== p2 ? 'Draw!' :
p2 === map[p1] ? "Player 1 won!" :
"Player 2 won!"
}
