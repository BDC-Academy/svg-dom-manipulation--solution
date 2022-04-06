
/**
 * Creates an svg circle element of random size and position and returns it.
 * Radius between 4 and 12
 * Coordinate x between 25 and 375
 * Coordinate y between 25 and 375 
 * @returns svg circle element
 */
function createBubble() {
  // const containerWidth = parentElement.clientWidth; // 400
  // const containerHeight = parentElement.clientHeight; // 400
  // Define fixed array of possible radius and x and y coordinates
  const radius = [4, 5, 6, 7, 8, 9, 10, 11, 12];
  const coordinates = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];

  // Calculate random radius and position
  const r = radius[Math.floor(Math.random() * radius.length)];
  const cx = coordinates[Math.floor(Math.random() * coordinates.length)];
  const cy = coordinates[Math.floor(Math.random() * coordinates.length)];

  // TODO: Create an svg circle element and set attributes stroke, fill, radius and position
  const bubble = createSVGElement('circle');
  bubble.setAttribute('class', 'bubble');
  // things like stroke can also be put on the g element. If child elements will inherit or override
  // bubble.setAttribute('stroke', 'blue');
  // bubble.setAttribute('stroke-width', '1');
  bubble.setAttribute('fill', 'transparent');
  bubble.setAttribute('r', r);
  bubble.setAttribute('cx', cx);
  bubble.setAttribute('cy', cy);

  const text = createSVGElement('text');
  text.setAttribute('fill', '#000');
  text.setAttribute('width', r * 2);
  text.setAttribute('height', r * 2);
  text.textContent = `${r}`;
  text.setAttribute('x', cx);
  text.setAttribute('y', cy);
  text.setAttribute('font-size', 10);

  // center the text in the circle
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('alignment-baseline', 'central');

  const bubbleContainer = createSVGElement('g');
  bubbleContainer.setAttribute('stroke', 'blue');
  bubbleContainer.setAttribute('stroke-width', '1');
  bubbleContainer.appendChild(bubble);
  bubbleContainer.appendChild(text);

  //TODO: add an event listener to the bubble that listens to the click event.
  //When the bubble is clicked, turn it's stroke to red if it isn't already.
  //If the stroke is already red, remove the circle element from the DOM.
  bubbleContainer.addEventListener('click', function (_event) {
    const stroke = this.getAttribute('stroke');

    // if(stroke === 'red') this.remove();
    if(stroke === 'red') this.remove();
    else this.setAttribute('stroke', 'red');
  });

  return bubbleContainer;
}

let intervalId = 0;
let intervalId2 = 0;
function createSquareBubble() {
  const width = [4, 5, 6, 7, 8, 9, 10, 11, 12];
  const coordinates = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];

  // Calculate random width and position
  const wh = width[Math.floor(Math.random() * width.length)];
  const x = coordinates[Math.floor(Math.random() * coordinates.length)];
  const y = coordinates[Math.floor(Math.random() * coordinates.length)];

  // TODO: Create an svg circle element and set attributes stroke, fill, radius and position
  const bubble = createSVGElement('rect');
  bubble.setAttribute('class', 'bubble');
  bubble.setAttribute('stroke', 'green');
  bubble.setAttribute('stroke-width', '1');
  bubble.setAttribute('fill', 'transparent');
  bubble.setAttribute('width', wh);
  bubble.setAttribute('height', wh);
  bubble.setAttribute('x', x);
  bubble.setAttribute('y', y);

  bubble.addEventListener('click', function (_event) {
    // clear intervals when square is succesfully clicked
    clearInterval(intervalId);
    clearInterval(intervalId2);
    
    this.setAttribute('fill', 'green');
  });

  return bubble;
}

// TODO: Use an interval to create random bubbles and add them to the svg container.
// TODO: Use a timeout (inside the interval) to remove the created bubble after a random number of milliseconds IF the stroke is still blue.
// Tip: const randomNumber = Math.random() * (2000 - 1200) + 1200; 
intervalId = setInterval(() => {
  const randomNumber = Math.random() * (2000 - 1200) + 1200;
  const bubbleElement = createBubble();
  svgBubbleElement.appendChild(bubbleElement);
  setTimeout(() => {
    if (bubbleElement.getAttribute('stroke') === 'blue') {
      svgBubbleElement.removeChild(bubbleElement);
    }
  }, randomNumber);
}, 500);

// create another interval for the square bubble
intervalId2 = setInterval(() => {
  const randomNumber = Math.random() * (1200 - 500) + 500;
  const bubbleElement = createSquareBubble();
  svgBubbleElement.appendChild(bubbleElement);
  setTimeout(() => {
    if (bubbleElement.getAttribute('fill') === 'transparent') {
      svgBubbleElement.removeChild(bubbleElement);
    }
  }, randomNumber);
}, 5000);

//###### read only ######

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

const svgBubbleElement = getElementById('bubbles');

//###### end read only ######
