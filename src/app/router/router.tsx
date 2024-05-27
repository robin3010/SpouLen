import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutPage } from 'pages/about'
import { HomePage } from 'pages/home'
import { RootPage } from 'pages/root'

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)

export const AppRouter = () => <RouterProvider router={router} />
