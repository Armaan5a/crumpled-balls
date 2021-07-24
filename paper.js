class Paper
{
    constructor(a,b,c)
    {
        var option={
            'restitution' : 0.4,
            'friction': 0.5,
            'density':1.8
        }
        this.body=Bodies.circle(a,b,c,option);
        World.add(myworld,this.body);
    
        this.rad=c
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("blue") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        circle(0,0,this.rad);
        pop();     
    }
}