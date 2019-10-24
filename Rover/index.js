export const COMPASS_POINT = {
  EAST: 'E',
  NORTH: 'N',
  SOUTH: 'S',
  WEST: 'W',
};

export const INSTRUCTION = {
  LEFT: 'L',
  MOVE: 'M',
  RIGHT: 'R',
};

export default class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getDirection() {
    return this.direction;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setDirection(instruction) {
    const { direction } = this;

    if (direction === COMPASS_POINT.NORTH) {
      this.direction = instruction === INSTRUCTION.LEFT ? COMPASS_POINT.WEST : COMPASS_POINT.EAST;
    } else if (direction === COMPASS_POINT.SOUTH) {
      this.direction = instruction === INSTRUCTION.LEFT ? COMPASS_POINT.EAST : COMPASS_POINT.WEST;
    } else if (direction === COMPASS_POINT.WEST) {
      this.direction = instruction === INSTRUCTION.LEFT ? COMPASS_POINT.SOUTH : COMPASS_POINT.NORTH;
    } else if (direction === COMPASS_POINT.EAST) {
      this.direction = instruction === INSTRUCTION.LEFT ? COMPASS_POINT.NORTH : COMPASS_POINT.SOUTH;
    }
  }

  move(area) {
    const { direction } = this;
    const areaX = area[0];
    const areaY = area[1];

    const isRoverStillinYCoordinate = this.y >= 0 && this.y <= areaY;
    const isRoverStillinXCoordinate = this.x >= 0 && this.x <= areaX;

    if (direction === COMPASS_POINT.NORTH && isRoverStillinYCoordinate) {
      this.y++;
    } else if (direction === COMPASS_POINT.SOUTH && isRoverStillinYCoordinate) {
      this.y--;
    } else if (direction === COMPASS_POINT.WEST && isRoverStillinXCoordinate) {
      this.x--;
    } else if (direction === COMPASS_POINT.EAST && isRoverStillinXCoordinate) {
      this.x++;
    } else {
      console.error('Movement is not possible');
    }
  }

  toString() {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}