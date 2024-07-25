import React, { useEffect } from 'react'


export const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("click");
        }
        window.addEventListener("click", clickear);
        
        return() => {
            window.removeEventListener("click",clickear);
        }

    }, [])    
    

return (
    <div className="container">
        <h1 className='name-title'>Nosotros</h1>
        <p>Este es el componente "Nosotros"</p>
    </div>
)
}


