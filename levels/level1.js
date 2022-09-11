const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken(),
        new BigChicken(),
        new BigChicken(),
        new BigChicken(),
    ],

    endboss = [
        new Endboss()
    ],

    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
    ],

    [
        new BackgroundObject('img/5_background/layers/air.png', -719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719 * 3),

        new BackgroundObject('img/5_background/layers/air.png', -719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', -719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', -719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', -719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
    ],

    [
        new BottleOnGround(),
        new BottleOnGround(),
        new BottleOnGround(),
        new BottleOnGround(),
        new BottleOnGround()
    ],

    [
        new Coin(300, 200),
        new Coin(350, 200),
        new Coin(400, 200),
        new Coin(450, 200),
        new Coin(500, 200),
        new Coin(350, 150),
        new Coin(400, 150),
        new Coin(450, 150),
        new Coin(400, 100),

        new Coin(1000, 200),
        new Coin(1050, 150),
        new Coin(1100, 100),
        new Coin(1150, 150),
        new Coin(1200, 200),

        new Coin(1950, 100),
        new Coin(2000, 150),
        new Coin(2050, 200),
        new Coin(2100, 150),
        new Coin(2150, 100),

        new Coin(-300, 100),
        new Coin(-350, 150),
        new Coin(-400, 200),
        new Coin(-450, 150),
        new Coin(-500, 100),

        new Coin(-1000, 200),
        new Coin(-1050, 150),
        new Coin(-1100, 100),
        new Coin(-1150, 150),
        new Coin(-1200, 200),

        new Coin(-300, 200),
        new Coin(-350, 200),
        new Coin(-400, 200),
        new Coin(-450, 200),
        new Coin(-500, 200),
        new Coin(-350, 100),
        new Coin(-450, 100),
        new Coin(-400, 50),

        new Coin(-1950 + 120, 100),
        new Coin(-2000 + 120, 150),
        new Coin(-2050 + 120, 200),
        new Coin(-2100 + 120, 150),
        new Coin(-2150 + 120, 100)
    ]
);