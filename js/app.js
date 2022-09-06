var root;

var tree = [];

var treeHeight = 1;

var trunkLength = 125;

function setup() {
    createCanvas(600,600);

    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - trunkLength);
    root = new Branch(a, b,0);

    tree[0] = root;
}

function mousePressed() {
    for(var i = tree.length - 1; i >= 0; i--){
        if(!tree[i].grown){
            tree.push(...tree[i].growBranch(treeHeight));
        }
    }
    treeHeight++;

    console.log(tree);
    console.log(treeHeight);
}

function draw() {
    background(50);

    for(var i = 0; i < tree.length; i++){
        tree[i].show();
    }

}