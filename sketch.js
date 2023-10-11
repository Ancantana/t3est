let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth / 2, windowHeight);
  capture.hide();
}

function draw() {
  background(220);

  // Display the camera feed on the left side
  image(capture, 0, 0, windowWidth / 2, windowHeight);
  // You can add more drawing or interaction code here on the right side.
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth / 2, windowHeight);
}

