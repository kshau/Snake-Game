class Fruit {
  
    constructor() {
      
      this.x = 0;
      this.y = 0;
      
    }
    
    display() {
      
      fill(255, 0, 0)
      rect(this.x, this.y, 10, 10);
      
    }
    
    spawn() {
      
      this.x = random(25, width - 25);
      this.y = random(25, height - 25)
      
      this.x = round(this.x / 10) * 10
      this.y = round(this.y / 10) * 10
      
    }
  
    
  }