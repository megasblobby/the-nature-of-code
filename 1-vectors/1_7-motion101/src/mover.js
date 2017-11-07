"use strict"

const MIN_SPEED = -10, MAX_SPEED = 10;
const MIN_RADIUS = 20, MAX_RADIUS = 100;
const MAX_RGB = 255

class Mover {
  constructor() {
    this._position = new p5.Vector(random(0, WIDTH), random(0, HEIGHT));
    this._velocity = new p5.Vector(random(MIN_SPEED, 0), random(MIN_SPEED, MAX_SPEED));
    this._radius = random(MIN_RADIUS, MAX_RADIUS)
    this._color = color(random(0, MAX_RGB), random(0, MAX_RGB),
                        random(0, MAX_RGB));
  }

  update() {
    this._position.add(this._velocity);
    this._fixPosition(this._position);
  }

  render() {
    fill(this._color);
    ellipse(this._position.x, this._position.y, this._radius);
  }

  _fixPosition(position) {
    if (position.x < 0) {
      position.x = WIDTH;
    }
    else if (position.x > WIDTH) {
      position.x = 0;
    }
    if (position.y < 0) {
      position.y = HEIGHT;
    }
    else if (position.y > HEIGHT) {
      position.y = 0;
    }
  }
}
