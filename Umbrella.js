class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.batmanImg = loadImage("bat/Bestman-01.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        if(frameCount % 60 >= 200){
            image(this.batmanImg, pos.x,pos.y+70,200,300)
        }
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.batmanImg,pos.x,pos.y+70,300,300);
    }
}
