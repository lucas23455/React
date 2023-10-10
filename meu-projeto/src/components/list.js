
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
