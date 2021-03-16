import React, {useState, useCallback} from 'react'
import {array} from 'prop-types'
import {Progress} from 'antd';

import './style.less'

const Talle = ({data}) => {

    const [percent, setPercent] = useState(0)
    const [sizeSelected, setSizeSelected] = useState(null)

    const showQuantity = useCallback((quantity, size) => {
        const value = 100 + (quantity)
        setPercent(value)
        setSizeSelected(size)
    }, [setPercent, setSizeSelected])


    return <div className='Talle' data-test='Talle'>
        <h4 className="Talle-title">
            Talle
        </h4>
        <div className="Talle-container">
            {data.map((value) => (
                <div className={`Talle-size ${sizeSelected === value.size ? 'Talle-size--selected' : ''}`} key={value.id}
                     onClick={() => showQuantity(value.quantity, value.size)}>{value.size}</div>
            ))}
        </div>
        <div className="Talle-progress">
            <Progress percent={percent} showInfo={false} strokeColor="gray"/>
        </div>
    </div>

}

Talle.propTypes = {
    data: array,
}

export default Talle
