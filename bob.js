class bob
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:1,
			friction:0,
			density:1
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		//super(x,y,50,50);
		this.image = loadImage("bob.png");
	
		this.body=Bodies.circle(this.x, this.y, (this.r)/2 ,options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			//rectMode(CENTER);
			//imageMode(CENTER);
			//image(this.image, 0, 0, this.width, this.height);
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

