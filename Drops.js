class createDrop {
    constructor(x,y,r){
        var options = {
            'density':0.1,
            'friction':0.1,
            'restitution':0.1
        }
        this.x=x;
		this.y=y;
		this.r=r
        this.rain = Bodies.circle(this.x, this.y,this.r,options);
        World.add(world, this.rain)
        
    }

    display(){
        var pos = this.rain.position;
        push();
        fill("blue");
        rectMode(CENTER)
        translate(pos.x, pos.y);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    update(){
        if(this.rain.position.y > 700){

            Matter.Body.setPosition(this.rain, {x: random(0,400), y:random(0,700)});
        }
    }
}