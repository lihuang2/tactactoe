//main.js
class Game {
    restartHandler = () => {
        let buttons = document.getElementsByClassName('buttonxo');
        for (let button of buttons) {
            button.innerHTML = '';
        }
        let status = document.getElementsByClassName('status');
        status[0].innerHTML = `X's turn to go`;
    }
    getNextXorO = () => {
        let total = this.getTotalMoves();
        return total % 2 === 0 ? 'X' : 'O';
    }

    getTotalMoves = () => {
        let buttons = document.getElementsByClassName('buttonxo');
        let total = 0;
        for (let button of buttons) {
            total += button.innerHTML.length > 0 ? 1 : 0;
        }
        return total;
    }

    buttonClickHandler = event => {
        let totalMoves = this.getTotalMoves();
        let nextMove = this.getNextXorO();
        if (event.srcElement.innerHTML.length === 0 && totalMoves < 9) {
            event.srcElement.innerHTML = nextMove;
            // update turn status
            let status = document.getElementsByClassName('status');
            let nnMove = nextMove === 'X' ? 'O' : 'X'
            status[0].innerHTML = `${nnMove}'s turn to go`;

            // -- enable restart
            if (totalMoves === 8) {
                let restartBtn = document.getElementsByClassName('restart');
                restartBtn.disabled = false;
                let status = document.getElementsByClassName('status');
                status[0].innerHTML = `Game Over!! Press Restart To Play Again.`;
            }
        }
    }

    addButtonListeners = () => {
        let buttons = document.getElementsByClassName('buttonxo');
        for (let button of buttons) {
            button.addEventListener('click', this.buttonClickHandler, false);
        }
        let restartBtn = document.getElementsByClassName('restart');
        if (restartBtn.length > 0) {
            restartBtn[0].addEventListener('click', this.restartHandler, false);
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let game = new Game();
    game.addButtonListeners();
});
