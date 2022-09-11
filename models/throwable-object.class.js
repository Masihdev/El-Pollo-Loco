class ThrowableObject extends MovableObject {

    bottleRotation = false;

    IMAGES = [
        'img/7_statusbars/3_icons/icon_salsa_bottle.png',
    ];


    IMAGES_BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    constructor(x, y) {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES_BOTTLE_ROTATION);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 70;
        this.throw();

        // this.speedY = 15;
        // this.applyGravity();

    }


    throw () {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 20;
        }, 25);

        this.animate();
    }


    animate() {
        setInterval(() => {
            if (this.bottleRotation == true) {
                this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
            }
        }, 25);
    }




























    // splash = false;
    // world;

    // throw () {
    //     setInterval(() => {
    //         if (this.splash == true) {
    //             this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
    //         } else {
    //             this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
    //         }
    //     }, 100)

    //     setInterval(() => {
    //         this.x += 12.5;
    //     }, 25)

}