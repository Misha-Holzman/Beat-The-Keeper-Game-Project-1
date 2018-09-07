# MCHolzman-beatTheKeeper-Project-1
Penalty Shootout Arcade Game



Logic:

– 3 buttons that the user can press that will be the choices of where to kick the ball. The left, middle, or right. 

– each time a button is clicked, the goalie will randomally decide to dive to the left, stay in the middle, or dive right. 

– if the goalie chooses the same location as the user, the goalie saves the ball

– if the user chooses a location that the goalie does not choose, the user scores a point. 5 points to win the game.




The goalie will be a function that generates a random number from 1 to 3. 

That number must be compared to the number associated with each quadrent. Each time a button for a particular quadrent is hit, it generates its number and is compared to the number generated by the goalie function


a switch statement will be used:
possible combos:

U = User
G = Goalie
number = quadrent

U1 - G1 ––> Save
U2 – G1 ––> Goal
U3 – G1 ––> Goal
U1 – G2 ––> Goal
U2 – G2 ––> Save
U3 – G2 ––> Goal
U1 – G3 ––> Goal
U2 – G3 ––> Goal
U3 – G3 ––> Save


If it is a save, 1 is added to the score of the goalie
If it is a goal, 1 is added to the score of the user

If it is a goal, a banner shows up on the screen saying "GOAL!" for a few seconds and then game is continued.
If 5 goals are reached, screen and sound will signify a win. 





























