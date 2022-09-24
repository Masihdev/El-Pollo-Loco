class Character extends MovableObject {
    world; // connecting world class with character class
    speed = 10;
    x = -719 * 2;

    offsetTop = 100;
    offsetBottom = 85;
    offsetLeft = 20;
    offsetRight = 50;

    walking_sound = new Audio('audio/walk.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    character_hurt = new Audio('audio/character_hurt.mp3');
    character_death = new Audio('audio/character_death_sound.mp3');


    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMP = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }


    // animate the pics
    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.playCharacterImages(), 100);
    }

    moveCharacter() {
        // walking right
        this.walking_sound.pause();
        if (this.canMoveRight()) {
            this.MoveRight()
        }
        // walking left
        if (this.canMoveLeft()) {
            this.moveLeft();
        }
        // pause walking sound when abouve ground
        if (this.isAboveGround()) {
            this.walking_sound.pause();
        }
        // jump when not above ground
        if (this.canJump()) {
            this.jump();
            this.jumping_sound.play();
            this.jumping_sound.volume = 0.1;
        }
        // when the character moves left or right, camera view moves reverse
        this.world.camera_x = -this.x + 100;
    }

    canMoveRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
    }

    MoveRight() {
        super.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
        this.walking_sound.volume = 0.1;
    }

    canMoveLeft() {
        return this.world.keyboard.LEFT && this.x > -2047;
    }

    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        this.walking_sound.play();
        this.walking_sound.volume = 0.1;
    }

    canJump() {
        return this.world.keyboard.SPACE && !this.isAboveGround();
    }

    playCharacterImages() {
        this.CharacterImages = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.character_death.play();
                this.character_death.volume = 0.01;
                // setTimeout(() => {
                //     clearInterval(this.CharacterImages);
                //     
                // }, 2000);
                gameOver();
                this.world.keyboard = false;

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.character_hurt.play();
                this.character_hurt.volume = 0.1;
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (this.isSleeping()) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 150);

    }

    isSleeping() {
        let timePassed = new Date().getTime() - lastActivity;;
        timePassed = timePassed / 1000
        return timePassed > 8;
    }
}