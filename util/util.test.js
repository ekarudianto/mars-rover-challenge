import { getMarsRoverCoordinate } from './util';

describe('getFinalCoordinate', () => {
  it('should print correct final coordinate', () => {
    expect(getMarsRoverCoordinate('5 5', ['1 2 N LMLMLMLMM', '3 3 E MMRMMRMRRM'])).toEqual(['1 3 N', '5 1 E']);
  });

  it('should print correct final coordinate', () => {
    expect(getMarsRoverCoordinate('5 5', ['1 1 E LLRRLLRRR'])).toEqual(['1 1 S']);
  });
});