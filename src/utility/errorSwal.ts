import Swal from 'sweetalert2';

export const errorSwal = (err:any) => {
    Swal.fire("Opps Somethis was Wrong", err.toString(), "error");
}