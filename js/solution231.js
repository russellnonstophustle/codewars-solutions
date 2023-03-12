// Geometry Basics: Distance between points in 2D
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.

function distanceBetweenPoints(a, b) {
    //   d=√((x2 – x1)² + (y2 – y1)²)
      return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2)
    }