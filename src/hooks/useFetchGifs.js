import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {   //Esto se dispara solo cuando cambia la categoria que esta entre corchetes.
       getGifs(categoria).then(img => setState({
           data: img,
           loading: false
       }))
    }, [categoria]);

    return state;

}
