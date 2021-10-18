import { GifExpertApp } from "../../GifExpertApp";
import {shallow} from 'enzyme'
import React from 'react'

describe('Vamos a testear toda la App', ()=>{

    test('Match con el snapshot',()=>{
        const wrapper = shallow(<GifExpertApp />)  //el shallow renderiza un componente como el render.
        expect(wrapper).toMatchSnapshot(); 

    })

    test('Debe de mostrar una lista de categorias',()=>{

        const categorias=['One Punch','DragonBall'];
        const wrapper = shallow(<GifExpertApp defaultCategorias={categorias}/>)  //el shallow renderiza un componente como el render.
        expect(wrapper).toMatchSnapshot(); 
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })

})