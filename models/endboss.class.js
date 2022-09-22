class Endboss extends MovableObject {
    y = 40;
    width = 300;
    height = 450;
    energy = 50;
    speed = 25;
    world;

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
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
        // 'img/4_enemie_boss_chicken/3_attack/G14.png',
        // 'img/4_enemie_boss_chicken/3_attack/G15.png',
        // 'img/4_enemie_boss_chicken/3_attack/G16.png',
        // 'img/4_enemie_boss_chicken/3_attack/G17.png',
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
        this.x = 2250;
        // this.x = -1000;
        // this.speed = 0.15;
        this.animate();
    }


    animate() {
        let endBossImages = setInterval(() => {
            if (this.energy == 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.endboss_dead_sound.play();
                this.endboss_dead_sound.volume = 0.1;
                setTimeout(() => {
                    clearInterval(endBossImages);
                    gameOver();
                }, 2000);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.energy < 50 && this.energy > 0) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.moveLeft();
            } else {
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 200);
    }
}