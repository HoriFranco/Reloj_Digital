// Funcion flecha

const getHora = () =>{
    /// Sentencias Instrucciones
    const fecha = new Date(); // creación de objeto date
    // console.log(fecha.hetHours())
    const tiempo = {hora: fecha.getHours(), 
                    minuto: fecha.getMinutes(), 
                    segundo: fecha.getSeconds()
                }

    document.querySelector(".reloj").innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`
}


setInterval(getHora,1000)
//animacion

function modificarDesc() {
    let desc = document.querySelector("#modificar");
    setTimeout(()=>{
        desc.textContent = "Reloj Digital";
    } , 0)
    setTimeout(() => {
        desc.textContent = "Por Hori Franco";
    }, 3000)
    setTimeout(() => {
        desc.textContent = "Programador che :)";
    }, 6000)
    setTimeout(() => {
        desc.textContent = "Como estas?";
    }, 6000)
  }
  
  modificarDesc()
  setInterval(modificarDesc, 9000)