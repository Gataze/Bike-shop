import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [data, setData] = useState("")
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {

        const abortCont = new AbortController()

        fetch(url, {signal: abortCont.signal})
    .then(res => {
        if(!res.ok){
            console.log('could not fetch the data for that resource')
        }

        return res.json()
    })
    .then(data=> {
        setData(data)
        setIsPending(false)
        setError(false)

    })
    .catch(err => {
        if(err.name === 'AbortError'){
            console.log('fetch aborted')
        }else{
            setIsPending(false)
            setError(err.message)
        }
    })

    return () => abortCont.abort();

    },[url])

    return {data, error, isPending}
}

export default useFetch