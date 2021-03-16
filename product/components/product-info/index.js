import React, {useState, useCallback} from 'react'
import {string} from 'prop-types'
import Image from "next/image";
import {Divider} from "antd";

import './style.less'

const ProductInfo = ({img, brand, name, seller}) => {

    const [like, setLike] = useState(false)

    const likeProduct = useCallback(() => {
        setLike(!like)
    }, [like])

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
            <div className={`ProductInfo-likeProduct ${like ? 'ProductInfo-dataText--green' : 'ProductInfo-dataText--gray'}`}
                  onClick={likeProduct}>
                {like ? (<span key={like}>
                    <i  className={`fas fa-heart fa-2x`}/>
                </span>) : (
                    <span>
                         <i className={`far fa-heart fa-2x`}/>
                    </span>
                   )}
            </div>
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
