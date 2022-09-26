let canvas;
let world;
let lastActivity;
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
    touchButtons();
}


/**
 * activating keyborad keys when the keys are pressed
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
        lastActivity = new Date().getTime();
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
        lastActivity = new Date().getTime();
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
        lastActivity = new Date().getTime();
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
        lastActivity = new Date().getTime();
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
        lastActivity = new Date().getTime();
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
        lastActivity = new Date().getTime();
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


/**
 * activating and deactivating touch buttons in mobile view
 */
function touchButtons() {
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('bottle').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById('bottle').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}


// hide start screen
function hideStartScreen() {
    this.start_game.play();
    this.start_game.volume = 0.5;

    let mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
    mainContainer.innerHTML = generateCanvas();
    initLevel();
    init();
}


/**
 * generates canvas on html page
 */
function generateCanvas() {
    return `
    <div class="game" id="game">
        <h1>EL POLLO LOCO</h1>
        <div class="touch-btn-container" id="touch-btn">
            <div class="canvas-container" id="canvas-container">
                <canvas id="canvas" width="720" height="480">
        
                </canvas>
                <div class="touch-btn">
                    <div class="btns">
                        <div class="left-and-right">
                            <img id="left" src="./img/left.ico" alt="">
                            <img id="right" src="./img/right.ico" alt="">
                        </div>
                        <!--<img src="img/play.ico" alt="">-->
                        <div class="jump-and-bottle">
                            <img id="bottle" class="d" src="./img/bottle.ico" alt="">
                            <img id="jump" src="./img/up.ico" alt="">
                        </div>
                    </div>
                    <div class="fullscreen">
                        <img onclick="fullscreen()" id="fullscreen-img" src="./img/fullscreen.ico" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


/**
 * fullscreen
 */
function fullscreen() {
    let fullscreen = document.getElementById('canvas');
    enterFullscreen(fullscreen);
}


/**
 *  fullscreen canvas
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) { // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) { // iOS Safari
        element.webkitRequestFullscreen();
    }
}


/**
 *  exit fullscreen  
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


/**
 *  restart game  
 */
function restart() {
    this.start_game.play();
    // this.start_game.volume = 0.5;
    setTimeout(() => {
        location.reload();
    }, 100);
}


/**
 *  show game over  
 */
function gameOver() {
    game_over.play();
    game_over.volume = 0.5;

    let mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
    mainContainer.innerHTML = `
    <div class="game-over start-screen" id="game-over">
        <img id="lost-game" onclick="restart()" src="./img/restart.png" alt="">      
    </div>
    `;
}


/**
 *  change game over image if endboss is killed  
 */
function changeGameOverBImg() {
    document.getElementById('game-over').style.backgroundImage = "url('./img/9_intro_outro_screens/game_over/game over!.png')";
}