import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Spin} from 'antd'

import { getProducts } from 'store/modules/product/product'

import ProductInfo from "components/product-info";

import "./index.less"

const Index = () => {
  const list = useSelector(state => state.product.list)
  const loading = useSelector(state => state.product.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="Index" data-test="Index">
      <Spin spinning={loading}>
        <Row>
          <Col>
            { list.length ? list?.map((product, index) => (
                <div key={index}>
                  <ProductInfo name={product.productname} brand={product.brand} img={product.productimage} seller={product.seller}/>
                </div>
            )) : null}
          </Col>
        </Row>
      </Spin>

    </div>
  )
}




export default Index