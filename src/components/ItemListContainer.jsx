import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { pedirDatos } from '../helpers/pedirDatos'; // Ajustar la ruta si es necesario
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const[titulo, setTitulo]= useState("Productos");
    const categoria= useParams().categoria;

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(categoria){
                    setProductos( res.filter((prod) => prod.categoria === categoria) );
                    setTitulo(categoria);
                }else{
                    setProductos(res); // Actualizar el estado con los datos obtenidos
                    setTitulo("Productos");
                }
                
            })
            
    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
};
