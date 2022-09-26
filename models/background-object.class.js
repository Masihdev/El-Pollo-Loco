class BackgroundObject extends MovableObject {
    // width and height of canvas
    width = 720;
    height = 480;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}