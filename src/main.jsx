import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav.jsx'
import Home from './home.jsx';
import './index.css'
import { fromJSON } from 'postcss'

createRoot(document.getElementById('root')).render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" component={About} /> */}
    </Routes>
  </Router>
)
