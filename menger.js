const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
const squareUnit = 4;
const squareSetSize = 9;

function createCarpet(level, xOffset = 0, yOffset = 0){
  if(level==0){
    //draw a rectangle
    context.fillRect(xOffset,yOffset,squareUnit, squareUnit);
  }else{
    //caluclate the level offset
    let levelOffset = Math.pow(3, level-1)*squareUnit;
    let x, y;
    //go through each position in the square and calculate its position
    for(let i = 0;i<squareSetSize;i++){
      // skip the center square
      if(i!=4){
        //get the x and y position within the local square
        x = i%3;
        y = Math.floor(i/3);
        createCarpet(level-1, xOffset+(levelOffset*x),yOffset+(levelOffset*y));
      }
    }
  }
}

//create a menger carpet
createCarpet(4);
