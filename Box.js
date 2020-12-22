class Box{
    constructor(x, y, width, height, image) {
        var options = {
            'restitution':0.4,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(image);
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display()
      {
        var angle = this.body.angle;
        if(this.body.speed > 3)
        {
          push();
          World.remove(world, this.body);
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else
        {
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
          
        }
        
      }

      score()
      {
         if(this.Visibility < 0 && this.Visibility > -105)
         {
            score++;
         }
      }
}