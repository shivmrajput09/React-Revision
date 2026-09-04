import React, { createContext, useState } from 'react';
import ChildA from './components/ChildA';

const ThemeContext = createContext(); 

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div style={{
      border: '2px solid black',
      padding: '20px',
      borderRadius: '10px',
      margin: '15px',
      // Dynamic styles: Check theme and apply colors accordingly
      backgroundColor: theme === 'dark' ? 'black' : 'white', 
     }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ChildA />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
export { ThemeContext };