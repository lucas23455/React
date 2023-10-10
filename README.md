# Introduçao de React

- Uma biblioteca JS para criaçao de interfaces;
- utilizaçao para construir SPAs (Single Page Application);
  <br>aplicações web em que o usuário interage com uma única página
- Baseado em componentes;
- Utiliza o JSX para renderizar HTML;
  <br>é uma extensão JavaScript que permite a criação de árvores DOM usando uma sintaxe semelhante a XML
- E aplica o virtual DOM para realizar as alteraçoes de DOM
- Podemos adicionar a um projeto ou criar um projeto com ele

# Como instalar o React

- Para instalar o react vamos utilizar uma ferramenta chamada <a href="https://create-react-app.dev/" target="_blank">Create React app</a>
- Recebemos todos os arquivos da biblioteca e temos como executa-la
- Para utilizar precisamos do <a href="https://nodejs.org/en" target="_blank">node e npm</a>;
- Esta ferramenta tambem otimiza o app gerado para produçao;
- É possivel iniciar a aplicaçao com npm start

Para inicializar usamos esse comando no terminal para criar pastas no vs code

```
npx create-react-app meu projeto
```
Para inicializar o pasta
```
cd .\meu projeto\
```
Para limpar o terminal 
```
clean
```
Execuçao do script e depois ele ira para site do React
```
npm start
```

# Entendendo o JSX

- O jSX é como um html, porem dentro do codigo JavaScript
- É a principal maneira de escrever HTML com o React
- Podemos interpolar variaveis, inserindo ela entre {};
- É possivel tambem executar funcoes em jSX;
- Inserir valores em atributos de tags tambem é valido em JSX

Voce ira pro app.js e pode colocar variaveis funcoes e ulr no JavaScript com tags de HTML

```HTML
import './App.css';

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
      <p>ol</p>
    </div>
  );
}

export default App;


```

# Componentes
- Permite dividir a aplicaçao em partes
- Os componestes rederizam JSX ,assim como App.js (que é um componente);
- Precisamos criar um arquivo de componente;
- E importa-lo onde precisamos utilizar;
- Normalmente ficam em uma pasta chamada componests;

criar uma pasta chamada "componests" e dentro dela criar um JavaScript "HelloWorld" e "frase"

```JS

function HellWord(){
  
    return (
       <div>
        <h1>Meu primeiro componente</h1>
       </div> 
    )    
}

export default HellWord

```
```JS

function frase(){ 

  return(
        <div>
            <p>Este é um componente com uma frase</p>
        </div>
    )
}

export default frase
```

E importar esse arquivo em App.js e colocar "HellWord" "frase"


```JS
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
```

# Props
- As props são valores passados para componentes;
- Podemos deixa-los dinamicos;
- Ou seja, mudando a execuçao por causa do valor da prop;
- O valor é passado como um atributo na chamada do componeste;
- E precisa ser resgatado dentro de uma propriedade/argumento
  (chamada props na funcao de definiçao do componente)
- As props somente de leitura


Cria um "SayMyName.js"
```js
function SayMyName(props){
    return(
        <div>
            <p>
                <p>Fala ai {props.nome},suave?</p>
            </p>
        </div>
    )
}
export default SayMyName
```
importa-o assim voce pode colocar o atributo "nome" para chama-lo
```js
import './App.css'
import SayMyName from './components/SayMyName';


function App(){
  return(
    <div className="App">
       <SayMyName nome="Lucas"/>
    </div>
  )
}
export default App;

```
E voce pode criar uma variavel e chama-lo no componente "SayMyName"
```js
import './App.css'
import SayMyName from './components/SayMyName';


function App(){
  const nome= "maria"
  return(
    <div className="App">
       <SayMyName nome={nome}/>
    </div>
  )
}
export default App;

```
Para facilitar, podemos colocar os atributos dentro de Pessoa ao inves de "Props" facilitando a escrita
```js
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

```

```js
import './App.css'
import Pessoa from './components/Pessoa';


function App(){
  return(
    <div className="App">
      <Pessoa 
        nome="Lucas"
        idade ="21"
        profissao ="programador"
        foto="https://via.placeholder.com/150"
        />
    </div>
  )
}
export default App;
```
# Adionando CSS
- O CSS pode ser adionado de forma global na aplicaçao, por meio do arquivo index.css por exemplo;
- Porem é possivel estilizar a nivel de componentes;
- Utilizamos o CSS modules para isso;
- Basta criar um arquivo como: Components.module.css;
- E chamar este CSS no componente;

Escopo global "index.css"
```css
body{
  padding: 50px;
  background: rgb(137, 109, 150);
}

h1{
  color: aqua;
}
```

```js
import './App.css'


function App(){
  return(
    <div className="App">
      <h1>Testando CSS</h1>   
    </div>
  )
}
export default App;
```
Ou criamos um "frase.module.css" dentro da pasta "components"
```css
.fraseContainer{
    background-color: #333;
    border: 1px solid #111;
}

.fraseContent{
    color: #fff;
    background-color: #333;
    margin: 0;

}
````
importamos em "frase.js"
```css
import styles from './frase.module.css'

function frase(){
    return(
        <div className={styles.fraseContainer}>
            <p>Este é um componente com uma frase</p>
        </div>
    )
}
export default frase
```
e depois importamos em "App.js"
```css
import './App.css'
import frase from './components/frase'



function App(){
  return(
    <div className="App">
      <h1>Testando CSS</h1> 
      <frase/> 
      <frase/> 
    </div>
  )
}
export default App;
```

# Fragmentos
- Os reacts Fragments permite a criaçao de um componente sem elemento pai;
- O propósito é descomplicar os nó do DOM
- A sintaxe é <> e </>, não há nome para a tag;
- Criamos no proprio JSX;

Criamos "List.js" e os fragements seriam "tags sem nomes"
```js
function List(){
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
            </ul>
        </>
    )
}
export default List
```
E importamos
```js
import './App.css'
import list from './components/list';

function App(){
  return(
    <div className="App">
      <list/>
    </div>
  )
}
export default App;
```
# Avançamdo em props
- Podemos definir tipos para as props ,realizando uma especie de validaçao;
- Definimos em um objeto chamado propsTypes no proprio componente;
- E ainda há a possiblidade de definir um valor padrao;
- Neste caso utilizamos o objeto defaultProps;

Metodos mais avançados de Props
```js
import PropTypes from 'prop-types'

function item(marca ,ano_lancamento){
    return(
        <>
        <li>{marca}-{ano_lancamento}</li>
        </>
    )
}
item.propTypes={
  marca: PropTypes.string,
}

export default item
```
```js
import item from "./item";

function list() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <item marca="ferrari"ano_lancamento={1984}/>
                <item marca="fiat" ano_lancamento={1962}/>
            </ul>
        </>
    );
}

export default list;
```
# Eventos
- Os eventos de react sao os mesmo eventos do DOM;
- Ou sejam temos eventos para responder a um click;
- O evento é atrelado a uma tag que irá executa-lo;
- Geralmente um metodo é atribuido ao evento;
- Este metodo deve ser criado no componente;

Criamos um arquivo componentes "Evento.js" usando "onClick"
```js
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
    )
}
export default Evento
```

usando o "onsubmit"
```js
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
```
E depois importamos
```js
import './App.css'
import Evento from './components/Evento';
import Form  from './components/Form';

function App(){
  return(
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form/>
    </div>
    
  )
}
export default App;
```



