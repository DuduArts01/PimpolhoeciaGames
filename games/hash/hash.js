var game = [];
var board = [];;
var whoGame = 0; //0 is the gamer
var check;
var gaming=true;
var level = 1;
var gameCPU = 1;
var whoStart = 1;
var play = 0;
let pointX = document.getElementById("pointX")
let pointO = document.getElementById("pointO")
let pointDraw = document.querySelector("div#draw")
var x = 0
var o = 0;
var draw = 0;

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
        //attack
            //line 1
            if((game[0][0] == "O") && (game[0][1] == "O") && (game[0][2] == "")){
                game[0][2] = "O";
            } else if((game[0][0] == "O") && (game[0][1] == "") && (game[0][2] == "O")){
                game[0][1] = "O";
            } else if((game[0][0] == "") && (game[0][1] == "O") && (game[0][2] == "O")){
                game[0][0] = "O";
            } else
            //line 2
            if((game[1][0] == "O") && (game[1][1] == "O") && (game[1][2] == "")){
                game[1][2] = "O";
            } else if((game[1][0] == "O") && (game[1][1] == "") && (game[1][2] == "O")){
                game[1][1] = "O";
            } else if((game[1][0] == "") && (game[1][1] == "O") && (game[1][2] == "O")){
                game[1][0] = "O";
            } else
            //line 3
            if((game[2][0] == "O") && (game[2][1] == "O") && (game[2][2] == "")){
                game[2][2] = "O";
            } else if((game[2][0] == "O") && (game[2][1] == "") && (game[2][2] == "O")){
                game[2][1] = "O";
            } else if((game[2][0] == "") && (game[2][1] == "O") && (game[2][2] == "O")){
                game[2][0] = "O";
            } else

            //column 1
            if((game[0][0] == "O") && (game[1][0] == "O") && (game[2][0] == "")){
                game[2][0] = "O";
            } else if((game[0][0] == "O") && (game[1][0] == "") && (game[2][0] == "O")){
                game[1][0] = "O";
            } else if((game[0][0] == "") && (game[1][0] == "O") && (game[2][0] == "O")){
                game[0][0] = "O";
            } else
            //column 2
            if((game[0][1] == "O") && (game[1][1] == "O") && (game[2][1] == "")){
                game[2][1] = "O";
            } else if((game[0][1] == "O") && (game[1][1] == "") && (game[2][1] == "O")){
                game[1][1] = "O";
            } else if((game[0][1] == "") && (game[1][1] == "O") && (game[2][1] == "O")){
                game[0][1] = "O";
            } else
            //column 3 
            if((game[0][2] == "O") && (game[1][2] == "O") && (game[2][2] == "")){
                game[2][2] = "O";
            } else if((game[0][2] == "O") && (game[1][2] == "") && (game[2][2] == "O")){
                game[1][2] = "O";
            } else if((game[0][2] == "") && (game[1][2] == "O") && (game[2][2] == "O")){
                game[0][2] = "O";
            } else
            //diagonal 1
            if((game[0][0] == "O") && (game[1][1] == "O") && (game[2][2] == "")){
                game[2][2] = "O";
            } else if((game[0][0] == "O") && (game[1][1] == "") && (game[2][2] == "O")){
                game[1][1] = "O";
            } else if((game[0][0] == "") && (game[1][1] == "O") && (game[2][2] == "O")){
                game[0][0] = "O";
            } else
            //diagonal 2
            if((game[0][2] == "O") && (game[1][1] == "O") && (game[2][0] == "")){
                game[2][0] = "O";
            } else if((game[0][2] == "O") && (game[1][1] == "") && (game[2][0] == "O")){
                game[1][1] = "O";
            } else if((game[0][2] == "") && (game[1][1] == "O") && (game[2][0] == "O")){
                game[0][2] = "O";
            } else

        //defence
            //line 1
            if((game[0][0] == "X") && (game[0][1] == "X") && (game[0][2] == "")){
                game[0][2] = "O";
            } else if((game[0][0] == "X") && (game[0][1] == "") && (game[0][2] == "X")){
                game[0][1] = "O";
            } else if((game[0][0] == "") && (game[0][1] == "X") && (game[0][2] == "X")){
                game[0][0] = "O";
            } else
            //line 2
            if((game[1][0] == "X") && (game[1][1] == "X") && (game[1][2] == "")){
                game[1][2] = "O";
            } else if((game[1][0] == "X") && (game[1][1] == "") && (game[1][2] == "X")){
                game[1][1] = "O";
            } else if((game[1][0] == "") && (game[1][1] == "X") && (game[1][2] == "X")){
                game[1][0] = "O";
            } else
            //line 3
            if((game[2][0] == "X") && (game[2][1] == "X") && (game[2][2] == "")){
                game[2][2] = "O";
            } else if((game[2][0] == "X") && (game[2][1] == "") && (game[2][2] == "X")){
                game[2][1] = "O";
            } else if((game[2][0] == "") && (game[2][1] == "X") && (game[2][2] == "X")){
                game[2][0] = "O";
            } else

            //column 1
            if((game[0][0] == "X") && (game[1][0] == "X") && (game[2][0] == "")){
                game[2][0] = "O";
            } else if((game[0][0] == "X") && (game[1][0] == "") && (game[2][0] == "X")){
                game[1][0] = "O";
            } else if((game[0][0] == "") && (game[1][0] == "X") && (game[2][0] == "X")){
                game[0][0] = "O";
            } else
            //column 2
            if((game[0][1] == "X") && (game[1][1] == "X") && (game[2][1] == "")){
                game[2][1] = "O";
            } else if((game[0][1] == "X") && (game[1][1] == "") && (game[2][1] == "X")){
                game[1][1] = "O";
            } else if((game[0][1] == "") && (game[1][1] == "X") && (game[2][1] == "X")){
                game[0][1] = "O";
            } else
            //column 3 
            if((game[0][2] == "X") && (game[1][2] == "X") && (game[2][2] == "")){
                game[2][2] = "O";
            } else if((game[0][2] == "X") && (game[1][2] == "") && (game[2][2] == "X")){
                game[1][2] = "O";
            } else if((game[0][2] == "") && (game[1][2] == "X") && (game[2][2] == "X")){
                game[0][2] = "O";
            } else
            //diagonal 1
            if((game[0][0] == "X") && (game[1][1] == "X") && (game[2][2] == "")){
                game[2][2] = "O";
            } else if((game[0][0] == "X") && (game[1][1] == "") && (game[2][2] == "X")){
                game[1][1] = "O";
            } else if((game[0][0] == "") && (game[1][1] == "X") && (game[2][2] == "X")){
                game[0][0] = "O";
            } else
            //diagonal 2
            if((game[0][2] == "X") && (game[1][1] == "X") && (game[2][0] == "")){
                game[2][0] = "O";
            } else if((game[0][2] == "X") && (game[1][1] == "") && (game[2][0] == "X")){
                game[1][1] = "O";
            } else if((game[0][2] == "") && (game[1][1] == "X") && (game[2][0] == "X")){
                game[0][2] = "O";
            } else {
                if(play < 8){
                    do{
                        m = Math.round(Math.random() * 2);
                        n = Math.round(Math.random() * 2);
                    } while(game[m][n] != "");
                    game[m][n] = "O";
                } else {
                    for(var x = 0; x < 3; ++x){
                        for(var y = 0; y < 3; ++y){
                            if(game[x][y] == ""){
                                game[x][y] = "O";
                            }
                        }
                    }
                }
                
            }

    
        }

        check = checkWon();
        updateBoard();
        ++play;
        if(check != ""){
            //alert(check + " Venceu")
            gaming = false;
        } else if(play >= 9){
            ++draw;
            pointDraw.innerHTML = draw
            alert("Empate")
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
            if(game[i][0] == "X"){
                ++x;
                alert("X Venceu")
                pointX.innerHTML = x            
            } else if(game[i][0] == "O"){
                ++o;
                alert("O Venceu")
                pointO.innerHTML = o
            }
            return game[i][0];
        }
    }

    //check columns
    for(j = 0; j < 3; ++j){
        if((game[0][j] == game[1][j]) && (game[1][j] == game[2][j])){
            if(game[0][j] == "X"){
                ++x;
                alert("X Venceu")
                pointX.innerHTML = x            
            } else if(game[0][j] == "O"){
                ++o;
                alert("O Venceu")
                pointO.innerHTML = o
            }
            return game[0][j];
        }
    }

    //check diagonals
    if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])){
        if(game[0][0] == "X"){
            ++x;
            alert("X Venceu")
            pointX.innerHTML = x            
        } else if(game[0][0] == "O"){
            ++o;
            alert("O Venceu")
            pointO.innerHTML = o
        }
        return game[0][0];
    } else if((game[0][2] == game[1][1]) && (game[1][1] == game[2][0])){
        if(game[0][2] == "X"){
            ++x;
            alert("X Venceu")
            pointX.innerHTML = x           
        } else if(game[0][2] == "O"){
            ++o;
            alert("O Venceu")
            pointO.innerHTML = o
        }
        return game[0][2];
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
                //alert(check + " Venceu")
                point();
                gaming = false;
            } 
            ++play;
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
    play = 0;
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
    updateBoard();

    if(whoStart == 1){
        whoStart = 0;
        whoGame = whoStart;
        document.getElementById("who_start").innerHTML = "Jogador"
    } else{
        whoStart = 1;
        whoGame = whoStart;
        document.getElementById("who_start").innerHTML = "CPU"
        cpu();
    }
}

window.addEventListener("load", start);

function clickChoose(){
    if(bot.style.display == "block"){
        bot.style.display = "none"
        choose.style.display = "block"
    } else{
        bot.style.display = "block" 
        choose.style.display = "none"  
        start()
        x = 0;
        o = 0;
        draw = 0;
        pointO.innerHTML = o
        pointX.innerHTML = x
        pointDraw.innerHTML = draw
    }
}

function clickbackChoose(){
    if(bot.style.display == "block"){
        bot.style.display = "none"
        levels.style.display = "none"
        choose.style.display = "block"
    } else{
        bot.style.display = "block" 
        choose.style.display = "none"  
    }

    if(levels.style.display == "block"){
        levels.style.display = "none"
    } else{
        levels.style.display = "block" 
    }
}

function clickLevel1(){
    level = 1
    levels.style.display = "none"
}

function clickLevel2(){
    level = 2
    levels.style.display = "none"
}








