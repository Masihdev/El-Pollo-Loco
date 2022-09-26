class DrawableObjects {
    img;
    imageCache = {}; // fotos
    currentImage = 0;
    x = 20;
    y = 200;
    width = 150;
    height = 250;

    offsetTop = 0;
    offsetBottom = 0;
    offsetLeft = 0;
    offsetRight = 0;


    /**
     * load images of character and chicken
     * @param {string} path - here comes the path of the images
     */
    loadImage(path) {
        this.img = new Image(); //new Image() creates an instance of a <img>. // new Image(width, height, src)
        this.img.src = path;
    }


    // draw cutted from world.js
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    // draws rectangle around objects
    drawFrame(ctx) {
        // if (this instanceof Character || this instanceof Chicken || this instanceof SmallChicken || this instanceof BottleOnGround || this instanceof Coin) {
        // ctx.beginPath();
        // ctx.lineWidth = '5';
        // ctx.strokeStyle = 'red';
        // ctx.rect(this.x, this.y, this.width, this.height);
        // ctx.stroke();
        // }
    }


    // loads images to imageCache json
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}