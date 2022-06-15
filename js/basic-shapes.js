/**
 * Creates a triangle using an svg path element.
 * @param {string} id 
 * @param {SVGElement} parentElement 
 */
function createSVGTriangle(id, parentElement) {
  // TODO: 1.1 Create a triangle using a svg path element and give the opposing side a curve, just like in previous assignments.
  // Add the new path element to the parent element.
  // Note: See the createSVGSquare function for an example, and of course the previous repo.
  const path = createSVGElement('path');

  path.setAttribute('id', id);
  path.setAttribute('stroke', 'red');
  path.setAttribute('stroke-width', 10);
  path.setAttribute('fill', 'transparent');
  path.setAttribute('d', 'M 200 50 L 300 250 Q 200 200 100 250 Z');

  parentElement.appendChild(path);

  // TODO: 2.1 Add an event listener mousenter and mouseout to make the triangle rotate
  // Tip: you can find some keyframes in the style.css that handle the rotating motion, just add and remove the class
  path.addEventListener('mouseenter', function() { 
    this.setAttribute('class', 'triangle-rotate');
  });

  path.addEventListener('mouseout', function() { 
    this.removeAttribute('class');
  });
}

/**
 * Creates a circle using an svg path element.
 * @param {string} id 
 * @param {SVGElement} parentElement 
 */
function createSVGCircle(id, parentElement) {
  // TODO: 1.2 Create a circle using a svg path element and add it to the parent element.
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

   // TODO: 1.3 Get each path element and change the stroke color of each shape each time this handler fires
   const square = getElementById('square');
   const triangle = getElementById('triangle');
   const circle = getElementById('circle');

  square.setAttribute('stroke', getRandomColor());
  triangle.setAttribute('stroke', getRandomColor());
  circle.setAttribute('stroke', getRandomColor());
}

//###### readonly ######

/**
 * Creates a square using an svg path element.
 * @param {string} id 
 * @param {SVGElement} parentElement 
 */
function createSVGSquare(id, parentElement) {
  // create a path element.
  const path = createSVGElement('path');

  // set the attributes we want with the native setAttribute function
  path.setAttribute('id', id);
  path.setAttribute('stroke', '#294899');
  path.setAttribute('stroke-width', '10');
  path.setAttribute('fill', 'transparent');
  path.setAttribute('d', 'M 100 50 L 100 250 L 300 250 L 300 50 Z');

  // add the polygon to the svg element as a child
  parentElement.appendChild(path);
}

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