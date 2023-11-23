var game = [];
var board = [];;
var whoGame = 0; //0 is the gamer
var check;
var gaming=true;
var level = 1;
var gameCPU = 1;
var whoStart = 1;


function cpu(){
    if(gaming){
        var m, n; //m is line and n is column
        if(level == 1){
            do{
                m = Math.round(Math.random() * 2);
                n = Math.round(Math.random() * 2);
            } while(game[m][n] != "");
            game[m][n] = "O";
        } else if(level == 2){
            //level 2
        }

        check = checkWon();
        updateBoard();
        if(check != ""){
            alert(check + " Venceu")
            gaming = false;
        }

        
        whoGame = 0;
    }
}

function checkWon(){
    var i, j; //i is line and j is column

    //check lines
    for(i = 0; i < 3; ++i){
        if((game[i][0] == game[i][1]) && (game[i][1] == game[i][2])){
            return game[i][0];
        }
    }

    //check columns
    for(j = 0; j < 3; ++j){
        if((game[0][j] == game[1][j]) && (game[1][j] == game[2][j])){
            return game[0][j];
        }
    }

    //check diagonals
    if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])){
        return game[0][0];
    } else if((game[0][2] == game[1][1]) && (game[1][1] == game[0][2])){
        return game[0][0];
    }
    return "";
}

function togame(p){
    if((gaming) && (whoGame == 0)){
        switch(p){
            case 1:
                if(game[0][0] == ""){
                    game[0][0] = "X";
                    whoGame = 1;
                }
            break;

            case 2:
                if(game[0][1] == ""){
                    game[0][1] = "X";
                    whoGame = 1;
                }
            break;

            case 3:
                if(game[0][2] == ""){
                    game[0][2] = "X";
                    whoGame = 1;
                }
            break;

            case 4:
                if(game[1][0] == ""){
                    game[1][0] = "X";
                    whoGame = 1;
                }
            break;

            case 5:
                if(game[1][1] == ""){
                    game[1][1] = "X";
                    whoGame = 1;
                }
            break;

            case 6:
                if(game[1][2] == ""){
                    game[1][2] = "X";
                    whoGame = 1;
                }
            break

            case 7:
                if(game[2][0] == ""){
                    game[2][0] = "X";
                    whoGame = 1;
                }
            break;

            case 8:
                if(game[2][1] == ""){
                    game[2][1] = "X";
                    whoGame = 1;
                }
            break;

            default: //Case 9
                if(game[2][2] == ""){
                    game[2][2] = "X";
                    whoGame = 1;
                }
            break;
        }

        if(whoGame == 1){
            updateBoard();
            check = checkWon();
            if(check != ""){
                alert(check + " Venceu")
                gaming = false;
            }
            cpu();
        }
    }
}

function updateBoard(){
    for(var l = 0; l < 3; ++l){
        for(var c = 0; c < 3; ++c){
            if(game[l][c] == "X"){
                board[l][c].innerHTML = "X";
                board[l][c].style.cursor = "default";
            } else if(game[l][c] == "O"){
                board[l][c].innerHTML = "O";
                board[l][c].style.cursor = "default";
            } else{
                board[l][c].innerHTML = "";
                board[l][c].style.cursor = "pointer";
            }
        }
    }
}

function start(){
    amerX = 0;
    gamerY = 0;
    //points

    gaming = true;
    gameCPU = 1;
    game = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    board = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];

}

window.addEventListener("load", start);