class Paper {
    constructor(x,y,radius)
    {
        var options_paper = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
            
        }
        this.body = Bodies.circle(x, y,radius, options_paper);
        this.width = width;
        this.height = height;
        this.image=loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      /*ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);   
      ellipse(0, 0,60,60);*/
      imageMode(CENTER);
      image(this.image,0,0,60,60);
      pop();
    }
}