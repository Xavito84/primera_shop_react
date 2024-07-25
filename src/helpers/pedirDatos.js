// src/helpers/pedirDatos.js
import data from "../components/data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);
        if (item) {
            resolve(item);
        } else {
            reject({ error: "no se encontró el producto" });
        }
    });
};
