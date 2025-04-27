import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"

const Auth = () => {
    const {isChecked,setIsChecked} = useContext(ThemeContext)
    return(
        <div>
            <h1>Click on the checkbox to get authenticated</h1>
            {isChecked ? <p>You are now authenticated, you can proceed</p> : <p>you are not authenticated</p>}<br />
            <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />I'm not a robot
        </div>
    )
}

export default Auth