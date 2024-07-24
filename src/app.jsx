import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/footer'
import AboutPage from './components/About'
import Timer from './components/Timer'
import Skillss from './components/Skills'
import Design from './components/Design'
import Works from './components/Work'
import PdfComponent from './components/Pdf'
import './App.css'


export default function App() {
  return (
    <div>
      <NavBar/>
      <AboutPage/>
      <Skillss/>
      <Design/>
      <Works/>
      <PdfComponent/>
      <Timer/>
      <Footer/>
    </div>
  );
}