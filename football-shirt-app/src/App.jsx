import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ShirtDetailsPage from './pages/ShirtDetailsPage'
import { ShirtContext } from './context/ShirtContext'
import shirts from './data/shirts'

function App() {
  const [shirtCollection, setShirtCollection] = useState(shirts)
  const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("default");

  return (
    <ShirtContext.Provider value={{ shirtCollection, setShirtCollection, searchQuery, setSearchQuery, sortOption, setSortOption }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shirts/:id" element={<ShirtDetailsPage />} />
      </Routes>
    </ShirtContext.Provider>
  )
}
//
export default App
