import { GifGrid } from "../../Componentes/GifGrid";
import {shallow} from 'enzyme'
import React from 'react'
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs') //finge llamadas al archivo.

describe('Testing en el componente',()=>{
    
    test('Match con el snapshot',()=>{

            useFetchGifs.mockReturnValue({
                data: [],
                loading: true           //valores que el useFetch regresa por defecto
            });
            
            const wrapper = shallow(<GifGrid categoria={"dbz"} />)  //el shallow renderiza un componente como el render.
            expect(wrapper).toMatchSnapshot(); 
    
    })

    test('debe de mostrar Items cuando se cargan imagenes con useFetchGifs',()=>{
        
       const gifs = [{
           id:'ABC',
           url: 'https://localhost/3030',
           title: 'cualquier cosa'
       }]

     useFetchGifs.mockReturnValue({
                data: gifs,
                loading: false           //valores que el useFetch regresa por defecto
            });
            
            const wrapper = shallow(<GifGrid categoria={"dbz"} />)
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('p').exists()).toBe(false);
            expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
})

})