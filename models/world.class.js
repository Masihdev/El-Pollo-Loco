class World {

    character = new Character();
    level = level1;

    ctx;
    canvas;
    keyboard;
    camera_x = 0; // camera view while moving left und right
    statusbar = new Statusbar(); // live status bar
    coinbar = new CoinBar();
    bottlebar = new Bottle();
    endbossbar = new EndbossBar();
    throwableObject = [];
    coin_collect_sound = new Audio('audio/coin_collect.mp3');
    bottle_collect_sound = new Audio('audio/bottle_collect.mp3');
    throw_bottle_sound = new Audio('audio/throw_bottle.mp3');

    endboss = this.level.endboss[0];






    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    // check collision
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.collisionWithBottle();
            this.collisionWithCoin();
            this.bottleCollisionWithEnemy();
        }, 200);
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('collision with character', enemy)
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
                console.log('collision with character, energy ', this.character.energy)
            }
        });
    }


    // coin collision
    collisionWithCoin() {
        this.level.coin.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                this.coinbar.getCoin();
                this.coinbar.setPercentage(this.coinbar.percentage);
                this.level.coin.splice(i, 1);
                console.log('collision with coin', coin);
                this.coin_collect_sound.play();
            }
        });
    }


    collisionWithBottle() {
        this.level.bottles.forEach((btl, i) => {
            if (this.character.isColliding(btl)) {
                this.bottlebar.getBottle();
                this.bottlebar.setPercentage(this.bottlebar.percentage);
                this.level.bottles.splice(i, 1);
                console.log('collision with bottle', this.bottles);
                this.bottle_collect_sound.play();
            }
        });
    }


    checkThrowObjects() {
        if (this.bottlebar.percentage >= 20 && this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 80, this.character.y + 120);
            this.throwableObject.push(bottle);
            bottle.bottleRotation = true;
            this.bottlebar.reduceBottles();
            this.bottlebar.setPercentage(this.bottlebar.percentage);
            this.throw_bottle_sound.play();
            //     this.throwableObject.splice(0, 1);
        }
    }

    // TRY
    // checkBottleCollisionwithEnemy() {
    //     this.throwableObjects.forEach((bubble) => {
    //         this.level.endboss.forEach((endboss) => {
    //             if (bubble.isColliding(endboss)) {
    //                 endboss.hit(bubble);
    //                 this.endbossBar.setPercentage(endboss.energy);
    //                 bubble.splash = true;
    //                 // this.glass_sound.play();

    //                 // setTimeout(() => {
    //                 //     let index = this.throwableObjects.indexOf(bubble)
    //                 //     this.throwableObjects.splice(index, 1)
    //                 // }, 200);
    //                 // if (endboss.energy == 0) {
    //                 //     this.win = true;
    //                 // }
    //             }
    //         })
    //     })
    // }

    bottleCollisionWithEnemy() {
        this.throwableObject.forEach((to, index) => {
            if (to.isColliding(this.endboss)) {
                this.endboss.hit();
                // this.bottle_shattered_sound.play();
                // this.endboss_sound.play();
                this.endbossbar.setPercentage(this.endboss.energy);
                // to.bottleCollision();

                setTimeout(() => {
                    // this.throwableObject.splice(index, 1);
                }, 200);

            } else if (to.y > 255) {
                // this.bottle_shattered_sound.play();
                // to.bottleCollision();

                setTimeout(() => {
                    // this.throwableObjects.splice(index, 1)
                }, 100);
            }
        });
    }

    // connecting world class with character class
    setWorld() {
        this.character.world = this;
    }


    /**
     * draws objects on canvas
     */

    draw() {

        // clears canvas when objects move

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // moving camera view left and right

        this.ctx.translate(this.camera_x, 0);

        // with drawImage() can we draw the image we want (imagePath, x-Axis, y-Axis, width, height)
        this.addObjectsToMap(this.level.backgroundobjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.throwableObject);
        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.character);
        // bars
        this.ctx.translate(-this.camera_x, 0); // back
        this.addToMap(this.bottlebar);
        this.addToMap(this.statusbar);
        this.addToMap(this.coinbar);
        this.addToMap(this.endbossbar);
        this.ctx.translate(this.camera_x, 0); // forward

        // moving camera view back to it's first place

        this.ctx.translate(-this.camera_x, 0);


        /**
         *  calls draw() repeatedly
         */

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })

    }


    /**
     * adds every object to the map
     * @param {*} objects 
     */

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * add movable objects to map
     * @param {*} mo 
     */

    addToMap(mo) {

        // mirror image

        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        // mirror image

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }

    }

    // mirror image

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    // mirror image

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

}