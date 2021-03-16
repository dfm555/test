import React from 'react'
import {string} from 'prop-types'
import Image from "next/image";
import {Divider} from "antd";

import './style.less'

const ProductInfo = ({img, brand, name, seller}) => {
    return <div className='ProductInfo' data-test='ProductInfo'>
        <div className="ProductInfo-image">
            <Image src={img} height={620} width={428} alt="Product Image"/>
        </div>
        <div className="ProductInfo-content">
            <div className="ProductInfo-data">
                <h2 className="ProductInfo-dataText--bold">
                    {brand}
                </h2>
                <p className="ProductInfo-dataText ProductInfo-dataText--gray">{name}</p>
                <p className="ProductInfo-dataText ProductInfo-dataText--gray">Vendido y entregado:
                    <span className="ProductInfo-dataText--green ProductInfo-dataText--bold"> {seller}</span></p>
            </div>
            <i className="far fa-heart fa-2x ProductInfo-dataText--gray"/>
        </div>
        <Divider/>
    </div>
}

ProductInfo.propTypes = {
    img: string.isRequired,
    brand: string.isRequired,
    name: string.isRequired,
    seller: string
}

export default ProductInfo
