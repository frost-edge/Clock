function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw () {
    background(0);
    translate(200, 200);
    rotate(-90);

    let h = hour();
    let m = minute();
    let s = second();

    strokeWeight(8);
    noFill();
    stroke(254, 100, 150);
    let end1 = map(s, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, end1);


    stroke(150, 100, 255);
    let end2 = map(m, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, end2);

    stroke(100, 150, 255);
    let end3 = map(h % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, end3);

    push();
    rotate(end1);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(end2);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(end3);
    stroke(100, 150, 255);
    line(0, 0, 50, 0);
    pop();

    stroke(255);
    point(0, 0);

    /*
    fill(255);
    noStroke();
    text(h + ":" + m + ":" + s, 10, 200);
    */
}
