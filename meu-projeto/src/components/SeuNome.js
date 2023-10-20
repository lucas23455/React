function SeuNome({setNome}) {
    
    return (
        
        <div>
            <p>digite seu nome</p>
            <input type="text" placeholder="qual seu nome?" onChange={(e)=> setNome(e.target.value)} />
            
      </div>  
    )
}
export default SeuNome