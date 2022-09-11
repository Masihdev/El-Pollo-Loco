class Chicken extends MovableObject {

    y = 350;
    width = 100;
    height = 100;

    offsetTop = 5;
    offsetBottom = 10;
    offsetLeft = 0;
    offsetRight = 0;


    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.speed = 0.15 + Math.random() * 1;

        this.x = 2000 + Math.random() * 500; // random number between 0 and 1
    }

    animate() {
        // setInterval(() => {
        //     this.moveLeft();
        // }, 1000 / 60);

        // setInterval(() => {
        //     this.playAnimation(this.IMAGES_WALKING);

        // }, 300);
        setInterval(() => {
            if (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 130);
    }


    /**
     * This function is used to lower the chicken energy, if it is hurt
     */
    kill() {
        super.kill();
    }
}