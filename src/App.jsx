import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './global.css'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import TitlePage from './pages/TitlePage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Router>
      <div className={`App ${darkMode ? "bg-dark-600" : "bg-light-800"} h-screen overflow-x-hidden`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} brand="React IMDB" />
        <Switch>
          <Route exact path={["/", "/search/:query", "/page/:pageNumber"]}>
            <HomePage darkMode={darkMode} />
          </Route>
          <Route path="/title/:type/:id">
            <TitlePage darkMode={darkMode} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App