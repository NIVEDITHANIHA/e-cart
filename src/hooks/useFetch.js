import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [state, setState] = useState(null)
    console.log(state);

    useEffect(() => {
        fetch(url).then((res) => {
            res.json().then((result) => {
                setState(result.products)

            })
        })

    },[])


    return state

}


export default useFetch;