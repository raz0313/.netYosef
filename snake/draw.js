var canvas, ctx, scale, rows, col, snake, fruit;

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    scale = 10;
    rows = canvas.height / scale;
    col = canvas.width / scale;
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    
    render();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();

    snake.draw();
    snake.update();
    if (snake.eat(fruit)) {
        fruit.pickLocation();
    }
 
    setTimeout(render, 300);
}
window.addEventListener('keydown', ((event) => {
    var direction = event.key.replace('Arrow', '');
    snake.changDirection(direction);

}));