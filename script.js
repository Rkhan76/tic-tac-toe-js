
      let playerName = "A"
      let playerTurn = 'x'
      const gameboard = Array(9).fill("");
      const winCondition = [
          [0, 1, 2],
          [3, 4, 5], 
          [6, 7, 8], 
          [0, 3, 6], 
          [1, 4, 7], 
          [2, 5, 8], 
          [0, 4, 8], 
          [2, 4, 6], 
        ]

      function handlePlayerTurn() {
        playerTurn = playerTurn == 'x' ? 'o' : 'x'
        return;
      }

      function showPlayerTurn(){
        let player = document.getElementById('playerName')
        playerName = playerName == "A" ? "B" : "A"
        player.innerText = `Player ${playerName} turn`
      }

      function showPlayerWin(){
        let player = document.getElementById('playerName')
        player.innerHTML = `Player ${playerName} win`
        return;
      }

      function winConditionCheck() {
        for(let i=0; i<winCondition.length; i++){
          let [a,b,c] = winCondition[i];
          if(gameboard[a] != "" && gameboard[a]===gameboard[b] && gameboard[a]===gameboard[c]){
            return true;
          }
        }
        return false;
      }

      function updateGameboard(){
        const valueOfblock = document.getElementsByClassName('cell');
        for(let i=0;i<gameboard.length;i++){
          gameboard[i] = valueOfblock[i].innerText;
        }
      }

      function handleClick(cell){
        if(winConditionCheck() === true){
          return
        }
        if(cell.innerText != "") {
          console.log("you have done it")
          return; 
        }
        cell.innerText = playerTurn;
        handlePlayerTurn();
        updateGameboard();
        if(winConditionCheck() === true){
          showPlayerWin();
          return
        }
        showPlayerTurn()
      }

      function resetButton(){
        for (let i = 0; i < gameboard.length; i++) {
          gameboard[i] = "";
          
        }
        let cell = document.getElementsByClassName('cell');
        for (let i = 0; i < gameboard.length; i++) {
            cell[i].innerText = "";
        }
        playerName = "A"
        playerTurn = 'x'
        let resetPlayerturn = document.getElementById("playerName")
        resetPlayerturn.innerText = "Player A turn"  
      }
    