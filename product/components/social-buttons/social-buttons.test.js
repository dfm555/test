import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from 'utils';

import SocialButtons  from './index'

describe('SocialButtons Component', () => {
	describe('Checking PropTypes', () => {
		it('Should NOT throw a warning', () => {
      const expectedProps = {
        facebookLink: 'Example Text',
        twitterLink: 'Example Text',
        whatsappLink: 'Example Text',
      }
      const propsError = checkProps(SocialButtons, expectedProps)
      expect(propsError).toBeUndefined()
    })
	})

	describe('Renders', function () {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
          facebookLink: 'Example Text',
          twitterLink: 'Example Text',
          whatsappLink: 'Example Text',
      }
      wrapper = shallow(<SocialButtons {...props} />)
    })

    it('Should render', function () {
      const component = findByTestAttr(wrapper, 'SocialButtons');
      expect(component.length).toBe(1);
    })
  })
})
