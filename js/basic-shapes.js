/**
 * Creates a triangle using an svg path element.
 * @param {string} id 
 * @param {SVGElement} parentElement 
 */
function createSVGTriangle(id, parentElement) {
  // TODO: Create a triangle using a svg path element and give the opposing side a curve, just like in previous assignments.
  // Note: See the createSVGSquare function for an example, and of course the previous repo.
  const path = createSVGElement('path');

  path.setAttribute('id', id);
  path.setAttribute('stroke', 'red');
  path.setAttribute('stroke-width', 10);
  path.setAttribute('fill', 'transparent');
  path.setAttribute('d', 'M 200 50 L 300 250 Q 200 200 100 250 Z');

  path.addEventListener('mouseenter', function() { 
    this.setAttribute('class', 'triangle-rotate');
  });

  path.addEventListener('mouseout', function() { 
    this.removeAttribute('class');
  });

  parentElement.appendChild(path);
}

/**
 * Creates a circle using an svg path element.
 * @param {string} id 
 * @param {SVGElement} parentElement 
 */
function createSVGCircle(id, parentElement) {
  // TODO: Create a circle using a svg path element, just like in previous assignments.
  // Note: See the createSVGSquare function for an example, and of course the previous repo.
  const path = createSVGElement('path');

  path.setAttribute('id', id);
  path.setAttribute('stroke', 'yellow');
  path.setAttribute('stroke-width', 10);
  path.setAttribute('fill', 'transparent');
  path.setAttribute('d', 'M 200 50 A 100 100 0 0 0 200 250 A 100 100 0 0 0 200 50');

  parentElement.appendChild(path);
}

/**
 * Handles the change color button click
 * @param {MouseEvent} event 
 */
function handleChangeColorsClick(_event) {
  const colors = ['blue', 'red', 'yellow'];
  const getRandomColor = function() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

   // TODO: change the colors of each element each time this handler fires
   const square = getElementById('square');
   const triangle = getElementById('triangle');
   const circle = getElementById('circle');

  square.setAttribute('stroke', getRandomColor());
  triangle.setAttribute('stroke', getRandomColor());
  circle.setAttribute('stroke', getRandomColor());
}

/**
 * Handle the rotate triangle button click
 * @param {MouseEvent} event
 */
function handleRotateTriangle(_event) {
  debugger;
  const triangle = getElementById('triangle');
  const transform = triangle.getAttribute('transform');

  if(!!transform) {
    const currentDegrees = parseInt(transform.replace('rotate(', '').replace(')', ''));
    const newDegrees = currentDegrees + 45;

    triangle.setAttribute('transform', `rotate(${newDegrees})`)
  }
  else {
    triangle.setAttribute('transform', 'rotate(45)')
  }
}

/**
 * Creates a square using an svg polygon element.
 * @param {string} id 
 * @param {SVGElement} parentElement 
 */
function createSVGSquare(id, parentElement) {
  // create a polygon element.
  const polygon = createSVGElement('polygon');

  // set the attributes we want with the native setAttribute function
  polygon.setAttribute('id', id);
  polygon.setAttribute('stroke', '#294899');
  polygon.setAttribute('stroke-width', '10');
  polygon.setAttribute('fill', 'transparent');
  polygon.setAttribute('points', '100 50,100 250,300 250,300 50');

  // add the polygon to the svg element as a child
  parentElement.appendChild(polygon);
}


//###### readonly ######

/**
 * Creates an svg element with tagName. 
 * The svg namespace is needed or else the browser will create an unknown HTML element.
 * 
 * @param {string} tagName 
 * @returns 
 */
function createSVGElement(tagName) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', tagName);

  return element;
}

/**
 * Try and find a DOM element by id.
 * @param {string} id without the prefix #
 * @returns DOM element if it can be found
 */
function getElementById(id) {
  const element = document.querySelector(`#${id}`);

  return element;
}

// get our svg element by id
const svgBasicShapesElement = getElementById('basic-shapes');
// create the square
createSVGSquare('square', svgBasicShapesElement)
// create the circle
createSVGCircle('circle', svgBasicShapesElement)
// create the triangle
createSVGTriangle('triangle', svgBasicShapesElement)

//###### end readonly ######