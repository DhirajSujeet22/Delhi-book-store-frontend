import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from "react";
import './index.css'
import Loader from './components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader/>}>
    <App />
    </Suspense>
)
