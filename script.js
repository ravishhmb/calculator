const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".value");
let screenValue = "";
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if(buttonText == "*"){
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "C"){
            screenValue = "";
            screen.value = screenValue;
            
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue);
            screenValue = "";
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}