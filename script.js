//CREAR TODOS LOS ARRAY
const array =[
    {id:"2", texto:"Owww, como me conoces akslj te amo loca. La proxima pista la tendras entre tus manos mañana, asi que por ahora descansa"},
    {id:"3", texto:"Muy biennn! Encontraste la pista lakjs, sabes que es mas gracioso aun, que al siguiente lugar al que tenemos que ir es el que esta escrito en la pista akljs."},
    {id:"4", texto:"Que buen artista que es Camilo lpm, ahora vamos a seguir con esto de lugares especiales. Tenemos que ir al lugar de la fortuna, donde conviven gatos y las personas ¿No lo sacas aun? aklsj ¿Donde festejamos el segundo mes?"},
    {id:"5", texto:"Y bueno, no estabamos solos, pero la vimos juntos alksj. Ahora tenemos que ir al lugar que nos salvo, a donde mas veces fuimos juntos y termino uniendonos ¿No sabes cual es? Pensala bien, lo tenes en tu nombre. Especificamente a donde fuimos la primera vez"},
    {id:"6", texto:"Bueno esa si fue la primera que vimos solos, alksj. Ahora vamos a ir a tu lugar favorito de comida rapida ¿Que te parece?"},
    {id:"7", texto:"Owww, que lindo que sepas escribir mi apellido aklsj. ¿Te acordar que una vez fuimos a ver libros? Genial! Solo espero que te acuerdes el libro que subiste a tus estados"},
    {id:"8", texto:"Ya vamos a ir algun dia, te lo prometo. Tenemos un solo problema ahora, necesitamos un aventon jeje, asi que yo que vos le pregunto a tu viejo si podemos ir a mi casa o mejor dicho a la plaza"},
    {id:"9", texto:"ALKSJ q hdp. Finalmente ya estamos terminando, te lo prometo. Ahora necesito que cierres les ojos y confies"}
]
 
//SISTEMA DE DESBLOQUEO
function desbloquearPuzzle(id){
    //Desbloquea y enfoca puzzle
    const puzzleActual = document.querySelector(".activo")
    puzzleActual.classList.remove("activo")

    const puzzle = document.getElementById("puzzle-"+id)
    puzzle.classList.add("desbloqueado")
    puzzle.classList.add("activo")
    puzzle.classList.remove("bloqueado")

    //Desbloquea candado
    const candado = document.getElementById("candado-"+id)
    const msj = document.getElementById("feedbackMsj")

    candado.classList.remove('cerrado')
    candado.classList.add('abierto')
    candado.textContent = "🔓"

    msj.textContent = "¡RESPUESTA CORRECTA!"
    msj.classList.remove("bg-danger")
    msj.classList.add("bg-success")
}

    const hoy = new Date()
    const fechaDesbloqueo = new Date(2026, 6, 5)
    console.log(fechaDesbloqueo)

    if (hoy >= fechaDesbloqueo) {
        desbloquearPuzzle("i")
    }

function Comprobar(){
    const input = document.getElementById("desbloqueo").value
    switch (input.toLowerCase()) {
        case "canserbero": //artista favorito - casa
            desbloquearPuzzle(array[0].id)
            alert("Desbloqueado")
            break;

        case "morfeta": //lugar donde festejamos el primer mes - colegio
            desbloquearPuzzle(array[1].id)
            alert("Desbloqueado")
            break;

        case "camilo": //el artista que nos une - morfeta
            desbloquearPuzzle(array[2].id)
            alert("Desbloqueado")
            break;

        case "minecraft": //primera peli que vimos juntos - lucky cat
            desbloquearPuzzle(array[3].id)
            alert("Desbloqueado")
            break;

        case "stitch": //primera peli que vimos solos - patio olmos(heladeria)
            desbloquearPuzzle(array[4].id)
            alert("Desbloqueado")
            break;

        case "zumstein": //mi apellido - patio olmos(mostaza)
            desbloquearPuzzle(array[5].id)
            alert("Desbloqueado")
            break;

        case "italia": //pais que ambos concordamos en visitar - patio olmos(libreria)
            desbloquearPuzzle(array[6].id)
            alert("Desbloqueado")
            break;

        case "clarita": //nombre del papercraft que le regale - plaza
            desbloquearPuzzle(array[6].id)
            alert("Desbloqueado")
            break;

        default:
            const msj = document.getElementById("feedbackMsj")
            msj.textContent = "¡RESPUESTA INCORRECTA!"
            msj.classList.add("bg-danger")
            msj.classList.remove("bg-success")
            alert("RESPUESTA INCORRECTA")
            break;
    }
}

array.forEach((e) => {
    const divPuzzle = document.createElement('div')
    const containerPuzzle = document.getElementById("container-puzzles")

    divPuzzle.innerHTML=`
            <div class="slide puzzle bloqueado card-body" id="puzzle-${e.id}">

                <div class="overlay fw-bold text-light">
                🔒 BLOQUEADO 🔒
                </div>

                <div class="contenido text-light my-auto">
                    <p>${e.texto}</p>
                </div>

            </div>
            `
    containerPuzzle.appendChild(divPuzzle)

    const divCandado = document.createElement('div')
    const containerCandado = document.getElementById("container-candados")
    
    divCandado.classList.add('col-2')
    divCandado.innerHTML=`
    <h3 id="candado-${e.id}" class="logos cerrado">🔒</h3>
    `
    containerCandado.appendChild(divCandado)
})
