class Level {
    enemies;
    clouds;
    backgroundobjects;
    level_end_x = 2250; // end of canvan 
    bottles;
    coin;

    endboss;


    constructor(enemies, endboss, clouds, backgroundobjects, bottles, coin) {

        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.bottles = bottles;
        this.coin = coin;
    }
}