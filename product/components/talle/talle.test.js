import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from 'utils';

import Talle  from './index'

describe('Talle Component', () => {
	describe('Checking PropTypes', () => {
		it('Should NOT throw a warning', () => {
      const expectedProps = {
        example: 'Example Text',
      }
      const propsError = checkProps(Talle, expectedProps)
      expect(propsError).toBeUndefined()
    })
	})

	describe('Renders', function () {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        example: 'Example Text',
      }
      wrapper = shallow(<Talle {...props} />)
    })

    it('Should render', function () {
      const component = findByTestAttr(wrapper, 'Talle');
      expect(component.length).toBe(1);
    })
  })
})
