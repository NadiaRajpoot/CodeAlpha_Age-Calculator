import { useState } from "react";
import Container from "./Components/Container";
import Navbar from "./Components/Navbar";


function App() {
  const [theme ,setTheme] = useState('light');

  const toggleTheme = ()=>{
     if(theme === 'light'){
      setTheme('dark');
     }
     else{
      setTheme('light');
     }
  }
  return (
    <>
     <Navbar theme = {theme} toggleTheme= {toggleTheme}/>
     <Container  theme = {theme} toggleTheme= {toggleTheme}/>
    </>
  )
}

export default App;
