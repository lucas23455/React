
import './App.css'
import HellWord from './components/HelloWorld'
import frase from './components/frase'

function App() {
  const name= "lucas"
  const newName= name.toLowerCase()

  function soma(a,b){
      return a+b
  }
const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
     <h2>alterando o JSX</h2>
     <p>ola,{newName}</p>
     <p>Soma: {soma(3,7)} </p>
     <img src="{url}}" alt="minha imagem"/>
     
     <HellWord/>
     <frase/>
    </div>
  );
}

export default App;
