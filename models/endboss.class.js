class Endboss extends MovableObject {
    y = 40;
    width = 300;
    height = 450;
    energy = 100;
    Confrontation = false;
    offsetTop = 50;
    offsetBottom = 60;
    offsetLeft = 20;
    offsetRight = 30;
    endboss_dead_sound = new Audio('audio/endboss_dead_sound.mp3');

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_ATTACK = [
        // 'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        // 'img/4_enemie_boss_chicken/3_attack/G14.png',
        // 'img/4_enemie_boss_chicken/3_attack/G15.png',
        // 'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];


    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2550;
        this.animate();
    }


    animate() {
        let i = 0;
        let endbossImgs = setInterval(() => {
            this.animationAlertAttack(i);
            i++;
            if (world.character.x > 1700 && !this.Confrontation) {
                i = 0;
                this.Confrontation = true;
            }
        }, 200);

        let endbossDeadImgs = setInterval(() => {
            this.animationHurtDead(endbossImgs, endbossCanMove, endbossDeadImgs);
        }, 250);

        let endbossCanMove = setInterval(() => {
            this.endbossMoveLR(i);
        }, 1000 / 60);
    }


    animationAlertAttack(i) {
        if (i < 8) {
            this.playAnimation(this.IMAGES_ALERT);
        } else {
            this.playAnimation(this.IMAGES_ATTACK);
        }
    }


    animationHurtDead(endbossImgs, endbossCanMove, endbossDeadImgs) {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.energy == 0) {
            clearInterval(endbossImgs);
            clearInterval(endbossCanMove);
            this.playAnimation(this.IMAGES_DEAD);
            this.endboss_dead_sound.play();
            this.endboss_dead_sound.volume = 0.1;
            setTimeout(() => {
                clearInterval(endbossDeadImgs);
                gameOver();
                changeGameOverBImg();
            }, 2000);
        }
    }


    endbossMoveLR(i) {
        if (world.character.x > this.x) {
            this.moveRight();
            this.speed = 2;
            this.otherDirection = true;
        } else if (this.Confrontation == true && i > 8) {
            this.moveLeft();
            this.speed = 2;
            this.otherDirection = false;
        }
    }
}