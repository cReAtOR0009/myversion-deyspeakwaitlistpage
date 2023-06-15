import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import './loader.css'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import HomeLayouts from "./layouts/HomeLayouts"
import PrivacyLayouts from './layouts/PrivacyLayouts'
import TermsAndCondition from "./pages/TermsAndCondition"


function App() {
  const router  = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<HomeLayouts/>}>
        <Route index element={<Home />}/>
        <Route path='policy' element={<PrivacyLayouts />}>
          <Route path='privacy' element={<Privacy />}/>
          <Route path='terms-and-condition' element={<TermsAndCondition />}/>
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
