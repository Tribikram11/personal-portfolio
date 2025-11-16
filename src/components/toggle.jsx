import { useState } from "react"

function Toggle({isCheck, onChange}){
   
    const trackbase = "relative w-12 h-6 rounded-full cursor-pointer transition-colors";
    const trackState = isCheck ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-700';

    const thumbBase = "absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all";
     const thumbState = isCheck ? 'translate-x-6' : 'translate-x-0';

    return(
    <div className="flex items-center">
        <input type="checkbox"
                id="theme-toggle"
                className="hidden"
                checked={isCheck} 
                onChange={onChange}
        />
        <label htmlFor="theme-toggle"
                className={`${trackbase} ${trackState}`}
        >
            <span className={`${thumbBase} ${thumbState}`}>

            </span>

        </label>
    
    </div>
    )
}


export default Toggle;