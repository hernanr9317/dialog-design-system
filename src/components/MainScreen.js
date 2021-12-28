import React from 'react';
import Swal from 'sweetalert2';

export const MainScreen = () => {

    const handleButton = (type) => {

        switch (type) {
            case 'Warning':
                Swal.fire({
                    title: '¡Cuidado!',
                    text: 'No podrás volver atrás',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Borrar',
                    cancelButtonText: 'Cancelar',
                    showCloseButton: true
                  })
                break;

            case 'Success':
                Swal.fire({
                    title: 'Vamos!',
                    text: 'Todo ha salido bien :)',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Cerrar pestaña',
                    showCloseButton: true
                  })
                break;

            case 'Error':
                Swal.fire({
                    title: 'Upss',
                    text: 'Algo ha pasado',
                    icon: 'error',
                    showCancelButton: false,
                    showConfirmButton: false,
                    showCloseButton: true
                  })
                break;

            default:
                break;
        }

    }

    return (
        <div>
            <div className="btn-group btn-group-lg d-flex justify-content-center" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={ () => handleButton("Warning")}>Warning</button>
                <button type="button" className="btn btn-secondary" onClick={ () => handleButton("Success")}>Success</button>
                <button type="button" className="btn btn-secondary" onClick={ () => handleButton("Error")}>Error</button>
            </div>
        </div>
    )
}
