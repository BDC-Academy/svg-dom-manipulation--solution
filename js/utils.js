/**
 * Creates an svg svg element and sets its id, width and height.
 * @param {string} id 
 * @returns the svg element
 */
 function createSVGSVGElement(id) {
  const rootElement = getElementById('root');
  const svgElement = createSVGElement('svg');

  svgElement.setAttribute('id', id);
  svgElement.setAttribute('width', 400);
  svgElement.setAttribute('height', 400);
  rootElement.appendChild(svgElement);

  return svgElement;
}


// Add an svg element to the DOM where we can add our star shape to
// const svgElement = createSVGSVGElement('star');