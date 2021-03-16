import React from "react"
import { Provider } from "react-redux"
import configureStore from "store/configureStore"

import "assets/antd-custom.less";

export default function App({ Component, pageProps }) {
  const store = configureStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
