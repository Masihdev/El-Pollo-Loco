class MovableObject extends DrawableObjects {

    speed = 0.15;
    otherDirection = false;
    speedY = 0; // falling speed
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;




    // falling to the ground

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 200;
        }
    }



    isColliding(mo) {
        return this.x + this.width - this.offsetRight > mo.x + mo.offsetLeft &&
            this.y + this.height - this.offsetBottom > mo.y + mo.offsetTop &&
            this.x + this.offsetLeft < mo.x + mo.width - mo.offsetRight &&
            this.y + this.offsetTop < mo.y + mo.height - mo.offsetBottom;
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.3;
    }


    isDead() {
        return this.energy == 0;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 35;
    }
}