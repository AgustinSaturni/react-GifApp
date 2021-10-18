import { shallow } from "enzyme"
import { AddCategory } from "../../Componentes/AddCategory"
import React from 'react'

describe('Pruebas en el componente',()=>{

//-------------------------Primeras definiciones-----------------------------
    const setCategorias = jest.fn();   //es una funcion... Me sirve para saber como fue llamada, cuantas veces, et
    let wrapper = shallow(<AddCategory setCategorias={setCategorias} />);
    
    beforeEach(()=>{   //necesario para resetear el estate de todo antes de que se ejecute cada prueba test.
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategorias={setCategorias} />);

    });
//---------------------------Pruebas-----------------------------------------
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();   //Prueba base para matchear el snapshot por si cambia.

    })

   test('debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';                   

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text()).toBe(value); 
    })
 

    test('NO debe de postear la informacion con el submit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault: () => {}}); //simulo el submit.

        expect(setCategorias).not.toHaveBeenCalled();   //Pido que la cantidad de llamados de la funcion sea 0

    })


    
    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit',{preventDefault: () => {}}); //Al hacer el submit se resetea la caja

        expect(setCategorias).toHaveBeenCalledWith(expect.any(Function)); //Obliga a que sea llamado con una funcion
        expect(wrapper.find('input').prop('value')).toBe('')
    })


})