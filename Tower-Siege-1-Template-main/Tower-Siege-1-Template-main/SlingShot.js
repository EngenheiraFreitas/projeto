class SlingShot{

    constructor(bodyA,pointB)
	{
		var options={
            pointB: pointB,
            
            bodyA: bodyA, 

            stiffness: 0.04,
        
            length: 1
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB
 		World.add(world, this.sling);

	}

    fly(){

        this.sling.bodyA = null;

    }

	display()
	{

        if (this.sling.bodyA) {
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("pink");

            line(pointA.x,pointA.y,pointB.x,pointB.y)

        }
			
	}

}
