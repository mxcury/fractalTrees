function Branch(source,goal){
    this.source = source;
    this.goal = goal;
    this.grown = false;

    this.jitter = function() {
        this.goal.x += random(-1,1);
        this.goal.y += random(-1,1);
    }

    this.show = function() {
        stroke(255);
        line(this.source.x, this.source.y, this.goal.x, this.goal.y);
    }

    this.growBranch = function() {

        var branches = [];

        this.grown = true;

        var right = p5.Vector.sub(this.goal, this.source).mult(0.67).rotate(PI/4);
        var left = p5.Vector.sub(this.goal, this.source).mult(0.67).rotate(-PI/2);

        var rightBranch = new Branch(this.goal, p5.Vector.add(this.goal,right));
        var leftBranch = new Branch(this.goal, p5.Vector.add(this.goal,left));

        branches.push(rightBranch);
        branches.push(leftBranch);

        return branches;
    }
}