const container = document.querySelector('#container');

let rows = document.querySelector("gridRow");
let cell = document.querySelector("cell");


function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for ( c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    container.appendChild(cell).classList.add('grid-item');
  };
};
makeGrid(16, 16);

function makeCanvas(){
  let grid = document.querySelector('#container');
  let size = parseInt(document.querySelector('#sizeInput').value);
  if (size <= 0 || size > 80 || isNaN(size)){
      alert("Size should be a number between 1-80");
  }else{
        grid.querySelectorAll('*').forEach(e => e.remove());
      makeGrid(size,size);
  }
}


function doGrey(){
const cell = document.querySelectorAll('.grid-item');
    cell.forEach((cell) => {
      cell.onmouseover = e => {
       e.target.style['background-color'] = "rgb(128,128,128)";
        }
    })
}

function doBlack(){
  const cell = document.querySelectorAll('.grid-item');
      cell.forEach((cell) => {
        cell.onmouseover = e => {
         e.target.style['background-color'] = "rgb(0,0,0)";
          }
      })
  }

  function doRainbow(){
    const cell = document.querySelectorAll('.grid-item');
      cell.forEach((cell) => {
        cell.onmouseover = e => {
         e.target.style['background-color'] = `${'#' +Math.floor(Math.random()*16777215).toString(16)}`;
          }
      })
  }
    

function clearCanvas(){
  document.getElementById("container").innerHTML="";
}
