let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#btn");
let New_game = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let player1 = true;
let count = 0;
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8] ,
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if (player1){
            box.innerHTML = "X"
            player1 = false;
        }else{
            box.innerHTML = "O"
            player1 = true;
        }
        box.disabled = true;
        checkwinner();
    }); 
});
disabled = ()=>{
    for(let box of boxes){
    box.disabled = true;
    }
}
showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disabled();
}
checkwinner=()=>{
    for(let pattern of winning){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }

}

enablebox=()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
      }
}
resetgame = () =>{
    player1 = true;
    enablebox();
    msg.classList.add("hide");   
};

reset.addEventListener("click", resetgame);
New_game.addEventListener("click", resetgame);