import React from "react"
import { shallow } from "enzyme"
import Index  from "./index"

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(),
}))

describe("Index", () => {
  const Component = shallow(<Index />)

  it("Should be defined", () => {
    expect(Component).toBeDefined()
  })
})
