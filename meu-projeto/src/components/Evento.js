import Button from "./evento/Button"



function Evento() {
    function meuEvento(){
        console.log("Ativando o primeiro evento")
    }
    function segundoEvento() {
        console.log("segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text="primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
    
        </div>
    )
}
export default Evento