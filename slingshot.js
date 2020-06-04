class Slingshot {
    constructor(rajveer, jain){
        var options = {
            bodyA: rajveer,
            pointB: jain,
            stiffness: 0.01,
            length: 10
        }
        this.pointB= jain
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB =this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    fly() {
        this.sling.bodyA = null;

    }
    
}