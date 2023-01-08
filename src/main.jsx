import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'

/* existing imports */
import { deleteContacts } from './contacts'
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root'
import Contact, { 
  loader as contactLoader
} from './routes/contact'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <div>Main default page!</div>
      },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader
      }
    ]
  }
])

async function runApp () {
  await deleteContacts()

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )  
}

runApp()
