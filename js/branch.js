function Branch(source,goal,height){
    this.source = source;
    this.goal = goal;
    this.grown = false;
    this.height = height;

    this.show = function() {
        switch(this.height % 3){
            case 0:
                stroke(255,0,0);
                break;
            case 1:
                stroke(0,255,0);
                break;
            default:
                stroke(0,0,255);    
        }
        line(this.source.x, this.source.y, this.goal.x, this.goal.y);        
    }

    this.growBranch = function(height) {

        var branches = [];

        this.grown = true;

        var right = p5.Vector.sub(this.goal, this.source).mult(0.67).rotate(PI/2);
        var left = p5.Vector.sub(this.goal, this.source).mult(0.67).rotate(-(PI/32));

        var rightBranch = new Branch(this.goal, p5.Vector.add(this.goal,right), height);
        var leftBranch = new Branch(this.goal, p5.Vector.add(this.goal,left), height);

        branches.push(rightBranch);
        branches.push(leftBranch);

        return branches;
    }
}