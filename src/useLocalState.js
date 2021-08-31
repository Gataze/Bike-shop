import { useState } from 'react'


const getLocalStorage = (key, initialValue) => {
    const saved = JSON.parse(localStorage.getItem(key))
    if(saved !== null)
        return saved
        
    
    if(initialValue instanceof Function) return initialValue()
    return initialValue
}



const useLocalState = (key, initialValue) => {
    const [number, setNumber] = useState(() => {
        return getLocalStorage(key, initialValue)
    })

    return [number, setNumber]
}


export default useLocalState