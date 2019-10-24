import Rover, { INSTRUCTION } from '../Rover';

export function getMarsRoverCoordinate(
  x, 
  y, 
  xRoverStarting, 
  yRoverStarting, 
  point, 
  movements
  ) {
  const plateau = [x, y];
  const steps = movements.split('');
  const rover = new Rover(xRoverStarting, yRoverStarting, point);

  steps.forEach(step => {
    if (step === INSTRUCTION.LEFT || step === INSTRUCTION.RIGHT) {
      rover.setDirection(step);
    } else if (step === INSTRUCTION.MOVE) {
      rover.move(plateau);
    }
  });

  return rover.toString();
}