import {useFetchGifs} from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas sobre el hook useFetchGif',()=>{
                            //aca no puedo hacer match con snapshot porque no hay nada que se renderice fisico.
    test('debe de recordar el estado inicial', async() => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch'));

       // const {data:images, loading} = useFetchGifs(categoria); ---> asi no funca.

       const {data, loading} = result.current; //me saca el valor actual del hook.

       await waitForNextUpdate({timeout:3000});  //necesario para que termine la ejecucion de manera correcta. 

       expect(data).toEqual([]);
       expect(loading).toBeTruthy;
    })

    test('debe de retornar un arreglo de imgs y loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch')); 
        //waitForNextUpdate retorna una promesa, me indica cuando sucedio un cambio en el estado del hook.
        await waitForNextUpdate({timeout:3000});;

        const {data, loading} = result.current; //me saca el valor actual del hook.

       expect(data.length).toBe(10);
       expect(loading).toBe(false);

    })
    
    




})