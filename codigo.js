window.addEventListener("load",function(){
 
    let btns = document.querySelectorAll(".bPpt");

    btns.forEach((boton)=>{
    boton.addEventListener("click",juego);
})

})

function juego(){

    let pc = Math.floor((Math.random() * 3) + 1)

    let resultado = retornarRsultado(this.value,pc);

    mostrarResultadoPC(pc);

    mostrarResultado(resultado);

}

function retornarRsultado(valorBoton,pc){

    if(valorBoton == pc)
    {
        return "Empate";
    }
    else if((valorBoton == 2 && pc == 1) | (valorBoton == 3 && pc == 2) | (valorBoton == 1 && pc == 3))
    {
        return "Ganaste"
    }
    else
    {
        return "Perdiste"
    }
}

function mostrarResultadoPC(pc)
{

    let ePC = document.getElementById("ePC")
    let imgpc = document.createElement("img");

    if(ePC.lastChild)
    {
        ePC.removeChild(ePC.lastChild)
    }

    if(pc==1)
    {
       imgpc.src = "imgs/Piedra.png"
    }
    else if(pc==2)
    {
        imgpc.src = "imgs/Papel.png"
    }
    else
    {
        imgpc.src = "imgs/Tijera.png"
    }

    ePC.style.border = "3px solid black"
    ePC.style.backgroundColor = "rgb("+ 179 +","+ 7 +"," + 7 +")";
    ePC.appendChild(imgpc);
}

function mostrarResultado(resultado)
{
  let mostrar = document.getElementById("resultado");
  mostrar.innerText = resultado; 
}