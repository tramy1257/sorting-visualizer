const compareOp = (bar1, bar2, compareColor) => {
  // Change color to compare color
  bar1.style.backgroundColor = compareColor;
  bar2.style.backgroundColor = compareColor;
}

const swapOp = (bar1, bar2, swapColor, stepSpeed) => {
  // Change color to swap color
  bar1.style.backgroundColor = swapColor;
  bar2.style.backgroundColor = swapColor;
  
  // Calculate the amount to translate
  let translateAmount = bar2.getBoundingClientRect().x - 
                          bar1.getBoundingClientRect().x;
  
  // Animate translating first bar
  bar1.style.transition = `transform ${stepSpeed / 1000}s`;
  bar1.style.transform = `translateX(${translateAmount}px)`;

  // Animate translating second bar
  bar2.style.transition = `transform ${stepSpeed / 1000}s`;
  bar2.style.transform = `translateX(${-translateAmount}px)`;
}

const compareDoneOp = (bar1, bar2, unsortedColor) => {
  // Change color to unsorted color
  bar1.style.backgroundColor = unsortedColor;
  bar2.style.backgroundColor = unsortedColor;
}

const swapDoneOp = (bar1, bar2, unsortedColor) => {
  // Change color to unsorted color
  bar1.style.backgroundColor = unsortedColor;
  bar2.style.backgroundColor = unsortedColor;

  // Clear transition property
  bar2.style.transition = 'transform 0s';
  bar2.style.transform = `translateX(0px)`;

  bar1.style.transition = 'transform 0s';
  bar1.style.transform = `translateX(0px)`;

  // Update bar order
  const temp = bar2.style.order;
  bar2.style.order = bar1.style.order;
  bar1.style.order = temp;
}

const sortedBarOp = (bar, sortedColor) => {
  bar.style.backgroundColor = sortedColor;
}

const animationOps = {
  compareOp: compareOp,
  swapOp: swapOp,
  swapDoneOp: swapDoneOp,
  compareDoneOp: compareDoneOp,
  sortedBarOp: sortedBarOp
}


export default animationOps;
