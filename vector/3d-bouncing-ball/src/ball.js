"use strict";

class Ball {
  constructor(position, radius) {
    this.position = createVector(position.x, position.y, position.z);
    this.radius = radius;
    this.velocity = createVector(random(-2, -1), random(-2, -2), random(-2, -2));
  }

  update () {
    this.position = p5.Vector.add(this.position, this.velocity);

  	if (this.position.x - this.radius  < -BOX_EDGE / 2) {
  		this.velocity.x *= -1;
  		this.position.x = -BOX_EDGE / 2 + this.radius;
  	}
  	if (this.position.x + this.radius  > BOX_EDGE / 2) {
  		this.velocity.x *= -1;
  		this.position.x = BOX_EDGE / 2- this.radius;
  	}
  	if (this.position.y - this.radius  < -BOX_EDGE / 2) {
  		this.velocity.y *= -1;
  		this.position.y = -BOX_EDGE / 2 + this.radius;
  	}
  	if (this.position.y + this.radius  > BOX_EDGE / 2) {
  		this.velocity.y *= -1;
  		this.position.y = BOX_EDGE / 2 - this.radius;
  	}
  	if (this.position.z - this.radius  < -BOX_EDGE / 2) {
  		this.velocity.z *= -1;
  		this.position.z = -BOX_EDGE / 2 + this.radius;
  	}
  	if (this.position.z + this.radius  > BOX_EDGE / 2) {
  		this.velocity.z *= -1;
  		this.position.z = BOX_EDGE / 2 - this.radius;
  	}
  }

  draw () {
    specularMaterial(0, 0, 255, 255);

    push();
    translate(this.position.x, this.position.y, this.position.z);
    sphere(this.radius)
    pop();
  }
}
