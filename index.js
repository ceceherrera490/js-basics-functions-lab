// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  const pickUp = 42;
  if (blocks > pickUp) {
    return blocks - pickUp;
  } else {
    return pickUp - blocks;
  }
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const startB = distanceFromHqInFeet(startBlock);
  const endB = distanceFromHqInFeet(endBlock);
  return endB - startB;
}

function calculatesFarePrice(start, destination) {
  let travel = distanceTravelledInFeet(start, destination);
  let freeSmaple = 0;
  if (travel <= 400) {
    return freeSmaple;
  } else if (travel >= 400 && travel <= 2000) {
    return (travel - 400) * 0.02;
  } else if (travel > 2000 && travel <= 2500) {
    return (travel = 25);
  }
}
