import React, { useState } from 'react'
import { AddCategory } from './Componentes/AddCategory';
import { GifGrid } from './Componentes/GifGrid';

export const GifExpertApp = ({defaultCategorias=[]}) => {

//------Defino mi estado------------
    const [categorias, setCategorias] = useState(defaultCategorias); 
//-----------------------------------------------



//---------------Como agregar un elemento a un array-----------------------
    /* const AgregarElemento = () => {
        setCategorias([...categorias,'Dexter']); //Cuando uso el set, cambio el estado a lo que ponga dentro de los parentesis.
    } */
//-------------------------------

    return (
        <>
          <h2>GifExpertApp</h2>  
          <AddCategory setCategorias={setCategorias} />
          <hr/>
          
          <ol>
              {
                  categorias.map((categoria)=><GifGrid key={categoria} categoria={categoria} /> )
              }
          </ol>
        </>
    )
}
