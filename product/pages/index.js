import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Spin, Collapse} from 'antd'

import {getProducts} from 'store/modules/product/product'

import ProductInfo from "components/product-info";
import Talle from "components/talle";
import SocialButtons from "components/social-buttons";

import "./index.less"

const { Panel } = Collapse;

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
                        {list.length ? list?.map((product, index) => (
                            <div key={index}>
                                <ProductInfo name={product.productname} brand={product.brand} img={product.productimage}
                                             seller={product.seller}/>
                                <Talle data={product.sizes}/>
                                <SocialButtons twitterLink={""} facebookLink={""} whatsappLink={""}/>
                                <Collapse accordion bordered={false} activeKey={1} expandIconPosition="right">
                                    <Panel header="DESCRIPTION" key="1">
                                        <p dangerouslySetInnerHTML={{__html: product.description}}/>
                                    </Panel>
                                    <Panel header="DETALLE DEL PRODUCTO" key="2">
                                    </Panel>
                                </Collapse>,
                            </div>
                        )) : null}
                    </Col>
                </Row>
            </Spin>

        </div>
    )
}


export default Index