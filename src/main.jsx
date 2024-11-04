import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/header/Header'
import './index.css'
import ChapterList from './Components/chapters/ChaptersList'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Verse from './Components/chapters/Verse'
import { ChapterProvider, UserContext } from './context/ChapterContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<ChapterList />} />
      <Route 
      // loader ={verseInfoLoader}
      path='/verse/:id'
       element={<Verse />} />  
    </Route>)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChapterProvider>
    <RouterProvider router={router} />

    </ChapterProvider>
  
)
