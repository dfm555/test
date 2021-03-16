import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, checkProps} from 'utils';

import ProductInfo from './index'

describe('ProductInfo Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                img: 'image.com',
                brand: 'brand',
                name: 'name'
            }
            const propsError = checkProps(ProductInfo, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Renders', function () {
        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                img: 'image.com',
                brand: 'brand',
                name: 'name'
            }
            wrapper = shallow(<ProductInfo {...props} />)
        })

        it('Should render', function () {
            const component = findByTestAttr(wrapper, 'ProductInfo');
            expect(component.length).toBe(1);
        })
    })
})
