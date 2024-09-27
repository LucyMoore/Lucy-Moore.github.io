//define the routes
/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './Components/App'


// eslint-disable-next-line react/jsx-key

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    </Route>
  </Route>
)

export const router = createBrowserRouter(routes)
