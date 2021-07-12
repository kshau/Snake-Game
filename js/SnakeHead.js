class SnakeHead {
  
    constructor(xpos, ypos) {
      
      rectMode(CENTER)
      
      this.x = xpos;
      this.y = ypos;
      
      this.dir = 90;
      
      this.body = [];
      
      this.initLen = 5;
      
    }
    
    display() {
      
      fill(0, 145, 25)
      rect(this.x, this.y, 10, 10);
      
    }
    
    update() {
      
      this.display();
      this.handleKeys();
      this.detectCollision();
      
      if (frameCount % 10 == 0) {
      if (this.dir == 90) {
        
        this.x += 10;
        this.body.push(new SnakePiece(this.x - 10, this.y));
        
      }
      
      if (this.dir == 180) {
        
        this.y -= 10;
        this.body.push(new SnakePiece(this.x, this.y + 10));
        
      }
      
      if (this.dir == 270) {
        
        this.x -= 10;
        this.body.push(new SnakePiece(this.x + 10, this.y));
        
      }
      
      if (this.dir == 0) {
        
        this.y += 10;
        this.body.push(new SnakePiece(this.x, this.y - 10));
        
      }
      }
        
      
      if (this.body.length > this.initLen) {
        
        this.body.splice(0, this.body.length - this.initLen);
        
      }
      
      this.body.forEach(piece => {
        
        piece.display();
        
      }) 
      
    }
    
    handleKeys() {
      
      if (keyCode == RIGHT_ARROW && this.dir != 270) {
        
        this.dir = 90;
        
      }
      
      if (keyCode == LEFT_ARROW && this.dir != 90) {
        
        this.dir = 270;
        
      }
      
      if (keyCode == UP_ARROW && this.dir != 0) {
        
        this.dir = 180;
        
      }
      
      if (keyCode == DOWN_ARROW && this.dir != 180) {
        
        this.dir = 0;
        
      }
    
      
    }
    
    detectCollision() {
      
      if (this.x + 10 > width || this.y + 10 > height || this.x < 0 || this.y < 0) {
  
        gameState = GameStates.STOP;
        
      }
      
      if (this.x == fruit.x && this.y == fruit.y) {
        
        fruit.spawn();
        this.initLen += 3;
        
      }
      
      
        
        this.body.forEach(piece => {
  
          if (piece.x == this.x && piece.y == this.y) {
            
            gameState = GameStates.STOP;
  
          }
  
        })
      
    }
    
    
  }