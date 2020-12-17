const compareOp = (i, bar1, bar2, compareColor, stepSpeed) => {
  setTimeout ( () => {
    // Change color to compare color
    bar1.style.backgroundColor = compareColor;
    bar2.style.backgroundColor = compareColor;
  }, i * stepSpeed);
}

const swapOp = (i, bar1, bar2, swapColor, stepSpeed) => {
  setTimeout ( () => {
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
  }, i * stepSpeed);
}

const compareDoneOp = (i, bar1, bar2, unsortedColor, stepSpeed) => {
  setTimeout ( () => {
    // Change color to unsorted color
    bar1.style.backgroundColor = unsortedColor;
    bar2.style.backgroundColor = unsortedColor;
  }, i * stepSpeed);
}

const swapDoneOp = (i, bar1, bar2, unsortedColor, stepSpeed) => {
  setTimeout ( () => {
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
  }, i * stepSpeed);
}

const animationOps = {
  compareOp: compareOp,
  swapOp: swapOp,
  swapDoneOp: swapDoneOp,
  compareDoneOp: compareDoneOp
}


export default animationOps;
