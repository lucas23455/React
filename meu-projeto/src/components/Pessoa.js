function Pessoa(nome,idade,profissao,foto){
    return(
        <div>
           <img src={foto} alt="{props.nome}"/>
           <h2>Nome: {nome}</h2>
           <p>Idade: {idade}</p>
           <p>Profisssao: {profissao}</p>
        </div>
    )
}
export default Pessoa