import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skill'
import Contact from './components/Contact'
import Education from './components/Education'
import { motion } from "framer-motion";
import TerminalIntro from './components/TerminalINtro'
import GalaxyBackground from './components/GalaxyBackground'
import AllProjects from './components/AllProjects'
import HomePage from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  if (loading)
    return <TerminalIntro onFinish={() => setLoading(false)} />;

  return (
    <>
      <div className="container">
        <BrowserRouter>

          <Routes>

            <Route path="/" element={<HomePage/>} />

            <Route path="/allprojects" element={<AllProjects/>} />

          </Routes>

        </BrowserRouter>

       
      </div>
    </>
  )
}

export default App
