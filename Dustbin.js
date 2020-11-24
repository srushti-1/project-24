class Dustbin{
    constructor(x, y, width, height){
        var options_Basket = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options_Basket);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill("green");
        rect(pos.x, pos.y, this.width, this.height)
    }
}