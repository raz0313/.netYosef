function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = scale +1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.draw = function () {
        ctx.fillStyle = "#ffffff";
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        this.x += this.xspeed;
        this.y += this.yspeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x <0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    }
    this.changDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xspeed = 0;
                this.yspeed = - scale * 1;
                break;
            case 'Down':
                this.xspeed = 0;
                this.yspeed = scale * 1;
                break;
            case 'Left':
                this.xspeed = - scale * 1;
                this.yspeed = 0;
                break;
            case 'Right':
                this.xspeed = scale * 1;
                this.yspeed = 0;
                break;
        }
    }

    this.eat = function (fruit) {
       
        if (this.x - fruit.x == 0&& this.y -  fruit.y  == 0) {
            this.total++;
            return true;

        }
        return false;
    }
}