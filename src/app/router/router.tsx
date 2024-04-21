import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from 'pages/about'
import { HomePage } from 'pages/home'
import { RootPage } from 'pages/root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
])
