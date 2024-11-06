const tempos_materia={ "Geografia": 2, "Matemática": 4, "Português": 4, "Projeto de Vida": 2, "Química": 2, "Educacao Física": 2, "História": 2, "Filosofia": 2, "Biologia": 2, "Inglês": 2, "Física": 2 }

const tempos_primeiro = [
    "Geografia", "Matemática", "Português", "Projeto de Vida", "Química", 
    "Educacao Física", "História", "Filosofia", "Biologia", 
    "Inglês", "Física"
]






const form_container = document.querySelector(".form_container")
tempos_primeiro.forEach(materia=>{
    const div_materia = document.createElement('div')
    let input_materia = document.createElement('input')
    let span_text =  document.createElement('span')
    span_text.textContent = materia
    input_materia.setAttribute('type', 'number')
    input_materia.setAttribute('value', 2)
    input_materia.setAttribute('id', `input_${materia}`)
    div_materia.appendChild(span_text)
    div_materia.appendChild(input_materia)

    form_container.appendChild(div_materia)


})
form_tempos = document.getElementById("form_tempos")
button_submit = document.getElementById("submit_tempos")

button_submit.addEventListener("click", (event)=>{
    event.preventDefault()
    let tempos = {}
    tempos_primeiro.forEach(materia=>{
        tempos[materia] =document.getElementById(`input_${materia}`).value
    })
})

let API_URL = 'https://apiprojeto-182l0l7uy-rodrigo-vitorino-dos-santos-projects.vercel.app'
// let API_URL = 'http://127.0.0.1:8000/quadro/?tempos_materia={ "Geografia": 2, "Matemática": 4, "Português": 4, "Projeto de Vida": 2, "Química": 2, "Educacao Física": 2, "História": 2, "Filosofia": 2, "Biologia": 2, "Inglês": 2, "Física": 2 }&ano=primeiro'
// let API_URL = 'https://apiprojeto-opg5sa0dm-rodrigo-vitorino-dos-santos-projects.vercel.app/quadro/?tempos_materia={ "Geografia": 2, "Matemática": 4, "Português": 4, "Projeto de Vida": 2, "Química": 2, "Educacao Física": 2, "História": 2, "Filosofia": 2, "Biologia": 2, "Inglês": 2, "Física": 2 }&ano=primeiro'
async function getQuadroHorarios(API_URL) {
    try{
        
        const fetchResponse = await fetch(API_URL);
        let quadroHorarios = await fetchResponse.json();
        // getQuadroHorarios = getQuadroHorarios.results;
        console.log(quadroHorarios)        
    }catch(error){
        console.error("Erro ao buscar os filmes:", error);
    }

}

getQuadroHorarios(API_URL)