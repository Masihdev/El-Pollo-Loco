class Cloud extends MovableObject {

    width = 500;
    height = 300;

    CLOUD_IMAGES = [
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png'
    ];

    constructor() {
        super().loadImage(this.CLOUD_IMAGES[this.selectRandomCloud()]);

        this.x = -500 + Math.random() * 4000; // random number between 0 and 1
        this.y = Math.random() * 0.5;

        this.animate();

        this.speed = 0.10 + Math.random() * 0.15;
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    selectRandomCloud() {
        return Math.floor(Math.random() * this.CLOUD_IMAGES.length);
    }
}