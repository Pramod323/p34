class Hero{
    constructor(x,y,r){
        var options = {
            density : 1,
            frictionAir : 1
        };
        this.r = r;
        this.body = Bodies.circle(x,y,this.r/2,options);
        this.image = loadImage("images/superhero.png");
        World.add(world, this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x-40, this.body.position.y,(this.r/628)*1821,this.r);
        pop();
    }
}