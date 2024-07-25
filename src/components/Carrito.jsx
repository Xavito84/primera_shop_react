import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CardContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='container'>
            <h1 className="main-title">Carrito</h1>

            {carrito.length > 0 ? (
                <>
                    {carrito.map((prod) => (
                        <div key={prod.id}>
                            <h2>{prod.titulo}</h2>
                            <p>Precio unidad: {prod.precio} €</p>
                            <p>Precio total: {prod.precio * prod.cantidad} €</p>
                            <p>Cant: {prod.cantidad}</p>
                        </div>
                    ))}
                    <h2>Precio total: {precioTotal()} €</h2>
                    <button onClick={handleVaciar} className="agregar-al-carrito">Vaciar</button>
                </>
            ) : (
                <h2>El carrito está vacío</h2>
            )}
        </div>
    );
}

export default Carrito;
