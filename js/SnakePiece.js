class SnakePiece {
  
    constructor(xpos, ypos) {
      
      this.x = xpos;
      this.y = ypos;
      
    }
    
    display() {
      
      fill(0, 210, 35);
      rect(this.x, this.y, 10, 10);
      
    }
    
  }