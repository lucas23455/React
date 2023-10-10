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