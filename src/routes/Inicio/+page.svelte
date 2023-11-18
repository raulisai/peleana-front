<script>
    import { onMount } from "svelte";
  
  let canvas;
  let statusfichaActiva;
  let valueafter;
  let rowAfter;
  let colAfter;
  let tiro = 0;
  
  
  
  const boardColors = {
    7: "red",
    8: "blue",
    9: "green",
    6: "orange",
    1: "white",
    2: "purple",
    3: "white",
    4: "white",
    5: "darkgrey",
    0: "browngrey"
  };
  
  const numColors = {
    0: "black",
    2: "black",
    3: "white",
    4: "black"
  }
  
  
  
  const boardShape = [
      [8,1,1,1,1,1,7,1,1,7,1,1,1,1,1,7],
      [1,1,1,0,0,1,5,5,5,5,1,0,0,1,1,1],
      [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
      [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
      [8,5,1,0,0,0,0,0,0,0,0,0,0,1,5,6],
      [1,5,1,0,0,0,0,0,0,0,0,0,0,1,5,1],
      [1,5,1,0,0,0,0,0,0,0,0,0,0,1,5,1],
      [8,5,1,0,0,0,0,0,0,0,0,0,0,1,5,6],
      [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
      [1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
      [1,1,1,0,0,1,5,5,5,5,1,0,0,1,1,1],
      [9,1,1,1,1,1,9,1,1,9,1,1,1,1,1,6],
    ];
  
    const boardInfo=[
      [ 9, 8, 7, 6, 5, 4, 3, 2, 1,15,14,13,12,11,10, 9],
      [10, 1, 2, 0, 0, 7,16,16,16,16, 1, 0, 0, 3, 1, 8],
      [11, 3, 4, 5, 0, 6, 5, 4, 4, 3, 2, 0, 6, 4, 2, 7],
      [12, 0, 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 0, 6],
      [13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      [14, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 7, 4],
      [15,16, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,16, 3],
      [ 1,16, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,16, 2],
      [ 2,16, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,16, 1],
      [ 3,16, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,16,15],
      [ 4, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,14],
      [ 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,13],
      [ 6, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 0,12],
      [ 7, 2, 4, 6, 0, 2, 3, 4, 4, 5, 6, 0, 5, 4, 3,11],
      [ 8, 1, 3, 0, 0, 1,16,16,16,16, 7, 0, 0, 2, 1,10],
      [ 9,10,11,12,13,14,15, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ];
  
  
  onMount(() => {
    drawBoard();
  });
  
  function drawBoard() {
    const ctx = canvas.getContext("2d");
   
      // Tamaño de cada celda en el canvas
      const cellSize = canvas.width / boardShape[0].length;
  
      for (let i = 0; i < boardShape.length; i++) {
        for (let j = 0; j < boardShape[i].length; j++) {
          if (boardShape[i][j] !== 0) { 
  
            const x = j * cellSize;
            const y = i * cellSize;
            ctx.beginPath();
            ctx.fillStyle = boardColors[boardShape[i][j]]; // Puedes cambiar este color
            // Dibujar un rectángulo coloreado
            ctx.fillRect(x, y, cellSize, cellSize);
            // Establecer el color del borde del rectángulo
            ctx.strokeStyle = "black"; // Puedes cambiar este color
            // Dibujar el borde del rectángulo
            ctx.strokeRect(x, y, cellSize, cellSize);
            // Establecer el color del texto
            ctx.font = "20px Arial";
            ctx.fillStyle = "black"; // Puedes cambiar este color
            // Dibujar el número en el centro de la celda
            ctx.fillText(boardInfo[i][j], x + cellSize / 2, y + cellSize / 2);
            ctx.closePath();
          }
          
        }
      }
  }
  
  function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    const col = Math.floor(x / (canvas.width / 16));
    const row = Math.floor(y / (canvas.height / 16));
  
  
  
    if(statusfichaActiva){
      boardShape[rowAfter][colAfter]=valueafter;
      valueafter = boardShape[row][col];
      rowAfter = row;
      colAfter = col;
      boardShape[row][col] = 2;
  
  
    }else{
      if(tiro>0){
        boardShape[rowAfter][colAfter]=valueafter;
      }
      //respaldo
      rowAfter = row;
      colAfter = col;
    valueafter = boardShape[row][col];
    
    
    
    //poner color
    boardShape[row][col] = 2;
    }
  
    statusfichaActiva = !statusfichaActiva;
    tiro++;
  
  // Volver a dibujar el tablero después de cambiar el color
  drawBoard();
  }
  </script>
  
  <style>
    canvas {
      border: 1px solid #000;
    }
  </style>
  
  
  <div>
    <canvas bind:this={canvas} id="game-canvas" width="750" height="750" on:click={handleClick}></canvas>
  
  
  
    {statusfichaActiva}
    {"valor anterior :"+valueafter}
  </div>
  