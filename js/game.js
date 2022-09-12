let canvas;
let world;
let keyboard = new Keyboard();
game_over = new Audio('audio/game_over.mp3');
start_game = new Audio('audio/start_game.mp3');

/**
 *  draws on canvas
 */

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My character is', world.character);


    // setTimeout(() => {

    //     ctx.drawImage(character, 20, 20, 50, 150); //drawImage(src, x-axis, y-axis, widht, height) is a built-in function

    // }, 10);
}


/**
 * activating keyborad keys when the keys are pressed
 */

window.addEventListener('keydown', (e) => {

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});


/**
 * deactivating keyborad keys when the keys are not pressed
 */

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


// hide start screen

function hideStartScreen() {
    this.start_game.play();
    this.start_game.volume = 0.5;
    let mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    mainContainer.innerHTML = `
    <div class="game" id="game">
        <h1>EL POLLO LOCO</h1>

        <canvas id="canvas" width="720" height="480">
        
        </canvas>
    </div>
    `;
}


// fullscreen canvas

function fullscreenCanvas() {
    canvas.requestFullscreen();
}


// restart 

function restart() {
    this.start_game.play();
    // this.start_game.volume = 0.5;
    setTimeout(() => {
        location.reload();
    }, 100);
}

// game over

function gameOver() {
    this.game_over.play();
    this.game_over.volume = 0.5;
    let mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    mainContainer.innerHTML = `
    <div class="game-over start-screen">
        <img onclick="restart()" src="./img/restart.png" alt="">      
    </div>
    `;
}