function Form(){
    function cadastrarUsuario(e){
        e.preventDefaut()
        console.log("cadastrou!")
    }
    return(
        <div>
            <h1>Meu cadrastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o nome"></input>
                </div>
                <div>
                    <input type="submit" value="cadrastra"></input>
                </div>
            </form>
        </div>
    )
}
export default Form