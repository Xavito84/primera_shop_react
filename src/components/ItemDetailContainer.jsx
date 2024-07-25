import { useState, useEffect } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import { ItemDetail } from "./itemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.error("Error al obtener el ítem:", error);
            });

    }, [id]); 

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
};
