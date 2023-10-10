import styles from './frase.module.css'


function frase(){
    return(
        <div className={styles.fraseContainer}>
            <p>Este é um componente com uma frase</p>
        </div>
    )
}

export default frase