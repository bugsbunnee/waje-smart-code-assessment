import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import routes from './utils/router.tsx'
import './index.css'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <RouterProvider router={router} />
          <Toaster />
  </React.StrictMode>,
)
