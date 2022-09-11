import React from 'react'
import '../src/Assets/App.css';
import '../src/Assets/DarkMode.css';
import '../src/Assets/Global.css';
import { createContext, useState,useEffect} from 'react'
import {Routes, Route} from "react-router-dom";

import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';

import ScrollIndicator from './Components/ScrollIndicator';
import BackTop from './Components/BackTop';
import Footer from './Components/Footer';


export const ThemeContext = createContext(null);

function App() {  
  let [theme, setTheme] = useState("light");
  function toggleTheme() {    
    if(theme==='light'){
      setTheme('dark');
      localStorage.setItem('modes','dark');
    }else{
      setTheme(theme==='dark');
      setTheme('light');
      localStorage.setItem('modes','light');
    }
  }; 
  useEffect(()=>{    
    const theme=localStorage.getItem('modes');
    setTheme(theme);
  },[]);
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>    
    <div className="App" id={theme}>           
      <NavBar themeprops={theme} toglleprops={toggleTheme}/>  
      <ScrollIndicator/>     
      <BackTop themeprops={theme}/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />        
        <Route path="contact" element={<Contact />} />        
        <Route path="*" element={<PageNotFound />} />
     </Routes>   
      <Footer/>
    </div>
     </ThemeContext.Provider>
  );
}
export default App;