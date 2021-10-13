import React from 'react'
import {shallow} from 'enzyme'
import {GifGridItem} from '../../Componentes/GifGridItem';
import testUtils from 'react-dom/test-utils';


describe('Pruebas en <GridItems />', ()=>{
    const title= 'Hola';
    const url = 'https://asdsad.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)  //el shallow renderiza un componente como el render.

 //------------------------------Pruebas----------------------------------------------------

    test('debe de mostrar el componente correctamente',()=>{
  
        expect(wrapper).toMatchSnapshot(); 
    //me arma un snapshot donde verifico que renderice lo que quiero. Si yo hago un cambio en GifGridItem, entonces
    //la snapshot no va a matchear con mi renderizacion nueva.
    })


    test('debe tener un parrafo con el title',()=>{
        const titulo = wrapper.find('p');
        expect(titulo.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props',()=>{

        const img = wrapper.find('img')  //si hubiera mas de una imagen debo ponerle numeral o la clase..
        expect(img.prop('src')).toBe(url); //img.prop saco lo que quiero de objeto.
        expect(img.prop('alt')).toBe(title);
    })

    test('debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true); //forma corta.
       //Forma larga: expect(div.prop('className').slice(23,38).trim()).toBe('animate__fadeIn');
       
    })
    




})