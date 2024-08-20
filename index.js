let btn=document.querySelectorAll(".btn");
let game=document.querySelector(".game");
let msg=document.querySelector("#msg");
let reset=document.querySelector(".Reset");
let newGame=document.querySelector("#new_btn");
let msgContainer=document.querySelector(".msg_container");
const canvas=document.querySelector("#confetti");
//let hide=document.querySelectorAll(".hide");
const win_pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let turn0=true;
let count=0;
btn.forEach((btn) => {
    btn.addEventListener("click",()=>{
       if(turn0){
        btn.innerText="0";
        turn0=false;
       }else{
        btn.innerText="X";
        turn0=true;
       }
       count++;
       btn.disabled=true;

       checkWinner(count);
       
    });
});
const disableboxes=()=>{
    for(let buttons of btn)
    {
        buttons.disabled=true;
    }
};
const enableboxes=()=>{
    for(let buttons of btn)
    {
        buttons.disabled=false;
        buttons.innerText="";
    }
};
const showWinner=(winner) =>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const checkWinner=(count)=>{
    for(let patterns of win_pattern)
    {
        let posVal1=btn[patterns[0]].innerText;
        let posVal2=btn[patterns[1]].innerText;
        let posVal3=btn[patterns[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!="")
        {
            if(posVal1===posVal2 && posVal2===posVal3)
            {
                //console.log("winner",posVal1);
                showWinner(posVal1);

            }
            else if(posVal1!=posVal2 && posVal2!=posVal3 && count===9)
            {
                //console.log("Draw");
                showDraw();
            }
        }
    }
};
const showDraw=()=>{
    msg.innerText=`Match is Tie`;
    msgContainer.classList.remove("hide");
}
const resetGame=()=>{
   turn0=true;
   enableboxes();
   msgContainer.classList.add("hide");
};

reset.addEventListener("click",resetGame);

newGame.addEventListener("click",resetGame);

