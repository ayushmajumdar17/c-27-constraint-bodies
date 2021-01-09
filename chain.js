class chain {

    constructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 5
        }

        this.chain = Constraint.create(options);
        World.add(myworld, this.chain);
        console.log(this.chain);
    }
display(){
    
    strokeWeight(5);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);

}

}



