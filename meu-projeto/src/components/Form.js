import {useState} from 'react'


function Form() {
    function cadastrarUsuario(e){
        e.preventDefaut()
        console.log(name)
        console.log("cadastrou!")
    }

    const [name, setName] = useState('')
    const [password, setPassword]= useState()

    return(
        <div>
            <h1>Meu cadrastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name"
                        name="name"
                        placeholder="Digite o nome"
                    
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha">


                    </input>
                </div>
                <div>
                    <input type="submit" value="cadrastra"></input>
                </div>
            </form>
        </div>
    )
}
export default Form