const compareOp = (i, bar1, bar2, compareColor) => {
  setTimeout ( () => {
    // Change color to compare color
    bar1.style.backgroundColor = compareColor;
    bar2.style.backgroundColor = compareColor;
  }, i * STEP_SPEED);
}

const swapOp = (i, bar1, bar2, order1, order2, barWidth) => {
  setTimeout ( () => {
    // Change color to swap color
    bar1.style.backgroundColor = SWAP_COLOR;
    bar2.style.backgroundColor = SWAP_COLOR;
    
    // Calculate the amount to translate
    let translateBar1 = barWidth * (newIdx2 - oriIdx1);
    let translateBar2 = barWidth * (newIdx1 - oriIdx2);
    
    // Animate translating first bar
    bar1.style.transition = `transform ${STEP_SPEED / 1000}s`;
    bar1.style.transform = `translateX(${translateBar1}px)`;

    // Animate translating second bar
    bar2.style.transition = `transform ${STEP_SPEED / 1000}s`;
    bar2.style.transform = `translateX(${translateBar2}px)`;

    // Change order

  }, i * STEP_SPEED);
}

const swapDoneOp = (i, bar1, bar2) => {
  setTimeout ( () => {
    // Change color to unsorted color
    bar1.style.backgroundColor = UNSORTED_COLOR;
    bar2.style.backgroundColor = UNSORTED_COLOR;
  }, i * STEP_SPEED);
}

const compareDoneOp = (i, bar1, bar2) => {
  setTimeout ( () => {
    // Change color to unsorted color
    bar1.style.backgroundColor = UNSORTED_COLOR;
    bar2.style.backgroundColor = UNSORTED_COLOR;

    //bar2.style.transition = `transform 0s`;
    //bar2.style.transform = `translateX(0)`;
  }, i * STEP_SPEED);
}

export default {
  compareOp: compareOp,
  swapOp: swapOp,
  swapDoneOp: swapDoneOp,
  compareDoneOp: compareDoneOp
}

