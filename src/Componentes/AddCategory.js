import React,{useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategorias}) => { //recibo funcion que mandé
    const [valorInicial, setState] = useState(''); //defino el estado del componente

    const handleChange = (event)=>{      //Este me actualiza mi estado con cada char que escribo en el box.

        setState(event.target.value)

    }

    const handleSubmit=(event)=>{       //este usa la funcion que viene como argumento y agrega al estado del otro componente un elemento mas.
        event.preventDefault();
        if(valorInicial.trim().length >2){
            setCategorias(categorias => [valorInicial,...categorias]);
            setState('');
        }
      
    }

    return (            //este onSubmit actua cuando aprieto enter.
        <form onSubmit={handleSubmit}> 
            <p>{valorInicial}</p>
            <input type="text" value={valorInicial} onChange={handleChange} />
        </form>
    )
}


AddCategory.propTypes={
    setCategorias: PropTypes.func.isRequired

}