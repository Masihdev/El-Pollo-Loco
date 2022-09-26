class BottleOnGround extends MovableObject {
    y = 360;
    width = 100;
    height = 100;

    offsetLeft = 30;
    offsetRight = 50;


    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[this.selectRandomBottle()]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.animate();
        this.x = -700 + Math.random() * 2100;
    }


    selectRandomBottle() {
        return Math.floor(Math.random() * this.IMAGES_BOTTLE.length);
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 800);
    }
}