class Polygon
{
    constructor(x, y, r)
    {
        var options = 
        {
            isStatic: false,
            density: 5
        }

        this.body = Bodies.circle(x, y, r, options);
        this.width = r + 40;
        this.height = r + 40;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}