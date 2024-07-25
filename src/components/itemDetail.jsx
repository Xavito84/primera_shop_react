import React, { useContext, useState } from 'react'
import { ItemCount } from './ItemCount'
import { CardContext } from '../context/CardContext'

export const ItemDetail = ({item}) => {

    const {carrito , agregarAlCarrito} = useContext(CardContext);
    console.log(carrito);

    const [cantidad, setCantidad]= useState(1);

    //funciones
    const handleRestar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };
    const handleSumar = () => {
        cantidad< item.stock && setCantidad(cantidad +1);
    }
    




return (
    <div className='container'>
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.imagen} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className='descripcion'>{item.descripcion}</p>
                <p className='categoria'>Categoria:{item.categoria}</p>
                <p className='precio'>€{item.precio}</p>
                <ItemCount  
                cantidad={cantidad} 
                handleRestar={handleRestar} 
                handleSumar={handleSumar} 
                handleAgregar={() =>{ agregarAlCarrito (item, cantidad)}}
                />
            </div>
        </div>
    
    </div>
)
}
