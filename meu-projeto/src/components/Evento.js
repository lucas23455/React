function Evento(){
    function meuEvento(){
        console.log("ola seu troxa")
    }


    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
export default Evento