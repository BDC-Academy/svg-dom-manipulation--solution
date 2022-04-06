// Disclaimer: I am not a mathematician :)

// Inner radius of the star points, excluding stroke width, endings and caps
const innerRadius = 40;
// Outer radius of the star points, excluding stroke width, endings and caps
const outerRadius = 100;
// Number of star points
const starPoints = 5;
// The center of the star in px units is equal to the outerRadius
const center = outerRadius;
// MARCELTODO: find out why pi / starpoints = angle
const angle = Math.PI / starPoints;

// Constants we use to center the star in the svg a bit
const translateX = 100;
const translateY = 40;

//###### read-only ######

/**
 * We start with two circles that define the inner and outer radius of our star.
 * If you would set the inner and outer radius to the same number, 
 * the star would effectively be a circle, approaching a perfect circle the more points you add.
 * @param {SVGElement} parentElement 
 */
function createInnerAndOuterRadius(parentElement) {
  const innerCircle = createSVGElement('circle');
  innerCircle.setAttribute('stroke', 'red');
  innerCircle.setAttribute('fill', 'transparent');
  innerCircle.setAttribute('r', innerRadius);
  innerCircle.setAttribute('cx', center + translateX);
  innerCircle.setAttribute('cy', center + translateY);
  parentElement.appendChild(innerCircle);

  const outerCircle = createSVGElement('circle');
  outerCircle.setAttribute('stroke', 'red');
  outerCircle.setAttribute('fill', 'transparent');
  outerCircle.setAttribute('r', outerRadius);
  outerCircle.setAttribute('cx', center + translateX);
  outerCircle.setAttribute('cy', center + translateY);
  parentElement.appendChild(outerCircle);
}

/**
 * Create a star shape with a polygon element,
 * by calculating what the points should be.
 *
 * - a fixed inner and outer radius 
 * - number of starpoints
 * - calculated center of the star based on inner and outer radius
 * - calculated angle of each point based on the number of starpoints
 * @param {number} id 
 * @param {SVGElement} parentElement 
 */
function createSVGStar(id, parentElement) {
  // create polygon element
  const polygon = createSVGElement('polygon');
  polygon.setAttribute('id', id);
  polygon.setAttribute('stroke', 'gold');
  polygon.setAttribute('stroke-width', '1');
  polygon.setAttribute('fill', 'transparent');
  polygon.setAttribute('stroke-linejoin', 'bevel')

  const points = [];

  // calculate two points for each startPoint (2 * starPoints)
  //because we have an inner and outer circle/point (count the star points to be sure ;))
  for (var i = 0; i < starPoints * 2; i++) {
    // start at the top outer point. Even numbers i are outer and odd numbers are inner
    var radius = i % 2 === 0 ? outerRadius : innerRadius;
    // this is where it gets all mathy. 
    //MARCELTODO: We calculate the x coordinate of the starpoint by ...
    points.push(center + radius * Math.sin(i * angle));
    //MARCELTODO: We calculate the y coordinate of the starpoint by ...
    points.push(center - radius * Math.cos(i * angle));
  }

  polygon.setAttribute('points', points);

  // To move our star to the center of the svg without messing with its calcularted points
  // We wrap a g container element around it and transform it.
  const g = createSVGElement('g');
  g.setAttribute('transform', `translate(${translateX}, ${translateY})`);

  g.appendChild(polygon);
  parentElement.appendChild(g);
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

const svgStarElement = getElementById('star');

createSVGStar('star-polygon', svgStarElement);
createInnerAndOuterRadius(svgStarElement);

//###### end read-only ######