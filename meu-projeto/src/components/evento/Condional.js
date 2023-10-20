
import {useState} from 'react'


function Condicional(e) {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function LimparEmail() {
        setUserEmail(" ")
    }


    function enviarEmail(e) {
        e.prevenDefault()
        setUserEmail(email)
    }
    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="digite seu email" onChange={(e) => setEmail(e.target.value)}/>

                <button type="submit" onClick={enviarEmail}>Enviar email
                </button>
                {userEmail && (
                    <div>
                        <p>o email do usuario é: {userEmail}</p>
                        <button onClick={LimparEmail}>LimparEmail</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}
export default Condicional