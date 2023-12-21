const engine = {
  valid_delivery: {
    out: {
      bowled: {
        // dismiss striker
        // add bowl in over
      },
      catch: {
        // dismiss striker
        // add bowl in over
      },
      lbw: {
        // dismiss striker
        // add bowl in over
      },
      runOut: {
        // dismiss the bats man (either striker or non striker)
        // add runs
        // add bowl in over
      },
      stumped: {
        // dismiss striker
        // add bowl in over
      },
      hitWicket: {
        // striker
        // non striker
      },
      ballHandledByBatsman: {
        // dismiss the bats man
      },
      obstructingFielding: {
        // dismiss the bats man
      },
      timeOut: {
        // dismiss the bats man
      },
      retiredHurt: {
        // dismiss the bats man
        // add bowl in over
      },
    },
    score: {
      //4s
      //6s
      //1s 2s 3s
      //0
    },
  },
  invalid_delivery: {
    noBall: {},
    wide: {
      // add 1 score in the teams total score
      // type leg or off
    },
    deadBall: {},
    freeHit: {},
    fullToss: {},
  },
  penalty: {},
};

// main() ball-scoring
// 	valid-delivery
// 		-valid-delivery condition
// 		-if free-hit-flag is set
// 			- free-hit-condition
// 			- unset free-hit-flag
// 		- bat-scoring condition
// 		- if wicket
// 			- normal-wicket-condition
// 	invalid-delivery
// 		- invalid-delivery condition

// fn bat-scoring()
// 	if boundry
// 		add 4 runs to scoreboard and stricker
// 	if six
// 		add 6 runs to scoreboard and stricker
// 	if single
// 		add 1 run to scoreboard and stricker
// 		rotate stricker and non-striker
// 	if double
// 		add 2 run to scoreboard and stricker
// 	if triple
// 		add 3 run to scoreboard and stricker
// 		rotate stricker and non-stricker

// fn normal-wicket-condition()
// 	-scoring
// 	-if wicket
// 		proceed to wicket-without-runout-condition

// fn normal-condition-with-runout-wicket()
// 	-scoring
// 	-if wicket
// 		run-out-wicket-condition

// fn wicket-counter()
// 	- add wicket counter
// 	- add a new player on playing two

// fn wicket-without-runout-condition()
// 	- wicket-counter
// 	if lbw
// 		do nothing

// 	if bowled-out
// 		do nothing

// 	if stumped-out
// 		do nothing

// fn run-out-wicket-condition()
// 	- wicket-counter
// 	- replace the run-out player with incoming player (stricker end/ non-stricker end)

// fn valid-delivery()
// 	- add ball counter

// fn invalid-delivery()
// 	- add 1 run to scoreboard
// 	if no-ball
// 		- no-ball-condition
// 	if wide-ball
// 		- wide-ball-condition

// fn no-ball-condition()
// 	- add 1 run to scoreboard
// 	- proceed the -ball-score-condition
// 	- run-out-wicket-condition
// 	- add free-hit flag

// fn wide-ball()
// 	- add 1 run to scoreboard

// fn free-hit-condition()
// 	- bat-scoring condition
// 	- run-out-wicket-condition

// fn over-complete()
// 	if x balls counter is completed
// 		- increase the over counter
// 		- rotate stricker and non-stricker
// 		- change bowler
// 		- unset all flags
