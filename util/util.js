import Rover, { INSTRUCTION } from '../Rover';

export function getMarsRoverCoordinate(
  marsPlateau, 
  instructions,
  ) {
  const plateau = marsPlateau.split(' ');
  const finalCoordiantes = [];

  instructions.forEach(value => {
    const instruction = value.split(' ');
    const x = instruction[0];
    const y = instruction[1];
    const point = instruction[2];
    const steps = instruction[3].split('');

    const rover = new Rover(x, y, point);
    steps.forEach(step => {
      if (step === INSTRUCTION.LEFT || step === INSTRUCTION.RIGHT) {
        rover.setDirection(step);
      } else if (step === INSTRUCTION.MOVE) {
        rover.move(plateau);
      }
    });

    finalCoordiantes.push(rover.toString());
  });
  
  return finalCoordiantes;
}