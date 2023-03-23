
export const formatearFecha = fecha => {
   const fechaNueva = new Date(fecha);

   const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',      
   }

   return fechaNueva.toLocaleDateString('es-Es', opciones);
}


export const formatearHora = hora => {
   const horaNueva = new Date(hora);
   return horaNueva.toLocaleTimeString('es-Es');
}