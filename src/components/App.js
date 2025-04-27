
import React, { useState } from "react";
import './../styles/App.css';
import ThemeContext from "./ThemeContext"
import Auth from "./Auth";

const App = () => {
  const [isChecked,setIsChecked] = useState(false)
  return (
    <div>
        {/* Do not remove the main div */}
        <ThemeContext.Provider value={{isChecked,setIsChecked}}>
          <Auth />
        </ThemeContext.Provider>
    </div>
  )
}

export default App
