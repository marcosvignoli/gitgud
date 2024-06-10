import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './screens/home'
import Session from './screens/session'
import Advice from './screens/advice'
import Mood from './screens/mood'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/session/',
    element: <Session />
  },
  {
    path: '/advice',
    element: <Advice />
  },
  {
    path: '/mood',
    element: <Mood />
  }
])

function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App
