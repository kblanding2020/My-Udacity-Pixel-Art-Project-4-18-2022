// Select color input
// Select size input
const row = document.getElementById('inputHeight');
const cell = document.getElementById('inputWidth');
const grid = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()

//makeGrid Funciton uses two nested for loops to create a grid the size the user chooses
function makeGrid() {
  for (let i = 0; i < row.value; i++){
      //Creates a row
      let rows =  document.createElement("tr");

      for (let g = 0; g < cell.value; g++){
        //Creates a cell and adds the "on click" attribute to each one
          let cells = document.createElement('td');
          cells.setAttribute("onclick", "this.style.backgroundColor=changeColor()")
          rows.appendChild(cells);
      //Adds it to the pixel canvas
      grid.appendChild(rows);
      }
  }
}

//Adds functionality to the submit button using the addEventListener method
form.addEventListener('submit', function(event){
  grid.innerHTML = '';
  event.preventDefault();
  makeGrid();
})

//Change color function
function changeColor(){
  const colorPicker = document.getElementById('colorPicker').value;
  return colorPicker;
}
