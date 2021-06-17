class Snow {
    constructor(x,y,width,height)
    {
        var options = {
            friction : 1,
            density : 3
        }

        this.image1 = loadImage("snow1.jpg");
    this.image2 = loadImage("snow2.jpg");
    this.image3 = loadImage("snow3.jpg");
    this.body = Bodies.rectangle(0,0,width,height,options)
    World.add(world,this.body)

    }

    
    
    



    display()
    {
        var pos = this.body.position
        push()
        image(this.image2,0,0,width,height)
        imageMode(CENTER)
        translate(pos.x,pos.y)
        pop()
        
    
    }
}