class Paper {
    constructor(x,y,r){
var options={
    isStatic: false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
}


    this.body = Bodies.circle(x,y,r,options)
    World.add (world,this.body)
    
    //ball = Bodies.circle(200, 100, 30,{restitution : 0.9})
	//World.add(world,ball)
this.r = r;
}
    
    
    
    
    display(){
        
    push()
    ellipse(this.body.position.x, this.body.position.y, this.r * 2, this.r * 2)
    fill("purple")
   
    pop()
    }
    
}


