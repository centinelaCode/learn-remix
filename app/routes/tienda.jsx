import { getGuitarras } from '../models/guitarras.server';

export async function loader() {
  // ==== forma de hacer una petición a una api ====
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  // const resultado = await respuesta.json();


  // ==== Otra forma de hacer una petición a una api ====
  const guitarras = await getGuitarras();
  // console.log(guitarras) // solo se muestran en la consola del servidor
  
  return guitarras;
}



function Tienda() {
  

   return (
     <div>Tienda</div>
   )
 }
 
 export default Tienda