# p5.js Template
MIDTERM
WEEK3
1. Enhanced Slicing System
The heart of my project is a slicing system that lets players cut enemies in half, creating dynamic and engaging gameplay. Each enemy can be sliced twice, and to manage this, I implemented a splited variable that tracks how many times an enemy has been cut. When an enemy is sliced, it is removed from the array, and two smaller rectangular pieces are added in its place, simulating the effect of being chopped. This way, the enemies can only be divided twice, which not only controls the number of objects on the screen but also ensures that the game runs smoothly without overloading the computer.

Implementation Details:

When an enemy is struck, the original enemy is split into two smaller parts, and both pieces inherit properties like position and rotation. This gives the illusion of a seamless slicing action.
I use the splited variable to prevent enemies from being sliced indefinitely. Once an enemy has been split twice, it can’t be divided further.
2. Random Rotation Effect
To add more realism and chaos to the slicing effect, I introduced a random rotation for the sliced parts. This was achieved using a variable r that assigns a random rotation to each piece, making every slice visually unique and unpredictable.

Design Choice:

The random rotation angle gives each piece a dynamic look, mimicking the unpredictable nature of real combat. It adds an element of chaos to the scene, enhancing the sense of action and violence.
The variability ensures that every playthrough feels different, with enemies falling and spinning in various ways.
3. Infinite Enemy Generation
To maintain the intensity and continuous action, I implemented a system where enemies are endlessly generated. When an enemy is sliced for the first time, a new enemy spawns at a random location on the screen. This keeps the game challenging and ensures that players are always engaged.

How It Works:

New enemies are generated only when an enemy is sliced for the first time (when splited is 0). This way, the battlefield is never empty, and the player is constantly surrounded by new threats.
This mechanic creates a relentless, never-ending fight, which mirrors the non-stop action and tension in Kill Bill.
4. Blood Splatter Effect
To fully capture the film’s signature aesthetic, I developed a blood splatter system that adds visual impact to each slice. Blood particles are generated whenever an enemy is cut, creating a scene that becomes increasingly chaotic and blood-soaked over time.

Details of the Blood System:

Blood particles are divided into two types: smaller droplets (stored in the blood array) and larger splatters (stored in the blood2 array). This variation adds depth and realism to the blood effects.
Each slice produces 30 small droplets and 10 large splatters. These particles are randomly distributed around the point of impact, using random() to create a natural and chaotic spread.
WEEK2

This week, I attempted to write code to slice a rectangular prism, but I encountered technical challenges and was unable to complete it. This project proved to be somewhat difficult for me, so I decided to adjust my goals and focus on something more manageable. Ultimately, I decided to develop game-like interaction about Kill Bill,where the player can use the WASD keys to control movement and press the spacebar to slice enemies, leaving behind blood splatters.

Currently, I have implemented the basic movement for both the player and enemies. First, I defined the initial position, size, speed, and other attributes for the player and enemies using objects, and I created movement effects by constantly updating these properties. The enemies are set to move randomly and bounce back upon hitting the screen boundaries, while the player moves based on WASD input and is also constrained by screen limits. Next week, I’ll continue to refine the game by adding blood splatters, an enemy disappearance effect, and enhancing the character's appearance. My plan is to generate an ellipse at the enemy's position using index when an enemy is defeated by a spacebar attack, simulating the blood splatter effect. Additionally, I’ll use the rotate function to add a rotation effect for the player’s sword-swinging action, making the movement more dynamic.

Blood Splatter Effect:

Generating Splatter: When an enemy is hit, multiple randomly sized circles with varying positions and transparencies will be generated at the enemy’s position to form a splatter effect.
Randomized Parameters: Using random(), I’ll adjust the position offset, radius, and color transparency of each splatter circle to simulate a realistic splattering effect.
Storing and Drawing Splatter: In the draw() function, I’ll loop through each splatter and render it. Splatter parameters will be stored in an array to add multiple splatters for different defeated enemies.
Enhancing Character Appearance and Sword-Swing Animation:

Character Details: I’ll use ellipse(), rect(), and other simple shapes to add more visual details to the player, such as a head and weapon.
Rotational Attack Effect: When the player attacks by pressing the spacebar, I’ll use rotate() to create a quick, slight rotation of the sword or arm, simulating a swinging motion.

WEEK1
Kill Bill
For this project, I have chosen Kill Bill, a film directed by Quentin Tarantino. The movie centers on The Bride, a former assassin who embarks on a quest for revenge against her ex-boss, Bill, and the assassins who betrayed her. The film is known for its fast-paced, action-packed sequences, stylized violence, and tributes to classic martial arts films. In my project, I will incorporate a minimalist visual design to capture the essence of the movie’s iconic style. The design will feature a black rectangle positioned at a quarter of the screen with a yellow background, symbolizing The Bride’s iconic yellow jumpsuit. The title “Kill Bill” will also be displayed prominently, staying true to the original movie's visual aesthetic.

The project will be interactive, responding to mouse clicks. When the user clicks the screen, the black rectangle and the text "Kill Bill" will be sliced at the click point, with a red blood trail left behind to emphasize the violent, fast-cutting action sequences typical of the film. This interactive element aims to replicate the visual intensity of the movie, where precision and violence play significant roles. I plan to experiment with how to translate the slashing motion and blood splatter seen in the movie’s fight sequences into dynamic, user-driven interactions. This will allow the user to engage with the project in a way that reflects the movie's energy and style, combining visual elements and responsive feedback to recreate the visceral experience of Kill Bill

