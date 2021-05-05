class Block{
    constructor(x,y,w,h){
        var options = {
            restitutuon:0.8,
            friction:1.0,
            density:20
        };
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black");
        strokeWeight(3);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }
}