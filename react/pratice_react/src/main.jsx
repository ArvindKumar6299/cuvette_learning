import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './basicCrud/Context/UserContextProvider.jsx'
// import {Provider} from "react-redux"
// import {store} from "./Redux/Store/store.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* //what ever data will be present in usercontextProvider will be avilable to app.jsx */}
    <UserContextProvider> 
    <App />
    </UserContextProvider>
    {/* </Provider> */}
  </StrictMode>,
)
