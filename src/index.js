import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import { store, persistor } from './store'
import App from './App'

injectTapEventPlugin()

ReactDOM.render(
  <AppContainer>
    {/*<Provider store={store}>*/}
      {/*<PersistGate loading={null} persistor={persistor}>*/}
        <HashRouter>
          <App />
        </HashRouter>
      {/*</PersistGate>*/}
   {/* </Provider> */}
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(App)
  })
}
