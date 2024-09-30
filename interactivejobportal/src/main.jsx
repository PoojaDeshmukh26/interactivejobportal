import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import CompanyReview from './components/CompanyReview/CompanyReview.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path="/profile" render={() => <Profile onLogout={handleLogout} />} />
        <Route path="/companyreview" component={() =><div><CompanyReview/></div>} />
        <Route path="/salaryguide" component={() => <div>Salary Guide Page</div>} />
      </Route> 
    )
  )
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )