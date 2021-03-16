import React from 'react'
import { string } from 'prop-types'
import './style.scss'

const Talle = () => {
    return <div className='Talle' data-test='Talle'>Talle Component</div>
}

Talle.propTypes = {
	example: string,
}

export default Talle
