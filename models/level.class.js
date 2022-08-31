class Level {
    enemies;
    clouds;
    backgroundobjects;
    level_end_x = 2250; // end of canvan 
    bottles;
    coin;


    constructor(enemies, clouds, backgroundobjects, bottles, coin) {

        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.bottles = bottles;
        this.coin = coin;
    }
}