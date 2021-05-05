class Monster{
    constructor(x,y,r){
        var options = {
            density : 0.8,
            frictionAir : 0.13
        };
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("images/monster.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y-30,this.r*(3/2),this.r*(3/2));
        pop();
    }
}