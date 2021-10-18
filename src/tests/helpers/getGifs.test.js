import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con fetch',()=>{

    test('debe de traer 10 elementos', async() => {   //Esto del async es porque getGifs devuelve una promesa...
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);

    })

    test('debe de traer 0 elementos', async() => {   //Esto del async es porque getGifs devuelve una promesa...
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })

})