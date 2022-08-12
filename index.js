let display= document.getElementById("display");
//Access button

let buttons= Array.from(document.getElementsByClassName("button"));
buttons.map((button)=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerHTML){
            case '=':
                try{
                display.innerHTML = eval(display.innerHTML);
                }
                catch{
                    display.innerHTML= display.innerHTML("Error");
                }
                break;
            case 'C':
                display.innerHTML="";
                break;
            case '←':
                display.innerHTML = display.innerHTML.slice(0,-1);
                break;

            default:
                display.innerHTML+= e.target.innerHTML;

        }
console.log(e);
console.log(e.target);
console.log(e.target.innerHTML);
    })
});