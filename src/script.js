/* Minimize HTML and CSS editors, you don't need them */
/* Comments pending */
/*
	Documentation for next exercises:
	https://www.youtube.com/watch?v=ikwNrFvnL3g
	
	https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise
	https://codepen.io/IbeVanmeenen/pen/vZzgvg
*/

var xoff1 = 0;
var xoff2 = 0;

var inc = 0.01;
var start = 0;

// Make it fullscreen
var maxWidth = window.innerWidth,	
	 maxHeight = window.innerHeight;

// Basic configuration for canvas
function setup(){
	createCanvas(maxWidth,maxHeight); /* Draw a canvas of 400px width and 400px height */
}

// "draw()" function is executing 60 times per second, here is where animation happens
// You have to create it frame by frame
function draw(){
	background(28); /* Clean canvas by drawing dark gray background */
	
	//Change x position completely random
	//var x = random(width);
	
	//Change x position with Perlin Noise randomness, smooth
	//var x = noise(xoff) * width;
	//var x = map(noise(xoff1), 0, 1, 0, width);
	//var y = map(noise(xoff2), 0, 1, 0, height);
	//xoff1 += 0.015;
	//xoff2 += 0.008;
	
	//Draw the noise wave
		// Style attributes
		stroke(255); /* Set wave color, values from 0 to 255, RGB */
		noFill();  /* Don't fill the shape created */
	
		// Start drawing shape
		beginShape(); /* Declare where the shape begins */
		xoff2 = start; /* Set the initial value of the wave */
	
	for (var x = 0; x < width; x++){
		//var y = random(height);
		//var y = sin(xoff2) * height/2 + height/2; /* Sin wave */
		//var y = noise(xoff2) * height; /* Perlin noise wave */
		
		// Sin wave with Perlin noise
		var n = map(noise(xoff2), 0, 1, -75, 75); /* Calculate displacement for path, in this case displacement will be random */
		var s = map(sin(xoff2), -1, 1, 0, height); /* Calculate general wave path, in this case is the sin */
		
		var y = n + s; 
		
		vertex(x, y);
		
		xoff2 += inc;
		if(x == width / 2){
			ellipse(x, y, 24,24);
		}
	}
	endShape();
	
	start += inc;
}