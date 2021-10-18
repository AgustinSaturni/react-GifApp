
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({categoria}) => {
 
    const {data:images, loading} =useFetchGifs(categoria);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categoria}</h3>
            {loading? <p className="animate__animated animate__flash">Loading</p> : null} 
            <div className="card-grid">
              {
                  images.map(image =>  (<GifGridItem key={image.id} {...image} />) )
              }
           </div>
        </>
    )
}

GifGrid.propTypes={
    categoria: PropTypes.string.isRequired
}