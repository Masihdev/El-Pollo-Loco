let canvas;
let world;
let keyboard = new Keyboard();


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
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');

}


// fullscreen canvas

function fullscreenCanvas() {
    canvas.requestFullscreen();
}


// restart 

function restart() {
    location.reload();
}

// game over

function gameOver() {
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('fullscreen').classList.add('d-none');
    document.getElementById('controls').classList.add('d-none');

    document.getElementById('game-over').classList.remove('d-none');

    // document.getElementById('game-over').style.backgroundImage = "url(img/9_intro_outro_screens/game_over/game over.png)"; // specify the image path here

}